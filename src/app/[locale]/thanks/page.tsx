'use client';
import BlurFade from '@/components/magicui/blur-fade';
import { CircleCheckBig } from 'lucide-react';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import React from 'react';

const metadata: Metadata = {
  title: 'Thanks',
};

export default function Thanks() {
  const t = useTranslations();
  React.useEffect(() => {
    setTimeout(() => (window.location.pathname = '/'), 2000);
  }, []);

  return (
    <div className='h-screen w-full relative z-30 flex justify-center items-center'>
      <BlurFade inView delay={0.1} duration={0.25}>
        <div className='bg-card rounded-3xl p-10 md:p-12 lg:p-16 flex flex-col items-center gap-10 lg:gap-14 shadow-2xl shadow-primary/10 border border-primary/25'>
          <BlurFade inView delay={0.1} duration={0.5}>
            <CircleCheckBig className='stroke-primary size-20 md:size-24 lg:size-28 xl:size-32' />
          </BlurFade>

          <BlurFade inView delay={0.1} duration={0.75}>
            <div className='font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block'>
              <p className='text-center'>{t('thanks.p1')}</p>
              <p className='text-center'>{t('thanks.p2')}</p>
            </div>
          </BlurFade>
        </div>
      </BlurFade>
    </div>
  );
}
