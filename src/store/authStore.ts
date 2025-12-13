"use client";


import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type User = {
  id: number;
  username: string;
  email?: string;
  fullName?: string;
};

type AuthState = {
  user: User | null;
  token: string | null;            // caution: storing tokens in localStorage has security implications (see notes)
  isAuthenticated: boolean;
  // actions
  setUser: (user: User | null, token?: string | null) => void;
  login: (user: User, token: string) => void;
  logout: () => void;
};

/**
 * create(...) builds the store.
 * We wrap with persist(...) to keep state in localStorage,
 * and devtools(...) so Redux DevTools (optional) can inspect (works in dev).
 *
 * Key explanations:
 * - name: the key used in localStorage
 * - getStorage: optional, by default uses localStorage in browser
 */
export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        token: null,
        isAuthenticated: false,

        setUser: (user, token = null) =>
          set(() => ({
            user,
            token,
            isAuthenticated: !!user,
          })),

        login: (user, token) =>
          set(() => ({
            user,
            token,
            isAuthenticated: true,
          })),

        logout: () =>
          set(() => ({
            user: null,
            token: null,
            isAuthenticated: false,
          })),
      }),
      {
        name: "lostfound-auth", // key in localStorage
        // whitelist (optional): which parts of the state to persist
        // partialize: (state) => ({ user: state.user }) // example to persist only user
      }
    ),
    { name: "authStore" }
  )
);
