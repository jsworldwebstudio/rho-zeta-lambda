import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 bg-[#E3B53B]">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image
              src="http://pzl1906.org/wp-content/uploads/2018/11/Logo-Empty-Small.png"
              alt="PZL Logo"
              height={60}
              width={60}
            />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Programs</a>
              <a href="#">Youth Program</a>
              <a href="#">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
