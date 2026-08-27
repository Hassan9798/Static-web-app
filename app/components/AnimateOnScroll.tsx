'use client';
import { useEffect, useRef } from 'react';

/** Adds .revealed to every .reveal child once it enters the viewport */
export default function AnimateOnScroll({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return <div ref={ref} className={className}>{children}</div>;
}
