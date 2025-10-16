"use client";

import Image from "next/image";
import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";

export default function LandingPageAnimation() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const triggerAnimation = async () => {
      await animate(
        scope.current,
        { opacity: [0, 0.1, 0.2, 0.3, 0.6, 0.8, 1] },
        { delay: 0.3, duration: 0.8, ease: "easeInOut" }
      );
      await animate(
        scope.current,
        { x: -180 },
        { duration: 1, ease: "easeInOut" }
      );
    };
    triggerAnimation();
  });

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "backIn" }}
      className="bg-background w-screen h-screen flex justify-center items-center"
    >
      <span ref={scope} className="absolute opacity-0">
        <Image
          src="/f1-logo.svg"
          width={800}
          height={800}
          alt="logo of formula1"
          className="w-100"
        ></Image>
      </span>
      <div
        className="absolute translate-x-54 text-logo text-4xl font-bold flex justify-center items-center  font-ethnocentric pt-4"
        style={{}}
      >
        <TagLineAnimatoin />
      </div>
    </motion.div>
  );
}

function TagLineAnimatoin() {
  const tagLine = "The Racing Grid";
  return (
    <div className="relative w-108 flex">
      {tagLine.split("").map((ch, idx) => (
        <div key={idx} className="w-auto">
          <motion.p
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1.76 + 0.06 * idx,
              duration: 0.08,
              ease: "linear",
            }}
            className=""
            style={{
              zIndex: tagLine.length - idx,
              position: "relative",
            }}
          >
            {ch == " " ? "\u00A0" : ch}
          </motion.p>
        </div>
      ))}
    </div>
  );
}
