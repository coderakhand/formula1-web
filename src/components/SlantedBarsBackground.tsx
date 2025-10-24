import { twMerge } from "tailwind-merge";

export default function SlantedBarsBackground({
  colorName,
  className,
  bgDarkClassName,
  bgLightClassName,
}: {
  colorName: string;
  className?: string;
  bgLightClassName?: string;
  bgDarkClassName?: string;
}) {
    
  const bgDarkStrip = twMerge(
    `w-[3000px] h-10  brightness-90`,
    bgDarkClassName
  );

  const bgLightStrip = twMerge(
    `w-[3000px] h-10 bg-neutral-200 brightness-90`,
    bgLightClassName
  );

  return (
    <div
      className={twMerge(
        "absolute rotate-45 flex flex-col justify-center items-center gap-0.5 z-0 -translate-60",
        className
      )}
    >
      {[...Array(18)].map((_, idx) => (
        <div
          key={idx}
          className={idx & 1 ? bgLightStrip : bgDarkStrip}
          style={
            idx & 1
              ? {}
              : {
                  backgroundImage: `linear-gradient(to right,
            var(--color-${colorName.replaceAll(" ", "")}),
            var(--color-${colorName.replaceAll(" ", "")}),
            var(--color-${colorName.replaceAll(" ", "")}))`,
                }
          }
        ></div>
      ))}
    </div>
  );
}
