import DriversGrid from "../components/DriversGrid";
import NavBar from "../components/NavBar";

export default function HomePagaeForMiniViewPort() {
  return (
    <div className="relative h-full w-full pb-10">
      <div className="fixed z-50 w-full flex justify-center pt-2">
        <NavBar />
      </div>
      <div className="w-full h-full flex justify-center items-center pt-17">
        <DriversGrid />
      </div>
    </div>
  );
}
