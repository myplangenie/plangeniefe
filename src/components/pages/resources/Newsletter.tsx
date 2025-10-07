export default function ResourcesNewsletter() {
  return (
    <section className="bg-[#0E2747] text-white">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-10 md:px-20 py-12 sm:py-16">
        <div className="rounded-xl border border-white/10 bg-[#102C54] p-6 sm:p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold">Weekly planning wisdom. No fluff. No spam.</h3>
          <p className="mt-2 text-sm opacity-85">Build your strategy muscle one tip a week</p>
          <form className="mt-6 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md bg-white/95 text-[#12141D] px-4 py-3 outline-none ring-1 ring-black/10"
            />
            <button type="button" className="shrink-0 rounded-md bg-accent px-6 py-3 font-semibold text-white">Subscribe</button>
          </form>
        </div>
        <div className="mt-6 text-[10px] opacity-70 text-center">
          © {new Date().getFullYear()} PlanGenie. All rights reserved.
        </div>
      </div>
    </section>
  );
}

