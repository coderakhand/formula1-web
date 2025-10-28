"use client";
import HomePagaeForMiniViewPort from "@/pages/HomePageForMiniViewPort";
import useWindow from "@/hooks/useWindow";
import HomePage from "@/pages/HomePage";

export default function Home() {
  const { width } = useWindow();


  if (width == 0) return <div className="h-screen w-screen bg-background"/>;

  return (
    <>
      {width > 594 ? (
        <div className="relative w-screen h-screen bg-background">
          <HomePage />
        </div>
      ) : (
        <HomePagaeForMiniViewPort />
      )}
    </>
  );
}
