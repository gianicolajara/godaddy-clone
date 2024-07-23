import { ReactNode } from "react";
import cn from "../../../lib/cn";
import { Colors } from "../../../types/colors";
import { SizeCookie } from "../../../types/sizes";

type Props = {
  color?: Colors;
  children: ReactNode;
  size?: SizeCookie;
};

const Cookie = ({ color = "blue", children, size = "sm" }: Props) => {
  const classnames = cn(
    {
      "bg-blue text-white": color === "blue",
      "text-[0.6rem]": size === "sm",
      "text-[0.8rem]": size === "md",
      "text-[1rem]": size === "lg",
    },
    " w-max h-max rounded-lg p-1  whitespace-nowrap"
  );

  return (
    <div className={classnames}>
      <span className="text-inherit">{children}</span>
    </div>
  );
};

export default Cookie;
