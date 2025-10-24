import { twMerge } from "tailwind-merge";

export default function CareerStatsRow({
  statName,
  statValue,
  className,
}: {
  statName: string;
  statValue: number;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "min-w-[60px] w-full lg:h-14 grid grid-cols-[80%_20%]",
        className
      )}
    >
      <div className="font-formula1 smd:font-medium text-xs smd:text-lg  lg:text-3xl text-neutral-500">
        {statName}
      </div>
      <div className="smd:font-bold font-formula1 smd:font-titillium text-sm smd:text-3xl lg:text-4xl">
        {statValue}
      </div>
    </div>
  );
}
