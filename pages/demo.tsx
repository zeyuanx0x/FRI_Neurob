"use client";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { motion, useScroll, useTransform } from "motion/react";
import React from "react";

export default function DemoPage() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="h-[400vh] bg-black w-full rounded-md relative pt-[40vh]"
      ref={ref}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-black flex items-center justify-center">
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          title="FRI Neurob"
          description="Scroll to see the magic happen!"
        />
      </div>
    </div>
  );
} 