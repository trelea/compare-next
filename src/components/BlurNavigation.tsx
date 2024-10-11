import React from 'react';
import { FadeText } from './magicui/fade-text';
import { X } from 'lucide-react';
import BlurFade from './magicui/blur-fade';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

interface Props {
  setNav: (_: boolean) => void;
}

export const BlurNavigation: React.FC<Props> = ({ setNav }) => {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <div className='w-dvw h-dvh fixed z-50 backdrop-blur-3xl flex justify-center items-center flex-col gap-8 bg-card/50'>
      <div className='absolute top-6 right-10'>
        <X className='text-primary h-8 w-8' onClick={() => setNav(false)} />
      </div>

      <Link href={'/'} onClick={() => setNav(false)}>
        <FadeText
          className='text-3xl font-bold text-primary'
          direction='up'
          framerProps={{
            show: { transition: { delay: 0.1 * 1 } },
          }}
          text={t('navbar.home')}
        />
      </Link>
      <Link href={'/services'} onClick={() => setNav(false)}>
        <FadeText
          className='text-3xl font-bold text-primary'
          direction='up'
          framerProps={{
            show: { transition: { delay: 0.1 * 2 } },
          }}
          text={t('navbar.services')}
        />
      </Link>
      <Link href={'/projects'} onClick={() => setNav(false)}>
        <FadeText
          className='text-3xl font-bold text-primary'
          direction='up'
          framerProps={{
            show: { transition: { delay: 0.1 * 3 } },
          }}
          text={t('navbar.portofolio')}
        />
      </Link>
      <Link href={'/aboutus'} onClick={() => setNav(false)}>
        <FadeText
          className='text-3xl font-bold text-primary'
          direction='up'
          framerProps={{
            show: { transition: { delay: 0.1 * 4 } },
          }}
          text={t('navbar.aboutus')}
        />
      </Link>
      <Link href={'/contacts'} onClick={() => setNav(false)}>
        <FadeText
          className='text-3xl font-bold text-primary'
          direction='up'
          framerProps={{
            show: { transition: { delay: 0.1 * 5 } },
          }}
          text={t('navbar.contacts')}
        />
      </Link>

      <div className='flex gap-3'>
        <BlurFade inView delay={0.2} duration={0.1 * 1}>
          <div
            className={`px-2 p-1 rounded-xl ${
              locale === 'ro'
                ? 'bg-primary'
                : 'hover:bg-foreground hover:text-primary'
            }`}
            onClick={() => {
              window.location.pathname = `/ro/${
                window.location.pathname.split('/')[2] === undefined
                  ? ''
                  : window.location.pathname.split('/')[2]
              }`;
              setNav(false);
            }}
          >
            <p className='text-lg font-bold'>Ro</p>
          </div>
        </BlurFade>

        <BlurFade inView delay={0.2} duration={0.1 * 3}>
          <div
            className={`px-2 p-1 rounded-xl ${
              locale === 'ru'
                ? 'bg-primary'
                : 'hover:bg-foreground hover:text-primary'
            }`}
            onClick={() => {
              window.location.pathname = `/ru/${
                window.location.pathname.split('/')[2] === undefined
                  ? ''
                  : window.location.pathname.split('/')[2]
              }`;
              setNav(false);
            }}
          >
            <p className='text-lg font-bold'>Ру</p>
          </div>
        </BlurFade>

        <BlurFade inView delay={0.2} duration={0.1 * 5}>
          <div
            className={`px-2 p-1 rounded-xl ${
              locale === 'en'
                ? 'bg-primary'
                : 'hover:bg-foreground hover:text-primary'
            }`}
            onClick={() => {
              window.location.pathname = `/en/${
                window.location.pathname.split('/')[2] === undefined
                  ? ''
                  : window.location.pathname.split('/')[2]
              }`;
              setNav(false);
            }}
          >
            <p className='text-lg font-bold'>En</p>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};
