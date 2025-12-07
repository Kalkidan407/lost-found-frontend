"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/Components/ui/button"

export default function OnboardingPage() {
  return (
    <>
    
     <div className=" flex  w-auto">

        <div className=" flex gap-3"> 
   <div className="w-25px h-25px bg-[#fffff] border-2 border-amber-600 items-center">
     👁️‍🗨️
   </div>

               <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="text-xl font-bold text-blue"
      >
        Lost&Found
      </motion.div>

        </div>

        <div className=" flex gap-2.5 items-end justify-end">
            <Button className="bg-transparent text-black font-bold text-xl">Login</Button>
            <Button size={"lg"} className="bg-pink-800 h-10 p-3.5 font-semibold text-white">Started</Button> 
        </div>
      

     </div>
    
    <div className="min-h-screen flex flex-col items-center justify-between bg-white px-6 py-10">
  
    
     

      {/* MAIN CONTENT */}
      <div className="flex flex-col items-center text-center max-w-md">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          src="/onboarding-illustration.svg"
          alt="illustration"
          className="w-60 mb-8"
        />

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-gray-800"
        >
          Find Lost Items Easily
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 mt-3 text-sm"
        >
          Join our community to report found items or search for something you lost.
        </motion.p>
      </div>

      {/* BUTTONS */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-md flex flex-col gap-4"
      >
        <Link
          href="/signup"
          className="w-full py-3 bg-blue-600 text-white rounded-xl text-center font-semibold active:scale-95 transition"
        >
          Get Started
        </Link>

        <Link
          href="/login"
          className="w-full py-3 border border-gray-300 rounded-xl text-center font-semibold active:scale-95 transition"
        >
          Already have an account?
        </Link>
      </motion.div>
    </div>
    </>
  );
}
