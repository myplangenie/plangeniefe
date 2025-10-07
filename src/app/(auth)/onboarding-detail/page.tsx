"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

import SecNavigation from "@/components/layout/sec-nav";
import UserProfileForm from "@/components/onboarding/UserProfileForm";
import BusinessProfileForm from "@/components/onboarding/BusinessProfileForm";
import VisionPurpose from "@/components/onboarding/VisionPurpose";

import { useRouter } from "next/navigation";
// import { useOnboarding } from "@/hooks/useOnboarding";

const OnboardingPage = () => {
  const Router = useRouter();
  const { control } = useForm();
  const [step, setStep] = useState<"vision">("vision");
  // const { saveVision } = useOnboarding();
  return (
    <div>
      <main className="">
        <SecNavigation />
        <div className="w-full flex items-center justify-center onboarding py-20">
          {step === "vision" ? (
            <VisionPurpose
              onBack={() => Router.back()}
              onNext={async (text) => {
                // Disabled backend integration:
                // await saveVision({ ubp: text });
                // No-op; proceed in UI as needed
              }}
            />
          ) : (
            <></>
          )}
        </div>
      </main>
    </div>
  );
};

export default OnboardingPage;
