import NavButton from "./NavButton";

export default function NavBar() {
  return (
    <div className="w-74 xsm:w-96 h-10 rounded-2xl bg-[#1B1B1B]">
      <div className="flex justify-around items-center h-10 w-full px-2 xsm:px-6">
        <NavButton name={"home"} />
        <NavButton name={"drivers"} />
        <NavButton name={"standings"} />
      </div>
    </div>
  );
}

