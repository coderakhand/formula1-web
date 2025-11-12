"use client";

import HomePageAfterLandingAnimation from "@/components/HomePageAfterLandingAnimation";
import LandingPageAnimation from "@/components/LandingPageAnimation";
import NavBar from "@/components/NavBar";
import useWindow from "@/hooks/useWindow";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [displayLandingAnimation, setDisplayLandingAnimation] = useState(true);
  const { width } = useWindow();

  useEffect(() => {
    if (width == 0) return;
    if (width >= 640) {
      setTimeout(() => {
        setDisplayLandingAnimation(false);
      }, 4000);
    } else {
      setDisplayLandingAnimation(false);
    }
  }, [width]);

  return (
    <>
      {width >= 640 && (
        <AnimatePresence>
          {displayLandingAnimation && <LandingPageAnimation />}
        </AnimatePresence>
      )}
      {!displayLandingAnimation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="min-h-screen w-full h-full flex flex-col justify-center items-center px-1 xsm:px-3 lg:px-8 pt-4 bg-background"
        >
          <NavBar />
          <div className="h-full w-full flex-grow flex items-center">
            <HomePageAfterLandingAnimation />
          </div>
        </motion.div>
      )}
    </>
  );
}
