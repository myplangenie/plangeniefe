import Link from "next/link";
import type { Metadata } from "next";
import DisplayLayout from "@/components/layout/displayLayout";
import { getArticles } from "@/content/articles";
import Image from "next/image";
import CoverImg from "@/images/blog/relationship.jpg";

export const metadata: Metadata = {
  title: "Articles — Plan Genie Resources",
  description: "Browse articles from the Plan Genie team.",
  alternates: { canonical: "/resources/articles" },
};

export const dynamic = "force-dynamic";

export default async function ArticlesIndex() {
  const articles = await getArticles();
  return (
    <DisplayLayout>
      <section className="max-w-[1100px] mx-auto px-5 md:px-8 py-16 font-manrope">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#12141D]">Articles</h1>
        <p className="mt-2 text-gray-600">Placeholders for articles. Content will be updated from the Word document.</p>

        <ul className="mt-8 grid sm:grid-cols-2 gap-6">
          {articles.map((a) => (
            <li key={a.slug} className="border rounded-xl bg-white shadow-sm overflow-hidden">
              <Image
                src={(a.cover ? (a.cover as any) : CoverImg) as any}
                alt={a.title}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                width={1000}
                height={1000}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
              <h3 className="text-lg font-semibold">
                <Link href={`/resources/articles/${a.slug}`} className="hover:underline">
                  {a.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-600 mt-1">{a.summary}</p>
              <div className="text-xs text-gray-500 mt-3">
                {a.author ? <span>{a.author}</span> : null}
                {a.author && a.date ? <span> • </span> : null}
                {a.date ? new Date(a.date).toLocaleDateString() : null}
              </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </DisplayLayout>
  );
}
