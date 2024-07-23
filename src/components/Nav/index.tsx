import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import IconButton from "../shared/Button/IconButton";
import Logo from "../shared/Logo";
import ListOfIconsItems from "./ListOfIconsItems";
import ListOfLittleMenuItems from "./ListOfLittleMenuItems";
import ListOfMenuItems from "./ListOfMenuItems";

const Nav = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleOpen = () => setisOpen(true);

  return (
    <nav className="w-full h-16 bg-gray relative z-10">
      <div className="wrapper-sm lg:wrapper w-full h-full flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <IconButton
            Icon={IoMdMenu}
            size={40}
            className="block lg:hidden"
            onClick={handleOpen}
          />
          <Logo />
          <ListOfMenuItems isOpen={isOpen} setIsOpen={setisOpen} />
        </div>
        <div className="flex gap-x-3 items-center">
          <ListOfLittleMenuItems />
          <ListOfIconsItems />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
