"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { LocateFixed, LockKeyholeIcon } from "lucide-react";

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

      <div className="relative h-48 w-full overflow-hidden rounded-t-xl p-5 ">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={cn(
            "object-cover transition",
            !isVerified && "blur-md scale-110"
          )}
        />

        {!isVerified && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <p className="text-white text-sm font-bold ">
              Verify ownership to view image
            </p>
          </div>
        )}
      </div>

  
      <div className="p-4 space-y-2">

        <div className="flex justify-between items-center">
           <h3 className="font-semibold text-lg ">{title}</h3>
            <div className="text-[16px] text-gray-600">
          Reported by <span className="font-bold text-emerald-600">{reportedBy}</span> 
        </div>

        </div>

       

        <div className="text-sm text-gray-500 flex items-center gap-2">

             <div className="flex items-center gap-1">
                <LocateFixed size={17} className="text-red-700"/> {location} 
             </div>

             <div className="flex items-center gap-1">
               <LockKeyholeIcon size={17} className="text-orange-900"/> {category}
             </div>
         
        </div>

       

        <button className="mt-3 
                w-full border-emerald-600  
                text-emerald-600 
                font-bold py-2 rounded-lg
                text-sm hover:bg-emerald-500
                bg-emerald-700 text-white 
                hover:text-white transition"
           
                >
          Take Ownership Quiz
        </button>
        <div className="text-sm text-gray-400 text-right">
          {timeAgo}
        </div>

      </div>

    </div>
  );
}
