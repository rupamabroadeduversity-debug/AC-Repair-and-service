"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const cardMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const buttonMotion = {
  rest: { scale: 1 },
  hover: { scale: 1.02, y: -2, transition: { duration: 0.2 } },
  tap: { scale: 0.98 },
};

export function initGsapAnimations() {
  if (typeof window === "undefined") {
    return undefined;
  }

  gsap.registerPlugin(ScrollTrigger);

  const revealItems = gsap.utils.toArray('[data-gsap="reveal"]');
  revealItems.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 84%",
          once: true,
        },
      }
    );
  });

  const staggerItems = gsap.utils.toArray('[data-gsap="stagger-card"]');
  if (staggerItems.length) {
    gsap.fromTo(
      staggerItems,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: staggerItems[0].parentElement,
          start: "top 78%",
          once: true,
        },
      }
    );
  }

  const counters = gsap.utils.toArray('[data-gsap="counter"] span[data-count]');
  counters.forEach((counter) => {
    const target = Number(counter.getAttribute("data-count") || 0);
    const prefix = counter.textContent?.match(/^[^\d]*/)?.[0] || "";
    const suffix = counter.textContent?.match(/[^\d]*$/)?.[0] || "";
    const state = { value: 0 };

    gsap.to(state, {
      value: target,
      duration: 1.8,
      ease: "power2.out",
      roundProps: "value",
      scrollTrigger: {
        trigger: counter,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        counter.textContent = `${prefix}${state.value}${suffix}`;
      },
    });
  });

  const parallaxItems = gsap.utils.toArray('[data-gsap="parallax"]');
  parallaxItems.forEach((item) => {
    gsap.to(item, {
      yPercent: -6,
      ease: "none",
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  const heroTitle = document.querySelector('[data-gsap="hero-title"]');
  if (heroTitle) {
    gsap.fromTo(
      heroTitle,
      { opacity: 0, y: 24, clipPath: "inset(0 0 100% 0)" },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0 0 0% 0)",
        duration: 1,
        ease: "power3.out",
      }
    );
  }

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}
