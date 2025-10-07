"use client";

import { useCallback, useState } from "react";
import * as Onboarding from "@/services/onboardingService";

export function useOnboarding() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await Onboarding.getOnboarding();
      setData(res?.onboarding || null);
      return res;
    } catch (e: any) {
      setError(e?.message || "Failed to load onboarding");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const saveUserProfile = useCallback(async (payload: Onboarding.UserProfilePayload) => {
    setLoading(true);
    setError(null);
    try {
      const res = await Onboarding.saveUserProfile(payload);
      setData(res?.onboarding || null);
      return res;
    } catch (e: any) {
      setError(e?.message || "Failed to save user profile");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const saveBusinessProfile = useCallback(async (payload: Onboarding.BusinessProfilePayload) => {
    setLoading(true);
    setError(null);
    try {
      const res = await Onboarding.saveBusinessProfile(payload);
      setData(res?.onboarding || null);
      return res;
    } catch (e: any) {
      setError(e?.message || "Failed to save business profile");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const saveVision = useCallback(async (payload: Onboarding.VisionPayload) => {
    setLoading(true);
    setError(null);
    try {
      const res = await Onboarding.saveVision(payload);
      setData(res?.onboarding || null);
      return res;
    } catch (e: any) {
      setError(e?.message || "Failed to save vision");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, load, saveUserProfile, saveBusinessProfile, saveVision };
}

