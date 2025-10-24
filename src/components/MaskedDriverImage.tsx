"use client";

import { driverType, getImageUrl } from "@/utils/config";
import Image from "next/image";

export default function MaskedDriverImage({ driver }: { driver: driverType }) {
  const bgDarkStrip = `w-[3000px] h-10  brightness-90`;
  const bgLightStrip = `w-[3000px] h-10 bg-neutral-200 brightness-90`;
  return (
    <div className="z-10 relative w-100 h-112  lg:w-130 lg:h-146  xl:w-160 xl:h-160 overflow-hidden  flex flex-col justify-center items-center mask-[url(/scribble.png)] mask-no-repeat mask-top mask-cover bg-center mask-add">
      <div className="flex justify-center mt-70 lg:mt-40 md:80 lg:w-90 xl:w-100 h-160  items-start z-20">
        <Image
          src={getImageUrl(800, driver.pfpRoute, "right")}
          width={1000}
          height={1000}
          alt=""
          className="w-90 bg-blue"
        />
      </div>

      <div className="absolute rotate-45 flex flex-col justify-center items-center gap-0.5 z-0 -translate-60">
        {[...Array(18)].map((_, idx) => (
          <div
            key={idx}
            className={idx & 1 ? bgLightStrip : bgDarkStrip}
            style={
              idx & 1
                ? {}
                : {
                    backgroundImage: `linear-gradient(to right,
            var(--color-${driver.team.replaceAll(" ", "")}),
            var(--color-${driver.team.replaceAll(" ", "")}),
            var(--color-${driver.team.replaceAll(" ", "")}))`,
                  }
            }
          ></div>
        ))}
      </div>
    </div>
  );
}
