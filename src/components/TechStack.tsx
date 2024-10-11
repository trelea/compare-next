import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { TfiServer } from "react-icons/tfi";
import { PiLaptop } from "react-icons/pi";
import { VscTools } from "react-icons/vsc";
import { BackendStack, FrontendStack, UtilitiesStack } from "@/config/techs";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import BlurFade from "./magicui/blur-fade";
import PulsatingButton from "./magicui/pulsating-button";
import Link from "next/link";
// import { useTranslation } from 'react-i18next';

export const TeachStack: React.FC = () => {
  // const { t } = useTranslation();
  return (
    <div className="relative flex flex-col gap-40 px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-60 z-30">
      {/* Backend Stack */}
      <BlurFade
        inView
        delay={0.25}
        duration={0.75}
        className="min-h-screen flex justify-center items-center h-fit"
      >
        <NeonGradientCard
          className="flex justify-center items-center"
          neonColors={{ firstColor: "#106448", secondColor: "#e6e6e6" }}
          borderRadius={10}
          borderSize={2}
        >
          <div className="flex gap-6 items-center">
            <div className="bg-primary/75 rounded-full p-3 lg:p-4 shadow-xl shadow-primary/25">
              <TfiServer className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10" />
            </div>

            <h1 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block">
              {"services.back"}
            </h1>
          </div>

          <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 my-6">
            <AnimatedTooltip items={BackendStack} />
          </div>

          <div className="flex justify-end">
            <Link href={"/contacts"}>
              <PulsatingButton
                className="bg-gradient-to-r from-primary to-foreground text-sm md:text-base xl:text-lg font-bold px-6 md:px-8 xl:px-10"
                pulseColor="#106448"
              >
                {"home.start"}
              </PulsatingButton>
            </Link>
          </div>
        </NeonGradientCard>
      </BlurFade>

      {/* Frontend Stack */}
      <BlurFade
        inView
        delay={0.25}
        duration={0.75}
        className="min-h-screen flex justify-center items-center h-fit"
      >
        <NeonGradientCard
          className="flex justify-center items-center"
          neonColors={{ firstColor: "#106448", secondColor: "#e6e6e6" }}
          borderRadius={10}
          borderSize={2}
        >
          <div className="flex gap-6 items-center">
            <div className="bg-primary/75 rounded-full p-3 lg:p-4 shadow-xl shadow-primary/25">
              <PiLaptop className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10" />
            </div>
            <h1 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block">
              {"services.front"}
            </h1>
          </div>

          <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 my-6">
            <AnimatedTooltip items={FrontendStack} />
          </div>

          <div className="flex justify-end">
            <Link href={"/contacts"}>
              <PulsatingButton
                className="bg-gradient-to-r from-primary to-foreground text-sm md:text-base xl:text-lg font-bold px-6 md:px-8 xl:px-10"
                pulseColor="#106448"
              >
                {"home.start"}
              </PulsatingButton>
            </Link>
          </div>
        </NeonGradientCard>
      </BlurFade>

      {/* Tools */}
      <BlurFade
        inView
        delay={0.25}
        duration={0.75}
        className="min-h-screen flex justify-center items-center h-fit"
      >
        <NeonGradientCard
          className="flex justify-center items-center"
          neonColors={{ firstColor: "#106448", secondColor: "#e6e6e6" }}
          borderRadius={10}
          borderSize={2}
        >
          <div className="flex gap-6 items-center">
            <div className="bg-primary/75 rounded-full p-3 lg:p-4 shadow-xl shadow-primary/25">
              <VscTools className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10" />
            </div>
            <h1 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block">
              {"services.tools"}
            </h1>
          </div>

          <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 my-6">
            <AnimatedTooltip items={UtilitiesStack} />
          </div>

          <div className="flex justify-end">
            <Link href={"/contacts"}>
              <PulsatingButton
                className="bg-gradient-to-r from-primary to-foreground text-sm md:text-base xl:text-lg font-bold px-6 md:px-8 xl:px-10"
                pulseColor="#106448"
              >
                {"home.start"}
              </PulsatingButton>
            </Link>
          </div>
        </NeonGradientCard>
      </BlurFade>
    </div>
  );
};
