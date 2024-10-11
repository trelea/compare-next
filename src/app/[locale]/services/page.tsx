import { Services as Cards } from "@/components/Services";
import { _Globe } from "@/components/Globe";
import { TeachStack } from "@/components/TechStack";

export default function Services() {
  return (
    <>
      <Cards onlyCards />
      <_Globe />
      <TeachStack />
    </>
  );
}
