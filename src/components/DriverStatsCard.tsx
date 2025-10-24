import { driverType} from "@/utils/config";
import "flag-icons";
import MaskedDriverImage from "./MaskedDriverImage";
import CareerStatsRow from "./CareerStatRow";

export default function DriverStatsCard({
  driver,
}: {
  driver: driverType;
}) {

  return (
    <div className="opacity-0 driver-card absolute h-full w-full md:px-4 lg:px-6 overflow-hidden flex justify-center items-center shrink-0">
      <div className="relative w-full h-full grid  grid-cols-2 justify-center items-center z-30">
        <div className="flex flex-col h-full w-full py-[8rem] xl:px-[3rem]">
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
            <div className="grid grid-rows-6 gap-2 lg:gap-6 w-full">
              <CareerStatsRow statName="Grand Prix Entered" statValue={driver.points[0]} />
              <CareerStatsRow statName="Career Points" statValue={driver.points[1]} />
              <CareerStatsRow statName="Podiums" statValue={driver.points[2]} />
              <CareerStatsRow statName="Pole Positions" statValue={driver.points[3]} />
              <CareerStatsRow statName="World Championships" statValue={driver.points[4]} />
            </div>
          </div>
        </div>

        <div className="inset-0 relative w-full h-full flex flex-col justify-center items-center">
          <MaskedDriverImage driver={driver}/>
        </div>
      </div>
    </div>
  );
}

