import "server-only";

export type Article = {
  slug: string;
  title: string;
  author?: string;
  date?: string;
  summary?: string;
  img?: string;
  cover?: string; // path to image in public or imported asset
  body?: string; // raw markdown/plain text body
  html?: string; // when provided by JSON, used directly in the page
};

import { getArticlesFromDocx } from "./loadDocx";
import { getArticlesFromMarkdown } from "./loadMarkdown";
import { getArticlesFromJson } from "./loadJson";

function fallback(): Article[] {
  return [
    {
      slug: "placeholder-article-1",
      title: "Placeholder Article 1",
      author: "Plan Genie Team",
      date: "2025-10-01",
      summary: "Updated content from the Word document will go here.",
    },
    {
      slug: "placeholder-article-2",
      title: "Placeholder Article 2",
      author: "Plan Genie Team",
      date: "2025-10-01",
      summary: "Updated content from the Word document will go here.",
    },
    {
      slug: "placeholder-article-3",
      title: "Placeholder Article 3",
      author: "Plan Genie Team",
      date: "2025-10-01",
      summary: "Updated content from the Word document will go here.",
    },
    {
      slug: "placeholder-article-4",
      title: "Placeholder Article 4",
      author: "Plan Genie Team",
      date: "2025-10-01",
      summary: "Updated content from the Word document will go here.",
    },
    {
      slug: "placeholder-article-5",
      title: "Placeholder Article 5",
      author: "Plan Genie Team",
      date: "2025-10-01",
      summary: "Updated content from the Word document will go here.",
    },
    {
      slug: "placeholder-article-6",
      title: "Placeholder Article 6",
      author: "Plan Genie Team",
      date: "2025-10-01",
      summary: "Updated content from the Word document will go here.",
    },
  ];
}

export async function getArticles(): Promise<Article[]> {
  try {
    const jsonArticles = getArticlesFromJson();
    if (jsonArticles.length) return jsonArticles;
    const md = getArticlesFromMarkdown();
    if (md.length) return md;
    const parsed = getArticlesFromDocx();
    return parsed.length ? parsed : fallback();
  } catch {
    return fallback();
  }
}
