import DriverCard from "@/components/DriverCard";
import { drivers } from "@/utils/config";

export default function DriversPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex gap-1">
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <DriverCard
              driver={drivers[14]} // gasly
              containerClassName="w-26 h-27 bg-white"
              cardClassName="w-25 h-26"
              npClassName="w-4"
              bgClassName="bg-gradient-to-r from-[#FDB7D7]/68 to-[#FDB7D7]/96"
            ></DriverCard>
            <DriverCard
              driver={drivers[7]} // hamilton
              containerClassName="w-29 h-27 bg-white"
              cardClassName="w-28 h-26"
              npClassName="w-4"
              bgClassName="bg-gradient-to-r from-[#A91324]/68 to-[#A91324]/96"
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
                npClassName="w-4"
                bgClassName="bg-gradient-to-r from-[#FDB7D7]/68 to-[#FDB7D7]/96"
              />
              <DriverCard
                driver={drivers[19]} // bearman
                containerClassName="w-21 h-19 bg-white"
                cardClassName="w-20 h-18"
                npClassName="w-4"
                bgClassName="bg-gradient-to-r from-[#FDB7D7]/68 to-[#FDB7D7]/96"
              />
            </div>
            <DriverCard
              driver={drivers[8]}
              containerClassName="w-34 h-41 bg-white"
              cardClassName="w-33 h-40"
              npClassName="w-4"
              bgClassName="bg-gradient-to-r from-[#FDB7D7]/68 to-[#FDB7D7]/96"
            />
          </div>
          <DriverCard // verstappen
            driver={drivers[2]}
            containerClassName="w-56 h-57 bg-white"
            cardClassName="w-55 h-56"
            npClassName="w-4"
            bgClassName="bg-gradient-to-r from-[#141926]/60 to-[#141926]/80"
          />
          <div className="flex gap-1">
            <DriverCard
              driver={drivers[12]} // hajdar
              containerClassName="w-32 h-43 bg-white"
              cardClassName="w-31 h-42"
              npClassName="w-4"
              bgClassName="bg-gradient-to-r from-[#141926]/60 to-[#141926]/80"
            />
            <div className="flex flex-col gap-1">
              <DriverCard
                driver={drivers[15]}
                containerClassName="w-23 h-21 bg-white"
                cardClassName="w-22 h-20"
                npClassName="w-4"
                bgClassName="bg-gradient-to-r from-[#FDB7D7]/68 to-[#FDB7D7]/96"
              />
              <DriverCard
                driver={drivers[17]}
                containerClassName="w-23 h-21 bg-white"
                cardClassName="w-22 h-20"
                npClassName="w-4"
                bgClassName="bg-gradient-to-r from-[#141926]/60 to-[#141926]/80"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <DriverCard
              driver={drivers[5]} // russell
              containerClassName="w-46 h-48 bg-white"
              cardClassName="w-45 h-47"
              npClassName="w-4"
              bgClassName="bg-gradient-to-r from-[#A91324]/68 to-[#A91324]/96"
            />
            <DriverCard
              driver={drivers[3]} // yuki
              containerClassName="w-38 h-48 bg-white"
              cardClassName="w-37 h-47"
              npClassName="w-4"
              bgClassName="bg-gradient-to-r from-[#141926]/60 to-[#141926]/80"
            />
          </div>
          <div className="flex gap-1">
            <DriverCard
              driver={drivers[1]} // norris
              containerClassName="w-41 h-48 bg-white"
              cardClassName="w-40 h-47"
              npClassName="w-4"
              bgClassName="bg-gradient-to-r from-[#A91324]/68 to-[#A91324]/96"
            />
            <DriverCard
              driver={drivers[6]} // leclerc
              containerClassName="w-43 h-48 bg-white"
              cardClassName="w-42 h-47"
              npClassName="w-4"
              bgClassName="bg-gradient-to-r from-[#A91324]/68 to-[#A91324]/96"
            >
              <div className="absolute w-60 h-full bg-[url(/bg-style-shade.webp)] bg-cover z-0 opacity-50" />
            </DriverCard>
          </div>
          <div className="flex gap-1">
            <DriverCard
              driver={drivers[4]} // kimi
              containerClassName="w-57 h-73 bg-white"
              cardClassName="w-56 h-72"
              npClassName="w-4"
              bgClassName="bg-gradient-to-r from-[#A91324]/68 to-[#A91324]/96"
            />
            <div className="flex flex-col gap-1">
              <DriverCard
                driver={drivers[18]} // esteban
                containerClassName="w-27 h-48 bg-white"
                cardClassName="w-26 h-47"
                npClassName="w-4"
                bgClassName="bg-gradient-to-r from-[#A91324]/68 to-[#A91324]/96"
              />
              <div
                className="w-27 h-24 bg-background rounded-md flex justify-center items-center overflow-hidden"
                // cardClassName="w-26 h-31"
                // npClassName="w-4"
                // bgClassName="bg-gradient-to-r from-[#A91324]/68 to-[#A91324]/96"
              >
                <div className="rounded-md font-ethnocentric">
                  <div className="text-xl">2025</div>
                  <div className="">Drivers </div>
                  <div className="">Grid</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <DriverCard
            driver={drivers[10]}
            containerClassName="w-31 h-37 bg-white"
            cardClassName="w-30 h-36"
            npClassName="w-4"
            bgClassName="bg-gradient-to-r from-[#141926]/60 to-[#141926]/80"
          />
          <DriverCard
            driver={drivers[9]}
            containerClassName="w-31 h-37 bg-white"
            cardClassName="w-30 h-36"
            npClassName="w-4"
            bgClassName="bg-gradient-to-r from-[#242dde]/40 to-[#242dde]/80"
          >
            <div className="absolute w-full h-full bg-[url(/bg-style-shade.webp)] bg-center z-0 opacity-20" />
          </DriverCard>
          <DriverCard
            driver={drivers[11]}
            containerClassName="w-31 h-34 bg-white"
            cardClassName="w-30 h-33"
            npClassName="w-4"
            bgClassName="bg-gradient-to-r from-[#141926]/60 to-[#141926]/80"
          />
          <DriverCard
            driver={drivers[13]}
            containerClassName="w-31 h-60 bg-white"
            cardClassName="w-30 h-59"
            npClassName="w-4"
            bgClassName="bg-gradient-to-r from-[#141926]/60 to-[#141926]/80"
          />
        </div>

        <div className="flex flex-col gap-1">
          <DriverCard
            driver={drivers[0]}
            npClassName="w-7"
            containerClassName="w-58 h-171 bg-white"
            cardClassName="w-57 h-170"
          >
            <div className="absolute w-full h-full bg-[url(/bg-style-shade.webp)] bg-cover z-0 opacity-68" />
          </DriverCard>
        </div>
      </div>
    </div>
  );
}
