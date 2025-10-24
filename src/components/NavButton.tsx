"use client";

import Link from "next/link";
import { useStore } from "@/store/store";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function NavButton({ name }: { name: string }) {
  const selectedTab = useStore((state) => state.selectedTab);
  const setSelectedTab = useStore((state) => state.setSelectedTab);
  const pathname = window.location.pathname;

  useEffect(() => {
    let tab = pathname.slice(1);
    if (tab == "") tab = "home";
    setSelectedTab(tab);
  }, [pathname, setSelectedTab]);

  return (
    <motion.button
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

      {name === selectedTab ? (
        <motion.div
          layoutId="underline"
          id="underline"
          className={`w-full rounded-full h-[3px] bg-logo`}
        />
      ) : (
        <div className="h-[3px] w-full rounded-full" />
      )}
    </motion.button>
  );
}
