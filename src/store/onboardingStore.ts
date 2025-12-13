"use client";

import { create } from "zustand";

type OnboardingState = {
  step: number;
  userRole: string | null; // "finder", "owner"
  setStep: (step: number) => void;
  setUserRole: (role: string) => void;
  resetOnboarding: () => void;
};

export const useOnboardingStore = create<OnboardingState>((set) => ({
  step: 1,
  userRole: null,

  setStep: (step) => set({ step }),
  setUserRole: (userRole) => set({ userRole }),

  resetOnboarding: () =>
    set({
      step: 1,
      userRole: null,
    }),
}));
