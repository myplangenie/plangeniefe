import fs from "node:fs";
import path from "node:path";
import type { Article } from "./index";
import "server-only";

const JSON_PATH = path.join(process.cwd(), "plan-genie-articles.json");

function textSummaryFromHtml(html?: string) {
  if (!html) return undefined;
  const text = html
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text ? (text.length > 180 ? text.slice(0, 180) + "…" : text) : undefined;
}

export function getArticlesFromJson(): Article[] {
  try {
    if (!fs.existsSync(JSON_PATH)) return [];
    const raw = fs.readFileSync(JSON_PATH, "utf8");
    const parsed = JSON.parse(raw) as Array<{
      title: string;
      slug: string;
      date?: string;
      html?: string;
      author?: string;
      summary?: string;
      image?: string;
      img?: string;
    }>;

    return parsed.map((a, i) => ({
      title: a.title || `Article ${i + 1}`,
      slug: a.slug || `article-${i + 1}`,
      author: a.author || "Plan Genie Team",
      date: a.date,
      html: a.html,
      summary: a.summary || textSummaryFromHtml(a.html),
      cover: a.image || a.img,
    }));
  } catch {
    return [];
  }
}
