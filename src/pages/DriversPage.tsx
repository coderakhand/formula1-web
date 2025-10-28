"use client";

import DriverStatsCard from "@/components/DriverStatsCard";
import NavBar from "@/components/NavBar";
import { drivers } from "@/utils/config";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { useRef } from "react";

export default function DriversPage() {
  const lenis = useLenis(({ scroll }) => {});
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const cards = document.querySelectorAll(".driver-card");
      const totalCards = cards.length;
      gsap.set(cards[0], { opacity: 1 });

      for (let i = 1; i < totalCards; i++) {
        gsap.set(cards[i], { opacity: 0 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-cards",
          start: "top top",
          end: `+=${window.innerHeight * (totalCards - 1)})`,
          pin: true,
          scrub: 0.5,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentCard = cards[i];
        const nextCard = cards[i + 1];

        scrollTimeline.to(
          currentCard,
          {
            delay: 0.7,
            opacity: 0,
            duration: 1,
            ease: "expo.in",
          },
          i
        );

        scrollTimeline.to(
          nextCard,
          {
            delay: 1.4,
            opacity: 1,
            duration: 1,
            ease: "expo.out",
          },
          i
        );
      }
      return () => {
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: ref }
  );

  return (
    <ReactLenis root>
      <div className="h-screen w-screen flex justify-center overflow-x-clip">
        <div className="relative h-full w-full flex flex-col  items-center">
          <div className="fixed z-50 w-full flex justify-center mt-4">
            <NavBar />
          </div>
          <div ref={ref} className="w-full relative h-full">
            <div className="sticky-cards relative w-full h-full overflow-hidden">
              {drivers.map((driver) => (
                <DriverStatsCard key={driver.number} driver={driver} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}
