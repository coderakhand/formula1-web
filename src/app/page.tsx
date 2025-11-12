"use client";
import HomePagaeForMiniViewPort from "@/pages/HomePageForMiniViewPort";
import useWindow from "@/hooks/useWindow";
import HomePage from "@/pages/HomePage";

export default function Home() {
  const { width } = useWindow();

  if (width == 0) return <div className="h-screen w-screen bg-background" />;

  return <>{width > 594 ? <HomePage /> : <HomePagaeForMiniViewPort />}</>;
}
