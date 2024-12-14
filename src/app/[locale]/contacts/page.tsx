import Form from '@/components/Form';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import React from 'react';
import {
  FaInstagram,
  FaLinkedin,
  FaSquareFacebook,
  FaSquarePhone,
  FaSquareTwitter,
} from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';

export const metadata: Metadata = {
  title: 'Contacts',
};

export default function Contacts() {
  const t = useTranslations();
  return (
    <div className='relative flex justify-center items-center min-h-screen px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-60 z-30'>
      <div className='flex flex-col lg:flex-row gap-10 w-full py-32'>
        {/* FORM */}
        <Form />

        {/* CARDS */}
        <HoverEffect
          forContacts
          className='flex-1 flex-grow'
          items={[
            {
              title: t('footer.contacts'),
              link: '#',
              element: (
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
              ),
            },
            {
              title: t('footer.social'),
              link: '#',
              element: (
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
              ),
            },
            // {
            //   title: 'Locatia',
            //   link: '#',
            //   element: <>Maps</>
            // }
          ]}
        />
      </div>
    </div>
  );
}
