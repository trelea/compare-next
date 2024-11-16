import React from 'react';
import BlurFade from './magicui/blur-fade';
import { WobbleCard } from './ui/wobble-card';
import Image, { StaticImageData } from 'next/image';

interface Props {
  nr: number;
  description: string;
  icon: JSX.Element | React.ReactElement | React.ReactNode;
  image: StaticImageData;
}

export const PlanStep: React.FC<Props> = ({ nr, description, icon, image }) => {
  return (
    <div className='min-h-screen flex flex-col relative'>
      <BlurFade inView delay={0.25}>
        <WobbleCard
          containerClassName={`shadow-xl ${
            nr === 1 || nr === 5 ? 'bg-primary shadow-foreground/50' : ''
          } ${nr === 2 || nr === 6 ? 'bg-secondary shadow-primary/50' : ''} ${
            nr === 3 || nr === 7 ? 'bg-foreground shadow-primary/50' : ''
          } ${nr === 4 ? 'bg-muted shadow-foreground/50' : ''}`}
          className='py-2 md:py-4 lg:py-5 xl:py-6 flex flex-col gap-10'
        >
          <div className='flex flex-col gap-4 py-2'>
            <div className='flex items-center -space-x-4 md:-space-x-5 xl:-space-x-6'>
              <div
                className={`mix-blend-lighten text-2xl md:text-3xl xl:text-4xl text-foreground font-extrabold bg-background/50 aspect-square flex justify-center items-center size-14 md:size-16 xl:size-20 rounded-full`}
              >
                <h1>{nr}</h1>
              </div>
              <div className='mix-blend-lighten bg-foreground p-3 rounded-full'>
                {icon}
              </div>
            </div>

            <p
              className={`text-sm md:text-base xl:text-lg font-medium ${
                nr === 2 || nr === 4 || nr === 6 ? 'text-foreground' : ''
              } ${
                nr === 1 || nr === 3 || nr === 5 || nr === 7 ? 'text-card' : ''
              }`}
            >
              {description}
            </p>
          </div>

          <BlurFade inView delay={0.5}>
            <Image
              src={image}
              alt={`image step ${nr}`}
              className='rounded-xl'
            />
          </BlurFade>
        </WobbleCard>
      </BlurFade>
    </div>
  );
};
