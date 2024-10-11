import BoxReveal from '@/components/magicui/box-reveal';
import ShimmerButton from '@/components/magicui/shimmer-button';
import { FocusCards } from '@/components/ui/focus-cards';
import beauty from '@/assets/projects/beauty.png';
import imperiallux from '@/assets/projects/imperiallux.png';
import bsv from '@/assets/projects/bsv.png';
import genasig from '@/assets/projects/genasig.png';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Portofolio() {
  const t = useTranslations();
  return (
    <div className='relative px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-60 z-30 flex flex-col gap-40 py-40'>
      <div className='flex flex-col gap-10'>
        <BoxReveal boxColor='#106448' duration={0.25}>
          <h1 className='text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block'>
            {t('portofolio.portofolio')}
          </h1>
        </BoxReveal>
        <BoxReveal boxColor='#106448' duration={0.5}>
          <p className='text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-foreground font-medium lg:w-1/2'>
            {t('portofolio.desc')}
          </p>
        </BoxReveal>
        <BoxReveal boxColor='#106448' duration={0.75}>
          <Link href={'/contacts'}>
            <ShimmerButton
              background='#106448'
              shimmerSize='1px'
              className='text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-medium px-10 shadow-2xl text-foreground'
            >
              {t('home.start')}
            </ShimmerButton>
          </Link>
        </BoxReveal>
      </div>
      <FocusCards
        cards={[
          { title: 'The Imperial Lux', src: imperiallux },
          { title: 'Bsv Distribution', src: bsv },
          { title: 'Gen Asig', src: genasig },
          { title: 'Beauty', src: beauty },

          { title: 'The Imperial Lux', src: imperiallux },
          { title: 'Bsv Distribution', src: bsv },
          { title: 'Gen Asig', src: genasig },
          { title: 'Beauty', src: beauty },

          { title: 'The Imperial Lux', src: imperiallux },
          { title: 'Bsv Distribution', src: bsv },
          { title: 'Gen Asig', src: genasig },
          { title: 'Beauty', src: beauty },
        ]}
      />
    </div>
  );
}
