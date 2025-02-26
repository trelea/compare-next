import BlurFade from '@/components/magicui/blur-fade';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { WobbleCard } from '@/components/ui/wobble-card';
import Image from 'next/image';
import team from '@/assets/images/hero2.png';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
};

export default function Aboutus() {
  const t = useTranslations();
  return (
    <div className='relative px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-60 z-30 flex justify-center items-center min-h-screen py-32'>
      <div className='flex flex-col-reverse lg:flex-row gap-10 lg:items-center'>
        <HoverEffect
          className='lg:flex-1'
          items={[
            {
              title: t('aboutus.who'),
              description: t('aboutus.who_desc'),
              link: '#',
            },
            {
              title: t('aboutus.what'),
              description: t('aboutus.what_desc'),
              link: '#',
            },
            {
              title: t('aboutus.scope'),
              description: t('aboutus.scope_desc'),
              link: '#',
            },
          ]}
        />

        <BlurFade inView delay={0.1} duration={1} className='lg:flex-1'>
          <WobbleCard containerClassName='bg-primary shadow-2xl shadow-foreground/25'>
            <Image
              src={team}
              alt=''
              className='shadow-2xl rounded-2xl shadow-foreground'
            />
          </WobbleCard>
        </BlurFade>
      </div>
    </div>
  );
}
