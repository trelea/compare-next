"use client";

import { motion, type AnimationProps } from "framer-motion";
import { cn } from "@/lib/utils";
// import { LuCode2 } from "react-icons/lu";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;
interface ShinyButtonProps {
  text: string;
  className?: string;
}
const ShinyButton = ({
  text = "shiny-button",
  className,
}: ShinyButtonProps) => {
  return (
    <motion.button
      {...animationProps}
      className={cn(
        "relative rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_75%_0%,hsl(var(--primary)/10%)_0%,transparent_100%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)] bg-primary/75",
        className
      )}
    >
      <span
        className="relative block h-full w-full text-sm uppercase tracking-wide text-foreground"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 40%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
        }}
      >
        {text}
      </span>

      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/20%)_calc(var(--x)+40%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-1"
      ></span>
      {/* <LuCode2 className="size-8 bg-black p-2 rounded-full text-white" /> */}
    </motion.button>
  );
};

export default ShinyButton;
