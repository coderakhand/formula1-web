"use client";

import { COMMON_MEDIA_URL, driverType } from "@/utils/config";
import Image from "next/image";

export default function DriverCard({
  onLoadHandler,
  driver,
  children,
  containerClassName,
  cardClassName,
  npClassName,
  pfpClassName,
  bgClassName,
}: {
  driver: driverType;
  onLoadHandler?: () => void;
  children?: React.ReactNode;
  containerClassName?: string;
  cardClassName?: string;
  npClassName?: string;
  pfpClassName?: string;
  bgClassName?: string;
}) {
  return (
    <div
      className={`flex justify-center items-center rounded-md group ${
        containerClassName ?? "w-39 h-49 bg-white"
      }`}
    >
      <div
        className={`relative overflow-hidden rounded-md bg-background ${
          cardClassName ?? "w-38 h-48"
        }`}
      >
        <div
          className={`absolute w-full h-full ${
            bgClassName ?? "bg-gradient-to-r from-[#F47600]/90 to-[#F47600]/80"
          }`}
        />
        <Image
          src={`${COMMON_MEDIA_URL}/${driver.pfpRoute}`}
          width={800}
          height={800}
          alt="oscar"
          className={`absolute w-56 z-10 ${pfpClassName}`}
          onLoad={onLoadHandler}
        ></Image>
        <Image
          src={`${COMMON_MEDIA_URL}/${driver.npRoute}`}
          width={800}
          height={800}
          alt="oscar_number"
          className={`absolute z-10 hidden group-hover:block ${
            npClassName ?? "w-8 left-2 top-2"
          }`}
          onLoad={onLoadHandler}
        ></Image>
        {children}
      </div>
    </div>
  );
}
