"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

import SecNavigation from "@/components/layout/sec-nav";
import UserProfileForm from "@/components/onboarding/UserProfileForm";
import BusinessProfileForm from "@/components/onboarding/BusinessProfileForm";
import VisionPurpose from "@/components/onboarding/VisionPurpose";
// import { useOnboarding } from "@/hooks/useOnboarding";
import { useRouter } from "next/navigation";

const OnboardingPage = () => {
  const { control, getValues } = useForm();
  const [step, setStep] = useState<"user" | "business" | "vision">("user");
  // const { saveUserProfile, saveBusinessProfile } = useOnboarding();
  const router = useRouter();

  const handleUserContinue = async () => {
    const v: any = getValues();
    // Disabled backend integration:
    // await saveUserProfile({
    //   fullName: v.fullName,
    //   role: v.role,
    //   builtPlanBefore: v.builtPlanBefore,
    //   planningGoal: v.planningGoal,
    //   includePersonalPlanning: v.includePersonalPlanning,
    // });
    setStep("business");
  };

  const handleBusinessContinue = async (tools: string[]) => {
    const v: any = getValues();
    // Disabled backend integration:
    // await saveBusinessProfile({
    //   businessName: v.businessName,
    //   businessStage: v.businessStage,
    //   industry: v.industry,
    //   country: v.country,
    //   city: v.city,
    //   ventureType: v.ventureType,
    //   teamSize: v.teamSize,
    //   funding: v.funding,
    //   tools,
    //   connectTools: v.connectTools,
    // });
    router.push("/welcome-screen");
  };
  return (
    <div>
      <main className="">
        <SecNavigation />
        <div className="w-full flex items-center justify-center onboarding py-12 sm:py-20 px-5">
          {step === "vision" ? (
            <VisionPurpose onBack={() => setStep("business")} onNext={(text: string) => {}} />
          ) : (
            <div className="w-full max-w-[940px]">
              <div className="bg-white max-w-[940px] px-5 sm:px-[60px] md:px-[90px] pt-[40px] md:pt-[70px] pb-[40px] rounded-[10px]">
                <div className="flex items-center justify-between mb-14">
                  <div className="">
                    <h3 className="text-3xl capitalize mb-3 font-black text-[#050506]">
                      let&apos;s get to know you
                    </h3>
                    <p className="text-base leading-loose">
                      Personalize your planning journey
                    </p>
                  </div>
                  <div>
                    <div className="w-[160px] flex ">
                      <div className={`w-full h-[2px] ${step === "user" ? "bg-accent" : "bg-black opacity-5"}`}></div>
                      <div className={`w-full h-[2px] ${step === "business" ? "bg-accent" : "bg-black opacity-5"}`}></div>
                    </div>
                  </div>
                </div>
                {step === "user" ? (
                  <UserProfileForm control={control} onContinue={handleUserContinue} />
                ) : (
                  <BusinessProfileForm
                    control={control}
                    onContinue={handleBusinessContinue}
                    onBack={() => setStep("user")}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default OnboardingPage;
