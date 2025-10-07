"use client";

import { apiFetch } from "@/utils/api";

export type UserProfilePayload = {
  fullName?: string;
  role?: "owner" | "founder" | "manager" | "other";
  builtPlanBefore?: boolean | "yes" | "no";
  planningGoal?: "start" | "improve" | "invest" | "learn";
  includePersonalPlanning?: boolean | "yes" | "no";
};

export type BusinessProfilePayload = {
  businessName?: string;
  businessStage?: "pre-launch" | "startup" | "growth" | "established" | "other";
  industry?: string;
  country?: string;
  city?: string;
  ventureType?: "for-profit" | "nonprofit" | "hybrid";
  teamSize?: string;
  funding?: boolean | "yes" | "no";
  tools?: string[];
  connectTools?: boolean | "yes" | "no";
};

export type VisionPayload = { ubp?: string };

export async function getOnboarding() {
  return apiFetch("/api/onboarding", { method: "GET" });
}

export async function saveUserProfile(payload: UserProfilePayload) {
  return apiFetch("/api/onboarding/user-profile", { method: "POST", body: payload });
}

export async function saveBusinessProfile(payload: BusinessProfilePayload) {
  return apiFetch("/api/onboarding/business-profile", { method: "POST", body: payload });
}

export async function saveVision(payload: VisionPayload) {
  return apiFetch("/api/onboarding/vision", { method: "POST", body: payload });
}

