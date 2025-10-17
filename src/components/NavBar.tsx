"use client";

import { motion } from "motion/react";
import { useStore } from "@/store/store";

export default function NavBar() {
  return (
    <div className="w-120 h-10 rounded-2xl bg-[#1B1B1B]">
      <div className="flex justify-around items-center h-full w-full px-10">
        <NavButton name={"Home"} />
        <NavButton name={"Drivers"} />
        <NavButton name={"Tracks"} />
        <NavButton name={"Teams"} />
      </div>
    </div>
  );
}

function NavButton({ name }: { name: string }) {
  const selectedTab = useStore((state) => state.selectedTab);
  const setSelectedTab = useStore((state) => state.setSelectedTab);

  return (
    <button onClick={() => setSelectedTab(name)} className={`${name === selectedTab ? "text-logo" : "text-white"}`}>
      <a
        key={name}
        href={`/${name}`}
        className={`font-ethnocentric text-xs hover:text-logo flex items-center`}
      >
        {name}
      </a>
      {name === selectedTab && <div className={`w-full rounded-full h-[3px] bg-logo`} />}
    </button>
  );
}
