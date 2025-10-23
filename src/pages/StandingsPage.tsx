"use client";

import useWindow from "@/hooks/useWindow";
import { driverStandings, getImageUrl } from "@/utils/config";
import { drivers } from "@/utils/config";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "motion/react";
export default function StandingsPage() {
  useEffect(() => {});
  return (
    <div className="w-full h-full flex flex-col gap-6 pt-12">
      <h1 className="font-bold font-ethnocentric text-2xl">
        2025 Driver Standings
      </h1>
      <div className="flex flex-col gap-2">
        {driverStandings.map((driver) => (
          <DriverPointsBar key={driver.rank} driver={driver} />
        ))}
      </div>
    </div>
  );
}

function DriverPointsBar({
  driver,
}: {
  driver: {
    rank: number;
    country: string;
    name: string;
    points: number;
  };
}) {
  const { width, height } = useWindow();
  const driverData =
    drivers.find(
      (d) => d.firstName == driver.name.split(" ")[0].toLowerCase()
    ) || drivers[0];

  return (
    <div
      style={{
        height:
          height * 0.63 >= 700 ? (height * 0.68) / 20 : (height * 0.63) / 20,
      }}
      className="flex gap-2"
    >
      <motion.div
        initial={{ x: -100 }}
        animate={{
          x: 0,
        }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeIn" }}
        style={{
          background: `var(--color-${driverData?.team.replaceAll(" ", "")})`,
        }}
        className="text-xl font-bold font-ethnocentric w-8 h-8 rounded-full overflow-hidden border-2 border-white"
      >
        <Image
          src={getImageUrl(200, driverData.pfpRoute, "right")}
          width={100}
          height={100}
          alt=""
          className="w-full "
        />
      </motion.div>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: driver.points
            ? driver.points * (width / 430)
            : (8 * width) / 430,
          opacity: 1,
        }}
        transition={{ duration: 1, delay: 0.1, ease: "anticipate" }}
      >
        <motion.div
          whileHover={{ background: "none" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          style={{
            // width: driver.points
            //   ? driver.points * (width / 430)
            //   : (8 * width) / 430,
            backgroundImage: `linear-gradient(to right,
            var(--color-${driverData.team.replaceAll(" ", "")}),
            var(--color-${driverData.team.replaceAll(" ", "")}),
            var(--color-${driverData.team.replaceAll(" ", "")}))`,
          }}
          className={`relative h-full rounded-se-full group rounded-ee-full flex justify-end ${
            driver.points ? "pr-3" : "pr-1"
          } items-center font-formula1 font-bold cursor-pointer`}
        >
          {" "}
          <span className="group-hover:hidden">{driver.points}</span>
          <div className="absolute w-100 left-0 hidden group-hover:block font-titillium">
            {driver.name}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
