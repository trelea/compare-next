import React from 'react';
import Globe from '@/components/magicui/globe';
import BoxReveal from './magicui/box-reveal';
import BlurFade from './magicui/blur-fade';
import { useTranslations } from 'next-intl';

export const _Globe: React.FC = () => {
  const t = useTranslations();
  return (
    <div className='relative top-0 mt-40 px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-60 z-30'>
      <div className='flex flex-col gap-10 w-full justify-center items-center'>
        <BoxReveal boxColor='#106448' duration={0.25}>
          <h1 className='text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block'>
            {t('services.stack')}
          </h1>
        </BoxReveal>
        <BoxReveal boxColor='#106448' duration={0.5}>
          <p className='text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-foreground font-medium text-center sm:px-20 md:px-28 lg:px-40 xl:px-60'>
            {t('services.stack_desc')}
          </p>
        </BoxReveal>
      </div>

      <BlurFade inView delay={0.1} duration={0.75}>
        <Globe className='relative ' />
      </BlurFade>
    </div>
  );
};
