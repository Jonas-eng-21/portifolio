"use client"; 

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Orb from '../ui/Orb';
import ShinyText from '../ui/ShinyText';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MetaBalls from '../ui/MetaBalls';

gsap.registerPlugin(ScrollTrigger);

export const HomeSection = () => {
  const t = useTranslations();
  const textContainerRef = useRef(null); 
  useLayoutEffect(() => {
    const elementsToAnimate = gsap.utils.toArray('.reveal-text');

    const ctx = gsap.context(() => {
      gsap.from(elementsToAnimate, {
        opacity: 0,
        y: 50, 
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2, 
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });
    }, textContainerRef); 
    return () => ctx.revert(); 
  }, []);

  return (
   <section id="inicio" className="w-full py-24 sm:py-32">
      <div className="container mx-auto flex max-w-5xl flex-col-reverse items-center justify-between gap-12 px-4 md:flex-row">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <span className="font-mono text-sm text-[var(--accent)]">
            {t('hero_greeting')}
          </span>

          <div ref={textContainerRef}>
            <h1 className="reveal-text text-4xl font-bold tracking-tight sm:text-5xl">
              {t('hero_name')}
            </h1>
            <h2 className="reveal-text text-xl font-semibold sm:text-2xl">
              <ShinyText text={t('job_title')} />
            </h2>
            <p className="reveal-text max-w-md leading-relaxed text-[var(--foreground-muted)]">
              {t('hero_description')}
            </p>
          </div>
        </div>

        <div className="relative h-64 w-64 flex-shrink-0 sm:h-80 sm:w-80">
          <Image
            src="/Foto.jpeg"
            alt={t('hero_name')}
            width={400}
            height={400}
            className="relative z-10 h-full w-full rounded-full object-cover shadow-lg"
            priority
          />
          <div className="absolute top-1/2 left-1/2 z-20 h-[125%] w-[125%] -translate-x-1/2 -translate-y-1/2">
            <Orb />
          </div>
        </div>
      </div>
            <div className="absolute inset-0 z-0 opacity-40">
        <MetaBalls ballCount={20} clumpFactor={1.2} />
      </div>
    </section>
  );
};
