"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import AuthModal from "./login/page";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   const [open, setOpen] = useState(false);
 
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <nav className="w-full border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
     
        <Link href="/" className="text-xl font-bold text-emerald-600">
          Lost&Found
        </Link>

       
        <div className="hidden md:flex items-center gap-6 text-[16px] text-gray-500 font-semibold">
          <Link href="/" className="hover:text-emerald-600">
            Home
          </Link>
          <Link href="/report" className="hover:text-emerald-600">
            Report Item
          </Link>
          <Link href="/about" className="hover:text-emerald-600">
            About
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            onClick={() => setOpen(true)}
            className="text-sm font-medium hover:text-emerald-600"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Sign up
          </Link>


        </div>
      </div>
        </nav>
   
       
        <main>
            {children}
            <AuthModal open={open} onClose={() => setOpen(false)} />
        </main>
      
      </body>
    </html>
  );
}
