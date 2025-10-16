"use client";

import { motion } from "motion/react";

export default function NavBar() {
  return (
    <div
      className="w-120 h-10 rounded-2xl bg-[#1B1B1B]"
    >
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
  return <a href={`/name`} className="font-ethnocentric text-xs hover:text-logo">{name}</a>;
}
