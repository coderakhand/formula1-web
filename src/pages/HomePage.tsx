"use client";

import HomePageAfterLandingAnimation from "@/components/HomePageAfterLandingAnimation";
import LandingPageAnimation from "@/components/LandingPageAnimation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [displayLandingAnimation, setDisplayLandingAnimation] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDisplayLandingAnimation(false);
    }, 4000);
  });
  return (
    <>
      <AnimatePresence>
        {displayLandingAnimation && <LandingPageAnimation />}
      </AnimatePresence>
      {!displayLandingAnimation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="w-full h-full flex flex-col justify-center items-center px-8 pt-4"
        >
          <HomePageAfterLandingAnimation />
        </motion.div>
      )}
    </>
  );
}