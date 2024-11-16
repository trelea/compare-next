import React from 'react';
import { WobbleCard } from '@/components/ui/wobble-card';
import BoxReveal from './magicui/box-reveal';
import BlurFade from './magicui/blur-fade';
import ShimmerButton from './magicui/shimmer-button';
import imperiallux from '@/assets/projects/imperiallux.png';
import bsv from '@/assets/projects/bsv.png';
import genasig from '@/assets/projects/genasig.png';
import beauty from '@/assets/projects/beauty.png';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const Projects: React.FC = () => {
  const t = useTranslations();
  return (
    <div className='w-full flex flex-col relative justify-center items-center px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-60 z-30'>
      <div className='flex flex-col gap-10'>
        <BoxReveal boxColor='#106448' duration={0.25}>
          <h1 className='text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block'>
            {t('projects.projects')}
          </h1>
        </BoxReveal>
        <BoxReveal boxColor='#106448' duration={0.5}>
          <p className='text-base md:text-lg lg:text-xl 2xl:text-2xl text-foreground font-medium lg:w-1/2'>
            {t('projects.desc')}
          </p>
        </BoxReveal>
      </div>

      <div className='w-full flex flex-col-reverse gap-10 h-screen justify-center items-center lg:flex-row md:gap-12 lg:gap-16 xl:gap-20'>
        <BlurFade inView delay={0.5} className='lg:flex-1 xl:flex-auto'>
          <WobbleCard containerClassName='bg-primary h-fit shadow-2xl shadow-foreground/50'>
            <Image src={imperiallux} alt='' />
            <ShimmerButton
              background='#106448'
              shimmerSize='1px'
              className='text-sm md:text-base lg:text-lg xl:text-xl font-medium px-10 shadow-2xl text-foreground absolute bottom-12 left-8 sm:left-12 md:left-14 lg:left-16 xl:left-20'
            >
              {t('projects.details')}
            </ShimmerButton>
          </WobbleCard>
        </BlurFade>

        <div className='w-full space-y-4 lg:flex-1 xl:flex-auto'>
          <BoxReveal boxColor='#106448' duration={0.25}>
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block'>
              The Imperial Lux
            </h1>
          </BoxReveal>
          <BoxReveal boxColor='#106448' duration={0.5}>
            <p className='text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-foreground font-medium w-full'>
              {t('projects.p1')}
            </p>
          </BoxReveal>
        </div>
      </div>

      <div className='w-full flex flex-col gap-10 h-screen justify-center items-center lg:flex-row md:gap-12 lg:gap-16 xl:gap-20'>
        <div className='w-full space-y-4 lg:flex-1 xl:flex-auto'>
          <BoxReveal boxColor='#106448' duration={0.25}>
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block'>
              Bsv Distribution
            </h1>
          </BoxReveal>
          <BoxReveal boxColor='#106448' duration={0.5}>
            <p className='text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-foreground font-medium w-full'>
              {t('projects.p2')}
            </p>
          </BoxReveal>
        </div>

        <BlurFade inView delay={0.5} className='lg:flex-1 xl:flex-auto'>
          <WobbleCard containerClassName='bg-secondary h-fit shadow-2xl shadow-primary/50'>
            <Image src={bsv} alt='' />
            <ShimmerButton
              background='#106448'
              shimmerSize='1px'
              className='text-xl font-medium px-10 shadow-2xl text-foreground absolute bottom-12 right-8 sm:right-12 md:right-14 lg:right-16 xl:right-20'
            >
              {t('projects.details')}
            </ShimmerButton>
          </WobbleCard>
        </BlurFade>
      </div>

      <div className='w-full flex flex-col-reverse gap-10 h-screen justify-center items-center lg:flex-row md:gap-12 lg:gap-16 xl:gap-20'>
        <BlurFade inView delay={0.5} className='lg:flex-1 xl:flex-auto'>
          <WobbleCard containerClassName='bg-foreground h-fit shadow-2xl shadow-primary/50 relative'>
            <Image src={genasig} alt='' />
            <ShimmerButton
              background='#106448'
              shimmerSize='1px'
              className='text-sm md:text-base lg:text-lg xl:text-xl font-medium px-10 shadow-2xl text-foreground absolute bottom-12 left-8 sm:left-12 md:left-14 lg:left-16 xl:left-20'
            >
              {t('projects.details')}
            </ShimmerButton>
          </WobbleCard>
        </BlurFade>

        <div className='w-full space-y-4 lg:flex-1 xl:flex-auto'>
          <BoxReveal boxColor='#106448' duration={0.25}>
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block'>
              Gen Asig
            </h1>
          </BoxReveal>
          <BoxReveal boxColor='#106448' duration={0.5}>
            <p className='text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-foreground font-medium w-full'>
              {t('projects.p3')}
            </p>
          </BoxReveal>
        </div>
      </div>

      <div className='w-full flex flex-col gap-10 h-screen justify-center items-center lg:flex-row md:gap-12 lg:gap-16 xl:gap-20'>
        <div className='w-full space-y-4 lg:flex-1 xl:flex-auto'>
          <BoxReveal boxColor='#106448' duration={0.25}>
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block'>
              Beauty
            </h1>
          </BoxReveal>
          <BoxReveal boxColor='#106448' duration={0.5}>
            <p className='text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-foreground font-medium w-full'>
              {t('projects.p4')}
            </p>
          </BoxReveal>
          <BoxReveal boxColor='#106448' duration={0.5}>
            <Link href={'/projects'}>
              <ShimmerButton
                background='#106448'
                shimmerSize='1px'
                className='hidden lg:block text-xl font-medium px-10 shadow-2xl text-foreground w-full mt-10'
              >
                {t('projects.more')}
              </ShimmerButton>
            </Link>
          </BoxReveal>
        </div>

        <BlurFade inView delay={0.5} className='lg:flex-1 xl:flex-auto'>
          <WobbleCard
            containerClassName='bg-muted h-fit shadow-2xl shadow-foreground/50'
            className='relative'
          >
            <Image src={beauty} alt='' />
            <ShimmerButton
              background='#106448'
              shimmerSize='1px'
              className='text-xl font-medium px-10 shadow-2xl text-foreground absolute bottom-12 right-8 sm:right-12 md:right-14 lg:right-16 xl:right-20'
            >
              {t('projects.details')}
            </ShimmerButton>
          </WobbleCard>
        </BlurFade>
      </div>
    </div>
  );
};
