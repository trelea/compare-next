import React from 'react';
import IconCloud from '@/components/magicui/icon-cloud';
import BoxReveal from './magicui/box-reveal';
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';
import { BorderBeam } from '@/components/magicui/border-beam';
import PulsatingButton from '@/components/magicui/pulsating-button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import ShinyButton from '@/components/magicui/shiny-button';
import WordRotate from './magicui/word-rotate';
import BlurIn from './magicui/blur-in';
import { assets, Card } from '@/config/ServicesCards';
import BlurFade from './magicui/blur-fade';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';
// import { useTranslation } from 'react-i18next';

const slugs = [
  'typescript',
  'javascript',
  'dart',
  'java',
  'react',
  'flutter',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'sonarqube',
  'figma',
];

interface Props {
  onlyCards?: boolean;
}

export const Services: React.FC<Props> = ({ onlyCards }) => {
  const t = useTranslations();
  return (
    <div className='min-h-screen w-full relative mt-28 md:mt-32 lg:mt-0 px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-60 z-30'>
      {!onlyCards && (
        <div className='flex flex-col-reverse lg:flex-row gap-20 items-center'>
          <BlurFade inView delay={0.1} duration={1}>
            <IconCloud iconSlugs={slugs} />
          </BlurFade>

          <div className='flex flex-col gap-10 lg:w-1/2'>
            <BoxReveal boxColor='#106448' duration={0.25}>
              <h1 className='text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block'>
                {t('services.services')}
              </h1>
            </BoxReveal>
            <BoxReveal boxColor='#106448' duration={0.5}>
              <p className='text-md md:text-lg lg:text-xl 2xl:text-2xl text-foreground font-medium'>
                {t('services.desc')}
              </p>
            </BoxReveal>
          </div>
        </div>
      )}

      <div
        className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 ${
          onlyCards ? 'pt-0 lg:pt-28' : 'py-40'
        }`}
      >
        {assets.map((s: Card, _: number) => (
          <NeonGradientCard
            key={_}
            className='flex justify-center items-center'
            neonColors={{ firstColor: '#106448', secondColor: '#e6e6e6' }}
            borderRadius={10}
            borderSize={2}
          >
            <div className='space-y-4 flex flex-col justify-between h-full'>
              <div className='flex flex-row gap-4 items-center'>
                <s.icon className='h-6 w-6' />
                <h1 className='text-lg lg:text-xl font-semibold text-foreground'>
                  {t(`services.s${_ + 1}.t`)}
                </h1>
              </div>
              <p className='text-sm lg:text-base font-normal text-foreground'>
                {t(`services.s${_ + 1}.desc`)}
              </p>
              <Dialog>
                <DialogTrigger className='flex justify-end items-end w-full'>
                  <ShinyButton
                    text={t('more')}
                    className='text-foreground font-medium flex items-center justify-center shadow-2xl'
                  />
                </DialogTrigger>
                <DialogContent className='p-6 md:p-8 flex flex-col gap-8 bg-background rounded-xl max-w-3xl'>
                  <DialogHeader>
                    <DialogTitle className='flex justify-start'>
                      <WordRotate
                        className='text-2xl md:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block'
                        words={[t(`services.s${_ + 1}.t`)]}
                        duration={5000}
                      />
                    </DialogTitle>
                  </DialogHeader>

                  <div className='flex flex-col gap-8'>
                    <BlurIn
                      word={t(`services.s${_ + 1}.det`)}
                      className='font-normal text-foreground text-base md:text-lg xl:text-xl text-start'
                    />
                    <div className='bg-secondary rounded-3xl p-6 grid grid-cols-6 shadow-2xl gap-8 w-full'>
                      {s.icons.map((i: StaticImageData, _: number) => (
                        <BlurFade
                          key={_}
                          className='flex justify-center items-center w-full'
                          delay={_ * 0.1}
                        >
                          <Image
                            src={i}
                            alt=''
                            className='h-6 w-6 md:h-8 md:w-8 xl:h-10 xl:w-10 aspect-square'
                          />
                        </BlurFade>
                      ))}
                    </div>
                    <div className='flex justify-end'>
                      <Link href={'/contacts'}>
                        <PulsatingButton
                          className='bg-gradient-to-r from-primary to-foreground text-sm md:text-lg font-bold px-10'
                          pulseColor='#106448'
                        >
                          {t(`home.start`)}
                        </PulsatingButton>
                      </Link>
                    </div>
                  </div>
                  <BorderBeam
                    size={500}
                    duration={10}
                    delay={10}
                    borderWidth={5}
                    colorFrom='#106448'
                    colorTo='#e6e6e6'
                  />
                </DialogContent>
              </Dialog>
            </div>
          </NeonGradientCard>
        ))}
      </div>
    </div>
  );
};
