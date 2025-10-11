export default function TopDownloads() {
  const items = [
    {
      title: "Original Plan Genie Business Trainer (PDF)",
      meta: "Comprehensive training guide for the classic Plan Genie methodology.",
      gradient: "from-[#0b1b2f] via-[#1b3a5d] to-[#8fb9e9]",
      href: "/downloads/original-plan-genie-business-trainer.pdf",
    },
    // {
    //   title: "Basic Business Plan Template (PDF)",
    //   meta: "Majority of peole will work in jobs that don’t exist today.",
    //   gradient: "from-[#0b1b2f] via-[#1c2c3c] to-[#c7cad6]",
    // },
    // {
    //   title: "Grant-Ready Nonprofit Planning Template",
    //   meta: "A constant ability to learn will be on the most crucial skills",
    //   gradient: "from-[#0b1b2f] via-[#2a4c74] to-[#b9d2f5]",
    // },
  ];
  return (
    <section className="max-w-[1400px] mx-auto px-5 sm:px-10 pt-20 md:px-20 md:py-20 font-manrope">
      <h2 className="text-2xl md:text-3xl mb-5 font-semibold text-[#12141D]">Top Downloadables</h2>
      <p className="text-sm md:text-base opacity-70 mt-1">Here&apos;s what we&apos;ve been up to recently.</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((card, i) => {
          const content = (
            <article
              key={i}
              className="relative rounded-xl overflow-hidden shadow-sm ring-1 ring-black/5 bg-white"
            >
              <div
                className={`w-full aspect-[4/4] md:aspect-[4/5] bg-gradient-to-br ${card.gradient} opacity-90`} />
              <div className="absolute inset-0 p-4 sm:p-6 md:p-8 pb-10 flex flex-col justify-end">
                <h3 className="text-white text-xl sm:text-2xl max-w-[90%] mb-2 sm:mb-4 font-semibold drop-shadow">{card.title}</h3>
                <p className="text-white/80 text-sm sm:text-base">{card.meta}</p>
              </div>
            </article>
          );

          return card.href ? (
            <a key={i} href={card.href} download className="block" target="_blank" rel="noopener noreferrer">
              {content}
            </a>
          ) : (
            content
          );
        })}
      </div>
    </section>
  );
}
