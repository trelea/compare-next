import React from "react";
import BoxReveal from "./magicui/box-reveal";
import ShimmerButton from "./magicui/shimmer-button";
import BlurFade from "@/components/magicui/blur-fade";
import i1 from "@/assets/images/hero1.png";
import { WobbleCard } from "./ui/wobble-card";
// import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

export const Hero: React.FC = () => {
  // const { t } = useTranslation();
  return (
    <div className="min-h-screen w-full flex relative items-center justify-center mt-28 md:mt-32 lg:mt-0 px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-60 z-30">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex flex-col gap-10">
          <BoxReveal boxColor="#106448" duration={0.25}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block">
              Com Pare
            </h1>
          </BoxReveal>
          <BoxReveal boxColor="#106448" duration={0.5}>
            <p className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-foreground font-medium">
              {"home.intro"}
            </p>
          </BoxReveal>
          <BoxReveal boxColor="#106448" duration={0.75}>
            <Link href={"/contacts"}>
              <ShimmerButton
                background="#106448"
                shimmerSize="1px"
                className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-medium px-10 shadow-2xl text-foreground"
              >
                {"home.start"}
              </ShimmerButton>
            </Link>
          </BoxReveal>
        </div>

        <BlurFade inView delay={0.1} duration={1}>
          <WobbleCard containerClassName="bg-primary shadow-2xl shadow-foreground/25">
            <Image
              src={i1}
              alt=""
              className="shadow-2xl rounded-2xl lg:max-w-sm xl:max-w-md 2xl:max-w-2xl shadow-foreground w-fit"
            />
          </WobbleCard>
        </BlurFade>
      </div>
    </div>
  );
};
