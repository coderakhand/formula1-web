"use client";

import CareerStatsRow from "@/components/CareerStatRow";
import NavBar from "@/components/NavBar";
import SlantedBarsBackground from "@/components/SlantedBarsBackground";
import { drivers, driverType, getImageUrl } from "@/utils/config";
import Image from "next/image";

export default function DriversPageForMiniViewPort() {
  return (
    <div className="min-h-screen min-w-screen flex justify-center">
      <div className="relative h-full w-full flex flex-col  items-center px-3 pb-10">
        <div className="fixed z-50 w-full flex justify-center mt-2">
          <NavBar />
        </div>
        <div className="pt-24 w-full h-full flex justify-center flex-wrap gap-4 xsm:gap-6">
          {drivers.map((driver) => (
            <DriverInfoCard key={driver.number} driver={driver} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DriverInfoCard({ driver }: { driver: driverType }) {
  return (
    <div className="w-full min-w-54 max-w-74  rounded-sm p-0.5 overflow-hidden bg-white flex flex-col">
      <div className="relative w-full h-48 overflow-hidden rounded-t-sm">
        <SlantedBarsBackground
          colorName={driver.team}
          className="w-full -translate-y-100"
          bgDarkClassName="h-5"
          bgLightClassName="h-5 bg-white"
        />
        <Image
          src={getImageUrl(800, driver.pfpRoute, "front")}
          width={600}
          height={600}
          alt=""
          className="absolute w-80 bg-blue z-10"
        />
        <div className="absolute bottom-0 w-full z-20 flex items-end">
          <div className="h-5 w-full bg-background rounded-tr-full border-t-[2px] border-r-[2px] border-white" />
          <div className={`font-ethnocentric w-38   px-12 font-bold backdrop-blur-[1px] border-b-[2px] border-white ${driver.team == 'williams' || driver.team == 'racing bulls' ? "text-slate-400" : ""}`}>
            <div className="text-[8px] flex justify-center">
              {driver.firstName}
            </div>
            <div className="text-[10px] flex justify-center">
              {driver.lastName}
            </div>
          </div>
          <div className="h-5 w-full bg-background border-t-[2px] border-l-[2px] rounded-tl-full" />
        </div>
      </div>
      <div className="w-full rounded-b-sm bg-background grid grid-rows-4  px-4 pb-2 pt-2.5">
        <CareerStatsRow
          statName="Grand Prix Entered"
          statValue={driver.points[0]}
        />
        <CareerStatsRow statName="Career Points" statValue={driver.points[1]} />
        <CareerStatsRow statName="Podiums" statValue={driver.points[2]} />
        <CareerStatsRow
          statName="Pole Positions"
          statValue={driver.points[3]}
        />
        <CareerStatsRow
          statName="World Championships"
          statValue={driver.points[4]}
        />
      </div>
    </div>
  );
}
