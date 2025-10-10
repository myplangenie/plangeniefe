import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import type { Article } from "./index";

const DOC_PATH = path.join(process.cwd(), "content", "articles", "articles.docx");

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Attempts to parse article headings from the Word document at
 * content/articles/articles.docx by shelling out to `unzip -p` to read
 * word/document.xml. If anything fails, returns an empty list.
 */
export function getArticlesFromDocx(): Article[] {
  try {
    if (!fs.existsSync(DOC_PATH)) return [];

    const unzip = spawnSync("unzip", ["-p", DOC_PATH, "word/document.xml"], {
      encoding: "utf8",
    });
    if (unzip.status !== 0 || !unzip.stdout) return [];
    const xml = unzip.stdout as string;

    // Break into paragraph blocks to inspect styles
    const paragraphs = xml.split(/<w:p[\s>]/).slice(1).map((p) => "<w:p " + p.split("</w:p>")[0] + "</w:p>");

    const titles: string[] = [];
    for (const p of paragraphs) {
      const isHeading = /<w:pStyle[^>]*w:val\s*=\s*"(Heading|Title)[^"]*"/i.test(p);
      if (!isHeading) continue;
      const texts = Array.from(p.matchAll(/<w:t[^>]*>(.*?)<\/w:t>/g)).map((m) => m[1]).join("");
      const title = texts.replace(/\s+/g, " ").trim();
      if (title && !titles.includes(title)) titles.push(title);
    }

    // Fallback: if no styled headings, infer titles by taking paragraphs in ALL CAPS or longer sentences
    if (!titles.length) {
      const parasText = paragraphs
        .map((p) => Array.from(p.matchAll(/<w:t[^>]*>(.*?)<\/w:t>/g)).map((m) => m[1]).join("").trim())
        .filter(Boolean);
      for (const t of parasText) {
        if (t.length > 8 && /[A-Za-z]/.test(t)) titles.push(t);
        if (titles.length >= 12) break; // safety cap
      }
    }

    const now = new Date().toISOString().slice(0, 10);
    const list: Article[] = titles.map((title, i) => ({
      slug: slugify(title) || `article-${i + 1}`,
      title,
      author: "Plan Genie Team",
      date: now,
      summary: "Updated content from the attached Word document will go here.",
    }));

    return list;
  } catch {
    return [];
  }
}

