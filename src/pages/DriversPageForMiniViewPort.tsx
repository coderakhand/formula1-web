import NavBar from "@/components/NavBar";

export function DriversPageForMiniViewPort() {
  return (
    <div className="min-h-screen min-w-screen flex justify-center">
      <div className="relative h-full w-full flex flex-col  items-center px-3 ">
        <div className="fixed z-50 w-full flex justify-center mt-4">
          <NavBar />
        </div>
        <div className="w-full h-full"></div>
      </div>
    </div>
  );
}
