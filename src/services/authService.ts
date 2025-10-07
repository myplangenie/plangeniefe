"use client";

import { apiFetch } from "@/utils/api";

export type SignupInput = {
  fullName?: string;
  email: string;
  password: string;
};

export type LoginInput = {
  email: string;
  password: string;
};

export type AuthUser = {
  _id: string;
  fullName?: string;
  email: string;
};

const TOKEN_KEY = "pg_token";

export function setToken(token: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function clearToken() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TOKEN_KEY);
}

export async function signup(input: SignupInput) {
  const res = await apiFetch<{ token: string; user: AuthUser }>(
    "/api/auth/signup",
    {
      method: "POST",
      body: input,
    }
  );
  setToken(res.token);
  return res.user;
}

export async function login(input: LoginInput) {
  const res = await apiFetch<{ token: string; user: AuthUser }>(
    "/api/auth/login",
    {
      method: "POST",
      body: input,
    }
  );
  setToken(res.token);
  return res.user;
}

export async function me() {
  const res = await apiFetch<{ user: AuthUser }>("/api/auth/me", { method: "GET" });
  return res.user;
}

