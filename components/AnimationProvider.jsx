"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initGsapAnimations } from "@/lib/animations";

export default function AnimationProvider() {
  const pathname = usePathname();

  useEffect(() => {
    let cleanup;
    let timeoutId;
    let frameIdOne;
    let frameIdTwo;
    let idleId;

    const runAnimations = () => {
      frameIdOne = window.requestAnimationFrame(() => {
        frameIdTwo = window.requestAnimationFrame(() => {
          cleanup = initGsapAnimations();
        });
      });
    };

    const scheduleAnimations = () => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(
          () => {
            runAnimations();
          },
          { timeout: 1200 }
        );
        return;
      }

      timeoutId = window.setTimeout(runAnimations, 450);
    };

    if (document.readyState === "complete") {
      scheduleAnimations();
    } else {
      const handleLoad = () => {
        scheduleAnimations();
        window.removeEventListener("load", handleLoad);
      };

      window.addEventListener("load", handleLoad);

      return () => {
        window.removeEventListener("load", handleLoad);
        cleanup?.();
      };
    }

    return () => {
      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      if (frameIdOne) {
        window.cancelAnimationFrame(frameIdOne);
      }
      if (frameIdTwo) {
        window.cancelAnimationFrame(frameIdTwo);
      }
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
