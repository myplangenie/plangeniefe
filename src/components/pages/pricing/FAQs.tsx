import { Button } from "@/components/ui/button";
import JsonLd from "@/components/seo/JsonLd";

const faqs = [
  {
    q: "Q. Can I change plans anytime?",
    a: "Yes. You can upgrade, downgrade, or cancel at any time. Changes take effect at the start of your next billing cycle, and all of your work remains safely stored.",
  },
  {
    q: "Q. Is training included?",
    a: "All paid plans include onboarding guidance and access to our resource library. Live training is available as an add-on.",
  },
  {
    q: "Q. Can nonprofits access discounts?",
    a: "Yes, we offer nonprofit and education discounts. Contact sales for details.",
  },
  {
    q: "Q. Do you offer white-label?",
    a: "White-labeling is available on Enterprise plans.",
  },
  {
    q: "Q. What support options are included?",
    a: "Email support on Pro, priority support on Prime, and dedicated support for Enterprise.",
  },
];

export default function PricingFAQ() {
  return (
    <section className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-12 md:mt-20">
      <JsonLd
        id="ld-faq"
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q.replace(/^Q\.\s*/, ''),
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
      <h2 className="text-xl md:text-4xl font-bold text-gray-900 text-center">
        Frequently Asked Questions
      </h2>
      <div className="mt-7 md:mt-14 divide-y rounded-lg border bg-white">
        {faqs.map((item, idx) => (
          <details key={idx} className="group px-5 py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between text-base text-gray-900 font-black font-manrope">
              {item.q}
              <span className="ml-4 text-gray-400 group-open:hidden">＋</span>
              <span className="ml-4 text-gray-400 hidden group-open:inline">
                －
              </span>
            </summary>
            <p className="mt-2 text-sm text-gray-600">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
