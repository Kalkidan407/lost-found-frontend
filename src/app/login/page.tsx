"use client";

import { X } from "lucide-react";
import Image from "next/image";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AuthModal({ open, onClose }: AuthModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Card */}
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        <div className="flex justify-center mb-4">
          <div className="h-12 w-12 rounded-full bg-transparent border-3 border-emerald-700 flex items-center justify-center">
            <span className="text-emerald-400 font-bold text-xl">LF</span>
          </div>
        </div>

    
        <h2 className="text-center text-2xl font-semibold mb-2">
          Welcome to Lost & Found
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Sign in or create an account to continue
        </p>

        
        <button className="w-full flex items-center justify-between gap-3 rounded-full border px-4 py-3 mb-4 hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
              K
            </div>
            <div className="text-left text-sm">
              <p className="font-medium">Continue as Cale</p>
              <p className="text-gray-500 text-xs">
                kalkidan@gmail.com
              </p>
            </div>
          </div>

          <Image className="c"
                  src="/images/google.logo.png" 
                 alt="Google" 
                 height={20} 
                 width={20}
                 />
        </button>
      

     
        <div className="flex items-center gap-2 my-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-sm text-gray-400">or</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>


        <input
          type="email"
          placeholder="Enter email address"
          className="w-full rounded-lg border px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-black"
        />

     
        <button className="w-full rounded-full bg-emerald-700 py-3 text-white font-bold hover:bg-emerald-600 transition">
          Continue
        </button>

      
        <p className="mt-6 text-center text-xs text-gray-400">
          By continuing, you agree to our{" "}
          <span className="underline cursor-pointer">Terms</span> and{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>
        </p>

        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span className="underline cursor-pointer text-emerald-800 font-bold hover:text-emerald-600">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
