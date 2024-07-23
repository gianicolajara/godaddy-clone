import { motion } from "framer-motion";
import { HTMLAttributes, ReactNode } from "react";
import { FaChevronDown } from "react-icons/fa6";
import cn from "../../../lib/cn";
import { type LetterSize } from "../../../types/letters";
import { type IMenuItems } from "../../../types/menu";

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

const DropDownListMenuFloating = ({
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
  const classnames = cn(
    {
      "text-md font-semibold ": sizeLetter === "large",
      "text-base font-semibold ": sizeLetter === "md",
      "text-xs font-light": sizeLetter === "sm",
      "bg-gray text-white hover:bg-light-gray":
        isOpen === false || (!menuItems && !isCustom),
      "bg-white text-black":
        isOpen === true &&
        ((menuItems?.length && menuItems.length > 0) || isCustom),
    },
    "  transition-all py-2 px-3 rounded-lg flex gap-x-1 items-center justify-center",
    className
  );

  return (
    <button
      className={classnames}
      {...rest}
      onClick={() => {
        if (menuItems) {
          handleChange?.(idNumber);
        } else {
          handleChange?.(-1);
        }
      }}
    >
      <span>{children}</span>
      {(menuItems || isCustom) && (
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
    </button>
  );
};

export default DropDownListMenuFloating;
