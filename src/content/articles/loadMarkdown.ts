import fs from "node:fs";
import path from "node:path";
import type { Article } from "./index";
import "server-only";

const MD_PATH = path.join(process.cwd(), "article.md");

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getArticlesFromMarkdown(): Article[] {
  try {
    if (!fs.existsSync(MD_PATH)) return [];
    const raw = fs.readFileSync(MD_PATH, "utf8").replace(/\r\n/g, "\n");

    // Match repeated blocks: ---\n(front matter)\n---\n(body) until next --- title or end
    const re = /---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*?)(?=(?:\n---\s*\n\s*---\s*\n\s*title:|\n---\s*\n\s*title:|\n?$))/gim;

    const items: Article[] = [];
    let m: RegExpExecArray | null;
    while ((m = re.exec(raw))) {
      const fm = m[1];
      const body = (m[2] || "").trim();

      const tMatch = /\btitle:\s*"([\s\S]*?)"/i.exec(fm);
      const sMatch = /\bslug:\s*"([^"]+)"/i.exec(fm);
      const dMatch = /\bdate:\s*"([^"]+)"/i.exec(fm);
      const title = tMatch ? tMatch[1].trim() : "Untitled";
      const slug = (sMatch ? sMatch[1] : slugify(title)) || slugify(title);
      const date = dMatch ? dMatch[1] : undefined;

      const summary = body.split(/\n\n+/)[0]?.replace(/\s+/g, " ").slice(0, 160) + "…";

      items.push({ title, slug, date, summary, author: "Plan Genie Team", body });
    }

    return items;
  } catch {
    return [];
  }
}

