import React from "react";
import { cn } from "@/lib/utils";

export const MobileBackground = React.memo(({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
      
      {/* Static beams */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent" />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-36 h-36 rounded-full bg-pink-500/10 blur-3xl" />
    </div>
  );
});

MobileBackground.displayName = "MobileBackground"; 