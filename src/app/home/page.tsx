"use client";
import HomePageAfterLandingAnimation from "@/components/HomePageAfterLandingAnimation";
import HomePagaeForMiniViewPort from "@/pages/HomePageForMiniViewPort";
import useWindow from "@/hooks/useWindow";
import SkeletonPageWithNavBar from "@/components/SkeletonPageWithNavBar";

export default function Home() {
  const { width } = useWindow();
  if (width == 0)
    return (
      <SkeletonPageWithNavBar/>
    );
  return (
    <>
      {width > 594 ? (
        <div className="relative w-screen h-screen bg-background">
          <div className="w-full h-full flex flex-col justify-center items-center px-1 xsm:px-3 lg:px-8 pt-4">
            <HomePageAfterLandingAnimation />
          </div>
        </div>
      ) : (
        <HomePagaeForMiniViewPort />
      )}
    </>
  );
}
