import FeaturedArticlesClient from "./ArticlesClient";
import { getArticles } from "@/content/articles";

export default async function FeaturedArticles() {
  const articles = await getArticles();
  return <FeaturedArticlesClient items={articles} />;
}
