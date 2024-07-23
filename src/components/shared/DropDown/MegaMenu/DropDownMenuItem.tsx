import { useMediaQuery } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { HTMLAttributes, ReactNode } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";
import cn from "../../../../lib/cn";
import { type LetterSize } from "../../../../types/letters";
import { type IMenuItems } from "../../../../types/menu";

type Props = {
  children: ReactNode;
  sizeLetter?: LetterSize;
  handleChange?: (id: number) => void;
  idNumber: number;
  caption?: string;
  img?: string;
  menuItems?: IMenuItems[];
  isOpen: boolean;
  isCustom?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

const DropDownMenuItem = ({
  children,
  sizeLetter = "md",
  className,
  handleChange,
  idNumber,
  menuItems,
  isOpen,
  isCustom = false,
  ...rest
}: Props) => {
  const isPhoneScreen = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width: 1280px)"
  );

  const classnames = cn(
    {
      "text-md font-semibold tracking-wide": sizeLetter === "large",
      "text-base font-semibold  tracking-wide": sizeLetter === "md",
      "text-xs font-light tracking-wide": sizeLetter === "sm",
      "xl:bg-gray xl:text-white xl:hover:bg-light-gray":
        isOpen === false || (!menuItems && !isCustom),
      "bg-white text-black":
        isOpen === true &&
        ((menuItems?.length && menuItems.length > 0) || isCustom),
      "py-2 px-3 items-center justify-center": !isPhoneScreen,
      "text-lighter-gray flex flex-row self-start justify-between w-full group font-light":
        isPhoneScreen,
    },
    "transition-all rounded-lg flex gap-x-1",
    className
  );

  return (
    <button
      className={classnames}
      {...rest}
      onClick={() => {
        if (menuItems?.length && menuItems.length > 0) {
          handleChange?.(idNumber);
        } else {
          handleChange?.(-1);
        }
      }}
    >
      <span>{children}</span>
      {(menuItems || isCustom) && !isPhoneScreen && (
        <motion.div
          initial={{
            rotate: "0deg",
          }}
          animate={{
            rotate: isOpen ? "180deg" : "0deg",
          }}
        >
          <FaChevronDown color={isOpen ? "black" : "white"} size={10} />
        </motion.div>
      )}
      {menuItems && isPhoneScreen && (
        <div className="transition-all pr-2 group-hover:pr-0 ">
          <MdArrowRightAlt color="black" size={30} />
        </div>
      )}
    </button>
  );
};

export default DropDownMenuItem;
