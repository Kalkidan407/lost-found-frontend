"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type ItemCardProps = {
  title: string;
  category: string;
  location: string;
  reportedBy: string;
  timeAgo: string;
  imageUrl: string;
  isVerified: boolean;
};

export default function ItemCard({
  title,
  category,
  location,
  reportedBy,
  timeAgo,
  imageUrl,
  isVerified,
}: ItemCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={cn(
            "object-cover transition",
            !isVerified && "blur-lg scale-110"
          )}
        />

        {!isVerified && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <p className="text-white text-sm font-medium">
              Verify ownership to view image
            </p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg">{title}</h3>

        <div className="text-sm text-gray-500">
          📍 {location} · 🏷 {category}
        </div>

        <div className="text-xs text-gray-400">
          Reported by {reportedBy} · {timeAgo}
        </div>

        <button className="mt-3 w-full bg-emerald-600 text-white py-2 rounded-lg text-sm hover:bg-emerald-700">
          Take Ownership Quiz
        </button>
      </div>
    </div>
  );
}
