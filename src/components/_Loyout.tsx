import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FaPhone } from 'react-icons/fa6';
import Link from 'next/link';

interface Props {
  children:
    | React.ReactElement
    | React.ReactElement[]
    | JSX.Element
    | JSX.Element[]
    | React.ReactNode;
}

export const Loyout: React.FC<Props> = ({ children }) => {
  return (
    <main className='w-full h-fit relative overflow-y-hidden bg-gradient-to-r from-background to-secondary/75'>
      <Navbar />
      {children}
      <Footer />
      <Link href={'tel:+373067500054'}>
        <FaPhone
          className='fixed z-50 bg-primary text-foreground right-6 bottom-6 md:right-10 md:bottom-10 aspect-square p-4 h-14 w-14 md:h-16 md:w-16 rounded-full hover:bg-primary/75 hover:shadow-xl hover:shadow-primary/50 animate-bounce'
          href='tel:+373067500054'
        />
      </Link>
    </main>
  );
};
