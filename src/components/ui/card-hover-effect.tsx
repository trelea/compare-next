"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import BlurFade from "../magicui/blur-fade";
import Link from "next/link";

export const HoverEffect = ({
  items,
  forContacts,
  className,
}: {
  items: {
    title: string;
    description?: string;
    link: string;
    element?: React.ReactNode;
  }[];
  forContacts?: boolean;
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        `${forContacts ? "grid grid-cols-1 gap-2" : ""} h-fit w-full`,
        className
      )}
    >
      {items.map((item, idx) => (
        <BlurFade
          inView
          duration={0.5}
          delay={0.25 * (idx + 1)}
          key={idx}
          className={`${
            idx === 2 ? "col-span-1 xl:col-span-2" : ""
          } w-full h-full`}
        >
          <Link
            href={item?.link}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-primary block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              {forContacts ? (
                <div className="flex flex-col">
                  <CardTitle>{item.title}</CardTitle>
                  {item.element}
                </div>
              ) : (
                <>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </>
              )}
            </Card>
          </Link>
        </BlurFade>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-card border border-foreground/25 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "font-bold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block tracking-wide text-2xl",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-foreground tracking-wide leading-relaxed text-base",
        className
      )}
    >
      {children}
    </p>
  );
};
