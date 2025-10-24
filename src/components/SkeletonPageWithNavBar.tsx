import NavBar from "./NavBar";

export default function SkeletonPageWithNavBar() {
  return (
    <div className="min-w-screen h-[max(100vh, 860px)] w-full flex flex-col items-center px-3 xsm:px-8  pt-2 xsm:pt-4">
      <NavBar />
    </div>
  );
}
