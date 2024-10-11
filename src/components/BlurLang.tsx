import { X } from 'lucide-react';
import React from 'react';
import BlurFade from './magicui/blur-fade';
import { useLocale } from 'next-intl';

interface Props {
  setLang: (_: boolean) => void;
}

export const BlurLang: React.FC<Props> = ({ setLang }) => {
  const locale = useLocale();
  return (
    <div className='w-dvw h-dvh fixed z-50 backdrop-blur-3xl flex justify-center items-center flex-col gap-8 bg-card/50 overflow-hidden'>
      <div className='absolute top-6 right-10'>
        <X className='text-primary h-8 w-8' onClick={() => setLang(false)} />
      </div>

      <div className='flex gap-6'>
        <BlurFade inView delay={0.2} duration={0.1 * 1}>
          <div
            className={`px-6 p-4 rounded-xl ${
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
              setLang(false);
            }}
          >
            <p className='text-3xl font-bold'>Ro</p>
          </div>
        </BlurFade>

        <BlurFade inView delay={0.2} duration={0.1 * 3}>
          <div
            className={`px-6 p-4 rounded-xl ${
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
              setLang(false);
            }}
          >
            <p className='text-3xl font-bold'>Ру</p>
          </div>
        </BlurFade>

        <BlurFade inView delay={0.2} duration={0.1 * 5}>
          <div
            className={`px-6 p-4 rounded-xl ${
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
              setLang(false);
            }}
          >
            <p className='text-3xl font-bold'>En</p>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};
