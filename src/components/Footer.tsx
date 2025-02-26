import React from 'react';
import { SiJavascript } from 'react-icons/si';
import {
  FaInstagram,
  FaSquareFacebook,
  FaLinkedin,
  FaSquareTwitter,
  FaSquarePhone,
} from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { LiaCopyrightSolid } from 'react-icons/lia';
import { Heart, Laptop } from 'lucide-react';
// import { Trans,  } from "next-intl";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import logo from '@/assets/logo/Horizontal Gradient.svg';
import Image from 'next/image';

export const Footer: React.FC = () => {
  const t = useTranslations();
  return (
    <footer className='bg-background/100 relative z-40 shadow-primary shadow-2xl px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-60'>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:flex flex-row justify-between py-10'>
        <div className='w-full flex justify-center items-center bg-gradient-to-r from-primary to-foreground rounded-lg h-fit p-2'>
          <Image src={logo} alt='Dev Compare Logo' height={250} width={250} />
        </div>

        <div className='w-full'>
          <h1 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block'>
            {t('footer.social')}
          </h1>
          <ul className='flex flex-col text-lg md:text-xl text-foreground font-normal gap-3 mt-3'>
            <li className='flex items-center gap-2 hover:underline'>
              <FaInstagram />
              <p>Instagram</p>
            </li>
            <li className='flex items-center gap-2 hover:underline'>
              <FaSquareFacebook />
              <p>Facebook</p>
            </li>
            <li className='flex items-center gap-2 hover:underline'>
              <FaLinkedin />
              <p>Linkedin</p>
            </li>
            <li className='flex items-center gap-2 hover:underline'>
              <FaSquareTwitter />
              <p>Twitter</p>
            </li>
          </ul>
        </div>

        <div className='w-full'>
          <h1 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text inline-block'>
            {t('footer.contacts')}
          </h1>
          <ul className='flex flex-col text-lg md:text-xl text-foreground font-normal gap-3 mt-3'>
            <li className='flex items-center gap-2 hover:underline'>
              <FaSquarePhone />
              <p>+373 62 114 520</p>
            </li>
            <li className='flex items-center gap-2 hover:underline'>
              <IoIosMail />
              <p>2024compare@gmail.com</p>
            </li>
          </ul>
        </div>

        <Link
          href={'/contacts'}
          className='hidden bg-primary/50 w-full lg:flex justify-center items-center bg-gradient-to-r from-primary to-foreground hover:from-foreground rounded-lg'
        >
          <h1 className='text-background text-3xl font-bold '>
            {t('home.start')}
          </h1>
        </Link>
      </div>

      <div className='border-t border-foreground py-4 flex justify-between'>
        <p className='text-xs text-foreground flex items-center gap-2'>
          <LiaCopyrightSolid /> Copyright 2024 Com Pare. {t('footer.copyright')}
        </p>
        <p className='hidden text-xs text-foreground md:flex items-center gap-2'>
          {t.rich('footer.love', {
            l1: () => <Heart className='size-4 fill-red-600 stroke-red-600' />,
            l2: () => <Laptop className='size-4' />,
          })}
        </p>
      </div>
    </footer>
  );
};
