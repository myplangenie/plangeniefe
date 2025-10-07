"use client";

import { useCallback, useState } from "react";
import * as Auth from "@/services/authService";

export function useAuth() {
  const [user, setUser] = useState<Auth.AuthUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signup = useCallback(async (input: Auth.SignupInput) => {
    setLoading(true);
    setError(null);
    try {
      const u = await Auth.signup(input);
      setUser(u);
      return u;
    } catch (e: any) {
      setError(e?.message || "Signup failed");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback(async (input: Auth.LoginInput) => {
    setLoading(true);
    setError(null);
    try {
      const u = await Auth.login(input);
      setUser(u);
      return u;
    } catch (e: any) {
      setError(e?.message || "Login failed");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchMe = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const u = await Auth.me();
      setUser(u);
      return u;
    } catch (e: any) {
      setError(e?.message || "Failed to load user");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    Auth.clearToken();
    setUser(null);
  }, []);

  return { user, loading, error, signup, login, fetchMe, logout };
}

