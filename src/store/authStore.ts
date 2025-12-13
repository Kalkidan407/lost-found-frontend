import { create } from "zustand";

type AuthState = {
  isAuthenticated: boolean;
  user: { name: string } | null;
  login: (name: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,

  login: (name) =>
    set({
      isAuthenticated: true,
      user: { name },
    }),

  logout: () =>
    set({
      isAuthenticated: false,
      user: null,
    }),
}));
