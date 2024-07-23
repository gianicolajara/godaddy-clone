import {
  arrow,
  FloatingArrow,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from "@floating-ui/react";
import { motion } from "framer-motion";
import { HTMLAttributes, ReactNode, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import cn from "../../../lib/cn";
import { type LetterSize } from "../../../types/letters";

const ARROW_HEIGHT = 7;
const GAP = 2;

type Props = {
  children: ReactNode;
  sizeLetter?: LetterSize;
  handleChange?: (id: number) => void;
  idNumber: number;
  childrenContent?: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

const DropDownListMenuNormal = ({
  children,
  sizeLetter = "md",
  className,
  childrenContent,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const arrowRef = useRef(null);

  const classnames = cn(
    {
      "text-md font-semibold ": sizeLetter === "large",
      "text-base font-semibold ": sizeLetter === "md",
      "text-xs font-light": sizeLetter === "sm",
      "bg-gray text-white hover:bg-light-gray":
        isOpen === false || !childrenContent,
      "bg-white text-black": isOpen === true && childrenContent,
    },
    "  transition-all py-2 px-3 rounded-lg flex gap-x-1 items-center justify-center",
    className
  );

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "bottom-end",
    middleware: [
      offset(ARROW_HEIGHT + GAP),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  return (
    <>
      <button
        className={classnames}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <span>{children}</span>
        {childrenContent && (
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
      {isOpen && childrenContent && (
        <div
          className="h-max bg-white shadow-lg whitespace-normal"
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          {childrenContent}
          <FloatingArrow
            ref={arrowRef}
            context={context}
            fill="white"
            width={20}
            height={10}
          />
        </div>
      )}
    </>
  );
};

export default DropDownListMenuNormal;
