import { ComponentPropsWithoutRef, ReactNode } from "react";
import cn from "../../../lib/cn";
import { ColorsButton } from "../../../types/colors";
import { SizeButton } from "../../../types/sizes";

type Props = {
  background?: ColorsButton;
  children?: ReactNode;
  rounded?: boolean;
  isArrow?: boolean;
  isActive?: boolean;
  size?: SizeButton;
  scaleAnimation?: boolean;
} & ComponentPropsWithoutRef<"button">;

const Button = ({
  background = "ocean",
  className,
  children,
  isActive = false,
  isArrow = false,
  scaleAnimation = false,
  size = "sm",
  rounded = true,
  ...rest
}: Props) => {
  const classesnames = cn(
    "relative px-4 py-2 w-max transition-all text-nowrap text-sm",
    {
      "rounded-md": rounded,
      "rounded-none": !rounded,
    },
    //background
    {
      "bg-transparent": background === "transparent",
      "bg-ocean hover:bg-ocean-dark text-white": background === "ocean",
      "bg-white border border-mute hover:border-light-gray":
        background === "white",
      "bg-black text-white": background === "black",
    },
    //arrow
    {
      "before:bg-[url('/godaddy-clone/media/svg/arrow-black.svg')]":
        isArrow && background === "white",
      "before:bg-[url('/godaddy-clone/media/svg/arrow-white.svg')]":
        isArrow && background === "black",
    },
    //animations
    {
      "before:content-[''] before:w-5 before:h-3 before:bg-no-repeat before:opacity-0 before:hover:opacity-100 before:z-20 before:absolute before:right-0 before:hover:right-7 before:top-0 group before:translate-y-[-50%] before:top-[50%] before:translate-x-[0px] before:transition-all  before:duration-300":
        isArrow,
      "hover:scale-105 transition-all": scaleAnimation,
    },
    //active
    {
      "!bg-black !text-white !border-black": isActive && background === "white",
    },
    //size
    {
      "px-4 py-2": size === "sm",
      "px-12 py-3": size === "lg",
      "px-8 py-2": size === "md",
    },
    className
  );

  const classesnamesSpan = cn("block text-inherit", {
    "transition-all duration-300 group-hover:-translate-x-5": isArrow,
  });

  return (
    <button className={classesnames} {...rest}>
      <span className={classesnamesSpan}>{children}</span>
    </button>
  );
};

export default Button;
