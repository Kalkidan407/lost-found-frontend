"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-emerald-600">
          Lost&Found
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
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

        {/* Auth buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
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
  );
}
