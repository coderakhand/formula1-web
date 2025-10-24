"use client";

import { driverType, getImageUrl } from "@/utils/config";
import Image from "next/image";
import SlantedBarsBackground from "./SlantedBarsBackground";

export default function MaskedDriverImage({ driver }: { driver: driverType }) {
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

     <SlantedBarsBackground colorName={driver.team}/>
    </div>
  );
}
