import React from 'react';
import { Timeline } from './ui/timeline';
import BoxReveal from './magicui/box-reveal';
import {
  ChartPie,
  CodeXml,
  Earth,
  Figma,
  NotebookPen,
  ServerCog,
  TabletSmartphone,
} from 'lucide-react';
import planning from '@/assets/images/planing.png';
import analysis from '@/assets/images/analysis.png';
import design from '@/assets/images/designing.png';
import develop from '@/assets/images/developing.png';
import testing from '@/assets/images/qa.png';
import deploy from '@/assets/images/deployment.png';
import maintain from '@/assets/images/maintenance.png';
import { PlanStep } from './PlanStep';
import { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';

const assets: {
  img: StaticImageData;
  icon: JSX.Element | React.ReactElement | React.ReactNode;
}[] = [
  {
    img: planning,
    icon: (
      <NotebookPen className='h-5 w-5 md:h-7 md:w-7 xl:h-9 xl:w-9 text-primary' />
    ),
  },
  {
    img: analysis,
    icon: (
      <ChartPie className='h-5 w-5 md:h-7 md:w-7 xl:h-9 xl:w-9 text-primary' />
    ),
  },
  {
    img: design,
    icon: (
      <Figma className='h-5 w-5 md:h-7 md:w-7 xl:h-9 xl:w-9 text-primary' />
    ),
  },
  {
    img: develop,
    icon: (
      <CodeXml className='h-5 w-5 md:h-7 md:w-7 xl:h-9 xl:w-9 text-primary' />
    ),
  },
  {
    img: testing,
    icon: (
      <TabletSmartphone className='h-5 w-5 md:h-7 md:w-7 xl:h-9 xl:w-9 text-primary' />
    ),
  },
  {
    img: deploy,
    icon: (
      <Earth className='h-5 w-5 md:h-7 md:w-7 xl:h-9 xl:w-9 text-primary' />
    ),
  },
  {
    img: maintain,
    icon: (
      <ServerCog className='h-5 w-5 md:h-7 md:w-7 xl:h-9 xl:w-9 text-primary' />
    ),
  },
];

export const OurPlan: React.FC = () => {
  const t = useTranslations();
  return (
    <div className='min-h-screen w-full flex relative justify-center items-center px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-60 z-30'>
      <div className='flex flex-col gap-20'>
        <div className='flex flex-col gap-10'>
          <BoxReveal boxColor='#106448' duration={0.25}>
            <h1 className='text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block'>
              {t('home.plans')}
            </h1>
          </BoxReveal>
          <BoxReveal boxColor='#106448' duration={0.5}>
            <p className='text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-foreground font-medium lg:w-1/2'>
              {t('home.plans_desc')}
            </p>
          </BoxReveal>
        </div>
        <Timeline
          data={assets.map(({ img, icon }, _: number) => ({
            title: t(`home.step${_ + 1}`),
            content: (
              <PlanStep
                nr={_ + 1}
                description={t(`home.step${_ + 1}_desc`)}
                image={img}
                icon={icon}
              />
            ),
          }))}
        />
      </div>
    </div>
  );
};
