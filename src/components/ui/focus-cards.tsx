"use client";
// import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import BlurFade from "../magicui/blur-fade";
import Image, { StaticImageData } from "next/image";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-2xl relative bg-card overflow-hidden h-full w-full transition-all duration-100 ease-out shadow-2xl shadow-primary/25 border-2 border-foreground/50",
        hovered !== null && hovered !== index && "blur-sm scale-[0.95]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        // fill
        className="object-cover object-fit"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/75 flex items-end p-10 transition-opacity duration-100",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: StaticImageData;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-2 w-full">
      {cards.map((card, index) => (
        <BlurFade inView duration={1} delay={0.5} key={index}>
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        </BlurFade>
      ))}
    </div>
  );
}
