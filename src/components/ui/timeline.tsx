"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import WordFadeIn from "@/components/magicui/word-fade-in";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 75%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-transparent font-sans" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="min-h-screen flex lex-col lg:flex-row justify-center items-center pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col lg:flex-row z-30 items-center top-40 self-start lg:w-full">
              <div className="h-6 w-6 md:h-8 md:w-8 xl:w-10 xl:h-10 absolute left-3 md:left-3  rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-primary p-2 md:p-3" />
              </div>
              <WordFadeIn
                words={item.title}
                className="hidden pl-20 lg:inline-block lg:text-5xl bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text text-left font-bold"
              />
            </div>

            <div className="relative pl-14 w-full">
              <WordFadeIn
                words={item.title}
                className="lg:hidden mb-6 sm:mb-8 md:mb-10 text-left font-bold text-3xl bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block md:text-4xl"
              />
              {item.content}{" "}
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-6 top-0 overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] w-1"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-1 bg-gradient-to-t from-primary to-foreground from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
