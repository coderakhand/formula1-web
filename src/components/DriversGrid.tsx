import { drivers } from "@/utils/config";
import DriverCard from "./DriverCard";
import { twMerge } from "tailwind-merge";

export default function DriversGrid() {
  return (
    <div className="flex max-xsm:flex-col gap-1 xsm:scale-60 md:scale-80 lg:scale-100">
      <Column1 className="max-xsm:hidden" />
      <Column2 />
      <Column3 className="max-xsm:hidden" />
      <div className="xsm:hidden">
        <DriverCard
          driver={drivers[0]}
          npClassName="w-7 left-2 top-2"
          containerClassName="w-88  h-58 bg-white"
          cardClassName="w-87 h-57"
          labelClassName="text-[11px]"
          side="front"
          pfpClassName="w-full"
        >
          <div className="absolute w-full h-full bg-[url(/bg-style-shade.webp)] bg-cover scale-150 z-0 opacity-48" />
        </DriverCard>
      </div>
      <div className="xsm:hidden flex gap-1">
        <Column1 />
        <Column3 />
      </div>
      <Column4 className="max-xsm:hidden" />
    </div>
  );
}

function Column1({ className }: { className?: string }) {
  return (
    <div className={twMerge("flex flex-col gap-1", className)}>
      <div className="flex gap-1">
        <DriverCard
          driver={drivers[14]} // gasly
          containerClassName="w-26 h-27 bg-white"
          cardClassName="w-25 h-26"
          npClassName="w-2.5 left-1 top-1"
          bgClassName="bg-gradient-to-r from-[#FDB7D7]/68 to-[#FDB7D7]/96"
          labelClassName="text-[6px]"
        ></DriverCard>
        <DriverCard
          driver={drivers[7]} // hamilton
          containerClassName="w-29 h-27 bg-white"
          cardClassName="w-28 h-26"
          npClassName="w-3 left-1.5 top-1.5"
          bgClassName="bg-gradient-to-r from-[#A91324]/68 to-[#A91324]/96"
          labelClassName="text-[6px]"
        >
          <div className="absolute w-60 h-full bg-[url(/bg-style-shade.webp)] bg-cover z-0 opacity-40" />
        </DriverCard>
      </div>
      <div className="flex gap-1">
        <div className="flex flex-col gap-1">
          <DriverCard
            driver={drivers[16]} // hulkenberg
            containerClassName="w-21 h-21 bg-white"
            cardClassName="w-20 h-20"
            npClassName="w-2.5 top-1 left-1"
            bgClassName="bg-gradient-to-r from-[#01C00E]/48 to-[#006300]/25"
            labelClassName="text-[5px]"
          />
          <DriverCard
            driver={drivers[19]} // bearman
            containerClassName="w-21 h-19 bg-white"
            cardClassName="w-20 h-18"
            npClassName="w-3 top-1 left-0.5"
            bgClassName="bg-gradient-to-r from-[#A91324]/18 via-white/28 to-[#A91324]/18"
            labelClassName="text-[5px]"
          />
        </div>
        <DriverCard // carlos
          driver={drivers[8]}
          containerClassName="w-34 h-41 bg-white"
          cardClassName="w-33 h-40"
          npClassName="w-4 top-1.5 left-1.5"
          bgClassName="bg-gradient-to-tl from-white/68 to-[#242dde]/76"
        />
      </div>
      <DriverCard // verstappen
        driver={drivers[2]}
        containerClassName="w-56 h-57 bg-white"
        cardClassName="w-55 h-56"
        npClassName="w-3 left-2 top-2"
        bgClassName="bg-gradient-to-r from-[#141926]/60 to-[#141926]/80"
      />
      <div className="flex gap-1">
        <DriverCard // hajdar
          driver={drivers[12]}
          containerClassName="w-32 h-43 bg-white"
          cardClassName="w-31 h-42"
          npClassName="w-1.5 left-1.5 top-1.5"
          bgClassName="bg-gradient-to-r from-[#073C83]/80 via-white/80 to-[#073C83]/80"
        />
        <div className="flex flex-col gap-1">
          <DriverCard
            driver={drivers[15]}
            containerClassName="w-23 h-21 bg-white"
            cardClassName="w-22 h-20"
            npClassName="w-2 left-1 top-1"
            bgClassName="bg-gradient-to-r from-[#FDB7D7]/68 to-[#FDB7D7]/96"
            labelClassName="text-[5px]"
          />
          <DriverCard
            driver={drivers[17]}
            containerClassName="w-23 h-21 bg-white"
            cardClassName="w-22 h-20"
            npClassName="w-1.5 top-1 left-1"
            bgClassName="bg-gradient-to-r from-[#01C00E]/48 to-[#01C00E]/16"
            labelClassName="text-[5px]"
          />
        </div>
      </div>
    </div>
  );
}

function Column2({ className }: { className?: string }) {
  return (
    <div className={twMerge("flex flex-col gap-1", className)}>
      <div className="flex gap-1">
        <DriverCard // russell
          driver={drivers[5]}
          containerClassName="w-46 h-48 bg-white"
          cardClassName="w-45 h-47"
          npClassName="w-5 top-2 left-2"
          bgClassName="bg-gradient-to-r from-[#090D10]/68 to-white/31"
        />
        <DriverCard // yuki
          driver={drivers[3]}
          containerClassName="max-xsm:w-41 w-38 h-48 bg-white"
          cardClassName="max-xsm:w-40 w-37 h-47"
          npClassName="w-4 left-1.5 top-1.5"
          bgClassName="bg-gradient-to-r from-[#141926]/60 to-[#141926]/80"
        />
      </div>
      <div className="flex gap-1">
        <DriverCard // norris
          driver={drivers[1]}
          containerClassName="w-41 h-48 bg-white"
          cardClassName="w-40 h-47"
          npClassName="w-2.5 left-1.5 top-1.5"
        >
          <div className="absolute w-full h-full bg-[url(/bg-style-shade.webp)] bg-cover z-0 opacity-48 scale-120" />
        </DriverCard>
        <DriverCard // leclerc
          driver={drivers[6]}
          containerClassName="max-xsm:w-46 w-43 h-48 bg-white"
          cardClassName="max-xsm:w-45 w-42 h-47"
          npClassName="w-3.5 left-2 top-2"
          bgClassName="bg-gradient-to-r from-[#A91324]/68 to-[#A91324]/96"
        >
          <div className="absolute w-60 h-full bg-[url(/bg-style-shade.webp)] bg-cover z-0 opacity-50" />
        </DriverCard>
      </div>
      <div className="flex gap-1">
        <DriverCard // kimi
          driver={drivers[4]}
          containerClassName="w-57 h-73 bg-white"
          cardClassName="w-56 h-72"
          npClassName="w-4.5 left-2 top-2"
          bgClassName="bg-gradient-to-r from-[#090D10]/68 to-white/31"
        />
        <div className="flex flex-col gap-1">
          <DriverCard // esteban
            driver={drivers[18]}
            containerClassName="max-xsm:w-30 w-27 h-48 bg-white"
            cardClassName="max-xsm:w-29 w-26 h-47"
            npClassName="w-3.5 left-1 top-1"
            bgClassName="bg-gradient-to-r from-[#A91324]/18 via-white/28 to-[#A91324]/18"
          />
          <div
            className="w-27 h-24 bg-background rounded-md flex justify-center items-center overflow-hidden"
            // cardClassName="w-26 h-31"
            // npClassName="w-4"
            // bgClassName="bg-gradient-to-r from-[#A91324]/68 to-[#A91324]/96"
          >
            <div className="rounded-md font-ethnocentric bg-radial from-logo/98 via-logo/60 to-logo/28  bg-clip-text">
              <div className="text-xl text-transparent">2025</div>
              <div className=" text-transparent">Drivers </div>
              <div className=" text-transparent">Grid</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column3({ className }: { className?: string }) {
  return (
    <div className={twMerge("flex flex-col gap-1", className)}>
      <DriverCard // alonso
        driver={drivers[10]}
        containerClassName="w-31 h-37 bg-white"
        cardClassName="w-30 h-36"
        npClassName="w-2.5 left-1.5 top-1.5"
        bgClassName="bg-gradient-to-r from-[#229971]/60 to-[#229971]/10"
        labelClassName="text-[7px]"
      />
      <DriverCard // albon
        driver={drivers[9]}
        containerClassName="w-31 h-37 bg-white"
        cardClassName="w-30 h-36"
        npClassName="w-3.5 top-1 left-1"
        bgClassName="bg-gradient-to-r from-white/58 to-[#242dde]/76"
        labelClassName="text-[7px]"
      >
        <div className="absolute left-0 w-full h-full bg-[url(/bg-style-shade.webp)] bg-cover z-0 opacity-80 scale-120" />
      </DriverCard>
      <DriverCard // lance stroll
        driver={drivers[11]}
        containerClassName="w-31 h-34 bg-white"
        cardClassName="w-30 h-33"
        npClassName="w-2.5 left-1.5 top-1.5"
        bgClassName="bg-gradient-to-r from-[#229971]/60 to-[#229971]/10"
        labelClassName="text-[7px]"
      />
      <DriverCard // lawson
        driver={drivers[13]}
        containerClassName="w-31 h-60 bg-white"
        cardClassName="w-30 h-59"
        npClassName="w-2.5 left-1.5 top-1.5"
        bgClassName="bg-gradient-to-r from-[#073C83]/80 via-white/80 to-[#073C83]/80"
      />
    </div>
  );
}

function Column4({ className }: { className?: string }) {
  return (
    <div className={twMerge("flex flex-col gap-1", className)}>
      <DriverCard
        driver={drivers[0]}
        npClassName="w-7 left-2 top-2"
        containerClassName="max-xsm:w-60 w-58 h-171 bg-white"
        cardClassName="max-xsm:w-59 w-57 h-170"
        labelClassName="text-[11px]"
      >
        <div className="absolute w-full h-full bg-[url(/bg-style-shade.webp)] bg-cover z-0 opacity-68" />
      </DriverCard>
    </div>
  );
}
