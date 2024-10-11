'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import BlurFade from './magicui/blur-fade';
import { Card } from './ui/card-hover-effect';
import { ContactForm } from './ContactForm';

export default function Form() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  return (
    <div className='flex-1 flex-grow relative w-full'>
      <BlurFade inView duration={0.5} delay={0.25} className='w-full'>
        <div
          className='relative group block h-full w-full p-2'
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === 1 && (
              <motion.span
                className='absolute inset-0 h-full w-full bg-primary block rounded-3xl'
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className='max-md:p-2'>
            <ContactForm />
          </Card>
        </div>

        {/* </Link> */}
      </BlurFade>
    </div>
  );
}
