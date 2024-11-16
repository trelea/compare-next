import { Services as Cards } from '@/components/Services';
import { _Globe } from '@/components/Globe';
import { TeachStack } from '@/components/TechStack';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
};

export default function Services() {
  return (
    <>
      <Cards onlyCards />
      <_Globe />
      <TeachStack />
    </>
  );
}
