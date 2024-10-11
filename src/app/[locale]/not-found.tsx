import BlurFade from '@/components/magicui/blur-fade';
import ShimmerButton from '@/components/magicui/shimmer-button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations();
  return (
    <div className='h-screen w-full relative z-30 flex justify-center items-center'>
      <BlurFade inView delay={0.1} duration={0.25}>
        <div className='bg-card rounded-3xl p-10 md:px-12 lg:px-16 flex flex-col items-center gap-10 lg:gap-14 shadow-2xl shadow-primary/10 border border-primary/25'>
          <BlurFade inView delay={0.1} duration={0.5}>
            <h1 className='font-semibold text-9xl bg-gradient-to-r from-foreground to-primary text-transparent bg-clip-text inline-block'>
              404
            </h1>
          </BlurFade>

          <BlurFade
            inView
            delay={0.1}
            duration={0.75}
            className='bg-transparent shadow-none'
          >
            <div className='font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block'>
              <p className='text-center '>{t('_404_.not')}</p>
              <div className='p-3 flex justify-center'>
                <Link href={'/'}>
                  <ShimmerButton
                    background='#106448'
                    shimmerSize='1px'
                    className='text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-medium px-10 shadow-2xl text-foreground'
                  >
                    {t('_404_.home')}
                  </ShimmerButton>
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </BlurFade>
    </div>
  );
}
