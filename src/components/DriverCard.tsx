"use client";

import { COMMON_MEDIA_URL, driverType } from "@/utils/config";
import Image from "next/image";

export default function DriverCard({
  driver,
  children,
  containerClassName,
  cardClassName,
  npClassName,
  pfpClassName,
  bgClassName,
}: {
  driver: driverType;
  children?: React.ReactNode;
  containerClassName?: string;
  cardClassName?: string;
  npClassName?: string;
  pfpClassName?: string;
  bgClassName?: string;
}) {
  return (
    <div
      className={`flex justify-center items-center rounded-md ${
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
            bgClassName ??
            "bg-gradient-to-r from-[#F47600]/90 to-[#F47600]/80"
          }`}
        />
        <Image
          src={`${COMMON_MEDIA_URL}/${driver.pfpRoute}`}
          width={300}
          height={600}
          alt="oscar"
          className={`absolute w-56 z-10 ${pfpClassName}`}
        ></Image>
        <Image
          src={`${COMMON_MEDIA_URL}/${driver.npRoute}`}
          width={300}
          height={300}
          alt="oscar_number"
          className={`absolute left-2 top-2 z-10 opacity-55 ${
            npClassName ?? "w-8"
          }`}
        ></Image>
        {children}
      </div>
    </div>
  );
}
