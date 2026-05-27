"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import AnimationProvider from "@/components/AnimationProvider";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <>
      <AnimationProvider />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
}
