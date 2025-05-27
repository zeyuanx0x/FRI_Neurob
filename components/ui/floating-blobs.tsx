"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingBlobProps {
  className?: string;
}

export const FloatingBlobs = React.memo(({ className }: FloatingBlobProps) => {
  // 使用与 BackgroundBeams 相同的路径
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
  ];

  const blobs = [
    {
      size: 80,
      gradient: "from-blue-300/30 to-purple-200/10",
      duration: 20,
      path: paths[0],
    },
    {
      size: 60,
      gradient: "from-purple-300/30 to-pink-200/10",
      duration: 25,
      path: paths[1],
    },
    {
      size: 100,
      gradient: "from-indigo-300/30 to-blue-200/10",
      duration: 30,
      path: paths[2],
    },
    {
      size: 40,
      gradient: "from-cyan-300/30 to-blue-200/10",
      duration: 15,
      path: paths[3],
    },
  ];

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {blobs.map((blob, index) => (
        <motion.div
          key={`blob-${index}`}
          className={cn(
            "absolute rounded-[50%_40%_60%_30%_/_60%_30%_70%_40%] blur-xl",
            `bg-gradient-to-br ${blob.gradient}`
          )}
          style={{
            width: blob.size,
            height: blob.size,
            offsetPath: `path("${blob.path}")`,
            offsetDistance: "0%",
          }}
          animate={{
            offsetDistance: ["0%", "100%"],
            rotate: [0, 360],
          }}
          transition={{
            duration: blob.duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  );
});

FloatingBlobs.displayName = "FloatingBlobs"; 