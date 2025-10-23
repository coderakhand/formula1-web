"use client";

import { driverType, getImageUrl } from "@/utils/config";
import Image from "next/image";
import "flag-icons";

export default function DriverStatsCard({
  driver,
  lightStripClassName,
}: {
  driver: driverType;
  lightStripClassName?: string;
}) {
  const bgDarkStrip = `w-[3000px] h-10 ${
    lightStripClassName ?? ""
  } brightness-90`;
  const bgLightStrip = `w-[3000px] h-10 bg-neutral-200 brightness-90`;

  return (
    <div className="opacity-0 driver-card absolute h-full w-full px-6 overflow-hidden flex justify-center items-center shrink-0">
      <div className="relative w-full h-full grid grid-cols-2 justify-center items-center z-30">
        <div className="flex flex-col h-full w-full py-[8rem] px-[3rem]">
          <div className="w-auto">
            <h1 className="font-ethnocentric text-3xl">{`${driver.firstName} ${driver.lastName}`}</h1>
            <div className="flex gap-1 h-7 py-0.5 items-center">
              <div className="text-white font-titillium font-bold flex justify-center gap-1.5 pl-1 pr-2">
                <div className="rounded-full h-5 w-5 overflow-hidden flex justify-center items-center border-2 border-white">
                  <div
                    className={`fi fi-${
                      driver.country_iso_code ?? driver.country.slice(0, 2)
                    } scale-150`}
                  />
                </div>
                {driver.country[0].toUpperCase() + driver.country.slice(1)}
              </div>

              <div className="bg-white h-4 w-0.5 rounded-full" />

              <div className="text-white font-titillium font-bold flex justify-center px-2">
                {driver.team}
              </div>

              <div className="bg-white h-4 w-0.5 rounded-full" />

              <div className="text-white font-titillium font-bold flex justify-center px-2">
                {driver.number}
              </div>
            </div>
          </div>

          <div className="h-full w-full flex items-center justify-center">
            <div className="grid grid-rows-6 gap-6 ">
              <CareerStatsRow statName="Grand Prix Entered" statValue={driver.points[0]} />
              <CareerStatsRow statName="Career Points" statValue={driver.points[1]} />
              <CareerStatsRow statName="Podiums" statValue={driver.points[2]} />
              <CareerStatsRow statName="Pole Positions" statValue={driver.points[3]} />
              <CareerStatsRow statName="World Championships" statValue={driver.points[4]} />
            </div>
          </div>
        </div>

        <div className="inset-0 relative w-full h-full flex flex-col justify-center items-center">
          <div className="z-10 relative w-160 h-160 overflow-hidden  flex flex-col justify-center items-center mask-[url(/scribble.png)] mask-no-repeat mask-top mask-cover bg-center mask-add">
            <div className="absolute mt-90 w-100 h-160 flex items-center z-20">
              <Image
                src={getImageUrl(800, driver.pfpRoute, "right")}
                width={1000}
                height={1000}
                alt=""
                className="w-full scale-68 bg-blue"
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
        </div>
      </div>
    </div>
  );
}

function CareerStatsRow({
  statName,
  statValue,
}: {
  statName: string;
  statValue: number;
}) {
  return (
    <div className="w-160 h-14 grid grid-cols-[80%_20%]">
      <div className="font-titillium font-bold text-3xl text-neutral-500">
        {statName}
      </div>

      <div className="font-bold font-titillium text-4xl">{statValue}</div>
    </div>
  );
}
