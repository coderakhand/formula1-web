"use client";

import { useStore } from "@/store/store";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-116 h-10 rounded-2xl bg-[#1B1B1B]">
      <div className="flex justify-around items-center h-full w-full px-6">
        <NavButton name={"home"} />
        <NavButton name={"drivers"} />
        <NavButton name={"tracks"} />
        <NavButton name={"teams"} />
      </div>
    </div>
  );
}

export function NavButton({ name }: { name: string }) {
  const selectedTab = useStore((state) => state.selectedTab);
  const setSelectedTab = useStore((state) => state.setSelectedTab);

  return (
    <button
      onClick={() => setSelectedTab(name)}
      className={`${name === selectedTab ? "text-logo" : "text-white"}`}
    >
      <Link
        key={name}
        href={`/${name}`}
        className={`font-ethnocentric text-xs hover:text-logo flex items-center`}
      >
        {name}
      </Link>
      {name === selectedTab && (
        <div className={`w-full rounded-full h-[3px] bg-logo`} />
      )}
    </button>
  );
}
