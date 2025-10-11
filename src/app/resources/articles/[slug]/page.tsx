import type { Metadata } from "next";
import Link from "next/link";
import DisplayLayout from "@/components/layout/displayLayout";
import { getArticles } from "@/content/articles";
import Image from "next/image";
import JsonLd from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/seo";

type Props = { params: { slug: string } };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const list = await getArticles();
  const article = list.find((a) => a.slug === params.slug);
  return {
    title: article ? article.title : "Article",
    description: article?.summary ?? "Plan Genie resources article.",
    alternates: { canonical: `/resources/articles/${params.slug}` },
  };
}

export default async function ArticlePage({ params }: Props) {
  const list = await getArticles();
  const article = list.find((a) => a.slug === params.slug);
  if (!article) {
    return (
      <DisplayLayout>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-20">
          <h1 className="text-2xl font-bold font-manrope">Article not found</h1>
          <p className="mt-4">
            Go back to{" "}
            <Link href="/resources" className="text-primary underline">
              Resources
            </Link>
            .
          </p>
        </div>
      </DisplayLayout>
    );
  }

  return (
    <DisplayLayout>
      <>
        {/* Article JSON-LD */}
        {article && (
          <JsonLd
            id="ld-article"
            data={{
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: article.title,
              datePublished: article.date || undefined,
              author: article.author ? { '@type': 'Person', name: article.author } : undefined,
              mainEntityOfPage: `${siteConfig.url}/resources/articles/${article.slug}`,
              image: article.cover ? `${siteConfig.url}${article.cover}` : undefined,
              publisher: {
                '@type': 'Organization',
                name: siteConfig.name,
                logo: {
                  '@type': 'ImageObject',
                  url: `${siteConfig.url}/images/favicon/android-chrome-192x192.png`,
                },
              },
            }}
          />
        )}
        <header className="bg-primary pt-48 pb-28 text-white">
          <div className="md:max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex w-max items-center gap-7 mb-4">
                <Link href="/resources" className="text-sm text-white">
                  ← Back to Resources
                </Link>
                <p className="text-sm">
                  &bull;
                  {article.date
                  ? new Date(article.date).toLocaleDateString()
                  : null}
                </p>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl md:w-[60%] mx-auto leading-[1.2] font-extrabold font-manrope tracking-tight mb-3 md:mb-7">
                {article.title}
              </h1>
              {/* <p className="text-xl opacity-70 font-manrope">
                Start free, upgrade when you need more depth.
              </p> */}
            </div>
          </div>
        </header>
        {/* Hanging cover image between header and content */}
        <div className="relative -mt-16 md:-mt-24 z-10">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <Image
              src={(article.cover ? (article.cover as any) : "/blog/relationship.jpg") as any}
              alt={article.title}
              sizes="(max-width: 768px) 100vw, 768px"
              width={1000}
              height={1000}
              className="w-full h-auto rounded-xl shadow-lg ring-1 ring-black/10"
              priority
            />
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-16 font-manrope">
          <div className="prose prose-neutral">
            {article.html ? (
              <div dangerouslySetInnerHTML={{ __html: article.html }} />
            ) : article.body ? (
              article.body
                .split(/\n\n+/)
                .filter(Boolean)
                .map((p, i) => <p key={i}>{p}</p>)
            ) : null}
          </div>
        </article>
      </>
    </DisplayLayout>
  );
}
