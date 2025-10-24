"use client";

import useWindow from "@/hooks/useWindow";
import DriversPage from "@/pages/DriversPage";
import { DriversPageForMiniViewPort } from "@/pages/DriversPageForMiniViewPort";

export default function Drivers() {
  const { width } = useWindow();
  if(width == 0) return <div/>
  return <>{width > 868 ? <DriversPage /> : <DriversPageForMiniViewPort />}</>;
}
