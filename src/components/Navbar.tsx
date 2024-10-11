'use client';
import { SiJavascript } from 'react-icons/si';
import { FadeText } from '@/components/magicui/fade-text';
import { Menu } from 'lucide-react';
import React from 'react';
import { BlurNavigation } from './BlurNavigation';
import { BlurLang } from './BlurLang';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export const Navbar: React.FC = () => {
  const t = useTranslations();
  const [nav, setNav] = React.useState<boolean>(false);
  const [lang, setLang] = React.useState<boolean>(false);
  const locale = useLocale();

  if (nav) return <BlurNavigation setNav={setNav} />;

  return (
    <>
      {lang && <BlurLang setLang={setLang} />}
      <nav className='fixed z-40 w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 pt-4'>
        <div className='flex justify-between items-center bg-primary shadow-2xl px-6 border border-white border-opacity-25 rounded-full py-2 shadow-primary/20'>
          <Link href={'/'}>
            <SiJavascript className='h-10 w-10 bg-white text-black' />
          </Link>

          <Menu
            className='text-black h-8 w-8 lg:hidden'
            onClick={() => setNav(true)}
          />

          <ul className='hidden lg:flex gap-10 items-center'>
            <li>
              <Link href={'/'}>
                <FadeText
                  className='text-lg font-bold text-zinc-800'
                  direction='up'
                  framerProps={{
                    show: { transition: { delay: 0.1 * 1 } },
                  }}
                  text={t('navbar.home')}
                />
              </Link>
            </li>
            <li>
              <Link href={'/services'}>
                <FadeText
                  className='text-lg font-bold text-zinc-800'
                  direction='up'
                  framerProps={{
                    show: { transition: { delay: 0.1 * 2 } },
                  }}
                  text={t('navbar.services')}
                />
              </Link>
            </li>
            <li>
              <Link href={'/projects'}>
                <FadeText
                  className='text-lg font-bold text-zinc-800'
                  direction='up'
                  framerProps={{
                    show: { transition: { delay: 0.1 * 3 } },
                  }}
                  text={t('navbar.portofolio')}
                />
              </Link>
            </li>
            <li>
              <Link href={'/aboutus'}>
                <FadeText
                  className='text-lg font-bold text-zinc-800'
                  direction='up'
                  framerProps={{
                    show: { transition: { delay: 0.1 * 4 } },
                  }}
                  text={t('navbar.aboutus')}
                />
              </Link>
            </li>
            <li>
              <Link href={'/contacts'}>
                <FadeText
                  className='text-lg font-bold text-zinc-800'
                  direction='up'
                  framerProps={{
                    show: { transition: { delay: 0.1 * 5 } },
                  }}
                  text={t('navbar.contacts')}
                />
              </Link>
            </li>
            <li onClick={() => setLang(true)}>
              <FadeText
                className='text-base font-bold text-foreground bg-zinc-800 p-1 px-2 rounded-full'
                direction='up'
                framerProps={{
                  show: { transition: { delay: 0.1 * 6 } },
                }}
                text={(() => {
                  const _ = locale;
                  if (_ === 'ru') return 'Ру';
                  return _.charAt(0).toUpperCase() + _.slice(1);
                })()}
              />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
