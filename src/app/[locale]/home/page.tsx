import { Hero } from "@/components/Hero";
import { OurPlan } from "@/components/OurPlan";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <OurPlan />
      <Projects />
    </>
  );
}
