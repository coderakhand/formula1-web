"use client";

import HomePageAfterLandingAnimation from "@/components/HomePageAfterLandingAnimation";
import LandingPageAnimation from "@/components/LandingPageAnimation";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [displayLandingAnimation, setDisplayLandingAnimation] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDisplayLandingAnimation(false);
    }, 4200);
  });
  return (
    <>
      <AnimatePresence>
        {displayLandingAnimation && <LandingPageAnimation />}
      </AnimatePresence>
      {!displayLandingAnimation && <HomePageAfterLandingAnimation />}
    </>
  );
}
