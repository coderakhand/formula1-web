"use client";
import HomePagaeForMiniViewPort from "@/pages/HomePageForMiniViewPort";
import useWindow from "@/hooks/useWindow";
import HomePage from "@/pages/HomePage";
import SkeletonPageWithNavBar from "@/components/SkeletonPageWithNavBar";

export default function Home() {
  const { width } = useWindow();

  if (width == 0) return <SkeletonPageWithNavBar />;

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
