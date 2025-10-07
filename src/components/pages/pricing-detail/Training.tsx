import { Button } from "@/components/ui/button";

export default function PricingTraining() {
  return (
    <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-12 md:mt-20">
      <div className="text-center">
        <h2 className="text-xl sm:text-4xl font-bold text-gray-900">
          Live Training & Facilitation Services
        </h2>
        <p className="mt-5 text-base leading-loose text-gray-600 max-w-2xl mx-auto">
          We provide a flexible suite of live training and facilitation options
          to help organizations and individuals bring their plans to life.
        </p>
      </div>

      <div className="mt-6 grid md:grid-cols-2 text-center gap-4 sm:gap-6">
        <div className="rounded-lg bg-[#FAFAFA] px-5 py-12">
          <h3 className="font-semibold text-3xl mb-3 text-gray-900 font-manrope">
            Strategy Sprints
          </h3>
          <p className="mt-1 text-base leading-relaxed w-[65%] mx-auto text-gray-600">
            Focused 90-minute or half-day workshops to quickly refine or reset
            your plan.
          </p>
          <div className="mt-20">
            <Button
              variant="outline"
              className="bg-white border border-[#E1E1E1] px-14 text-[#1a1a1a] hover:bg-accent/90"
            >
              Book A Consultation
            </Button>
          </div>
        </div>
        <div className="rounded-lg bg-[#FAFAFA] px-5 py-12">
          <h3 className="font-semibold text-3xl mb-3 text-gray-900 font-manrope">
            Ongoing Coaching Packages
          </h3>
          <p className="mt-1 text-base leading-relaxed w-[65%] mx-auto text-gray-600">
            Regular sessions to ensure accountability and help navigate
            challenges.
          </p>
          <div className="mt-20">
            <Button
              variant="outline"
              className="bg-white border border-[#E1E1E1] px-14 text-[#1a1a1a] hover:bg-accent/90"
            >
              Book A Consultation
            </Button>
          </div>
        </div>
        <div className="rounded-lg bg-[#FAFAFA] px-5 py-12">
          <h3 className="font-semibold text-3xl mb-3 text-gray-900 font-manrope">
            Workshop Facilitation
          </h3>
          <p className="mt-1 text-base leading-relaxed w-[65%] mx-auto text-gray-600">
            Interactive planning experiences for leadership teams, boards, or
            full organizations.
          </p>
          <div className="mt-20">
            <Button
              variant="outline"
              className="bg-white border border-[#E1E1E1] px-14 text-[#1a1a1a] hover:bg-accent/90"
            >
              Book A Consultation
            </Button>
          </div>
        </div>
        <div className="rounded-lg bg-[#FAFAFA] px-5 py-12">
          <h3 className="font-semibold text-3xl mb-3 text-gray-900 font-manrope">
            Train-the-Trainer Programs
          </h3>
          <p className="mt-1 text-base leading-relaxed w-[65%] mx-auto text-gray-600">
            Empower internal staff or consultants to deliver Plan Genie-powered
            sessions.
          </p>
          <div className="mt-20">
            <Button
              variant="outline"
              className="bg-white border border-[#E1E1E1] px-14 text-[#1a1a1a] hover:bg-accent/90"
            >
              Book A Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
