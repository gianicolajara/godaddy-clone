import { ComponentPropsWithoutRef, ReactNode } from "react";
import cn from "../../../lib/cn";
import { ColorsLink } from "../../../types/colors";

type Props = {
  children: ReactNode;
  underline?: boolean;
  underlineHover?: boolean;
  color?: ColorsLink;
} & ComponentPropsWithoutRef<"a">;

const Link = ({
  children,
  underline = false,
  color = "black",
  underlineHover = false,
  className,
}: Props) => {
  const classname = cn(
    {
      "underline hover:no-underline": underline,
      "hover:underline": underlineHover,
      "text-blue hover:text-blue": color === "blue",
      "text-black hover:text-blue": color === "black",
      "text-ocean hover:text-ocean": color === "ocean",
      "text-white hover:text-white": color === "white",
      "text-lighter-gray": color === "gray",
    },
    "transition-colors cursor-pointer font-semibold text-[.9rem]",
    className
  );

  return <a className={classname}>{children}</a>;
};

export default Link;
