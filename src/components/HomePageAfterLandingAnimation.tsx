"use client";

import { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import useMousePosition from "@/hooks/useMousePosition";
import DriversGrid from "./DriversGrid";
import { motion } from "motion/react";

export default function HomePageAfterLandingAnimation() {
  const c = useRef<HTMLDivElement | null>(null);
  const { x, y } = useMousePosition();
  const [maskPos, setMaskPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = c.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    setMaskPos({
      x: x - rect.left,
      y: y - rect.top,
    });
  }, [x, y]);

  const size = 284;

  return (
    <>
      <NavBar />
      <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
        <div className="absolute lg:grayscale-[94%] flex items-center">
          <DriversGrid />
        </div>
        <div className="hidden lg:block absolute">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              ref={c}
              animate={{
                webkitMaskPosition: `${maskPos.x - size / 2}px ${
                  maskPos.y - size / 2 + 20
                }px`,
                maskPosition: `${maskPos.x - size / 2}px ${
                  maskPos.y - size / 2 + 20
                }px`,
              }}
              transition={{ type: "tween", ease: "backOut", duration: 0.12 }}
              className="h-full flex items-center"
              style={{
                WebkitMaskImage: "url(/splash-design.png)",
                maskImage: "url(/splash-design.png)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                maskSize: `${size}px`,
                cursor: "none",
              }}
            >
              <DriversGrid />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
