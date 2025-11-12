"use client";
import HomePageAfterLandingAnimation from "@/components/HomePageAfterLandingAnimation";
import HomePagaeForMiniViewPort from "@/pages/HomePageForMiniViewPort";
import useWindow from "@/hooks/useWindow";
import SkeletonPageWithNavBar from "@/components/SkeletonPageWithNavBar";
import NavBar from "@/components/NavBar";

export default function Home() {
  const { width } = useWindow();
  if (width == 0) return <SkeletonPageWithNavBar />;
  return (
    <>
      {width > 594 ? (
        <div className="min-h-screen w-full h-full flex flex-col items-center px-1 xsm:px-3 lg:px-8 pt-4">
          <NavBar />
          <div className="h-full w-full flex-grow flex items-center">
            <HomePageAfterLandingAnimation />
          </div>
        </div>
      ) : (
        <HomePagaeForMiniViewPort />
      )}
    </>
  );
}
