import { ComponentPropsWithoutRef } from "react";
import { type IconType } from "react-icons";
import cn from "../../../lib/cn";
import { ColorsIcon, type Colors } from "../../../types/colors";

type Props = {
  Icon: IconType;
  background?: Colors;
  color?: ColorsIcon;
  size?: number;
  pointer?: boolean;
  onClick?: () => void;
} & ComponentPropsWithoutRef<"div">;

const Icon = ({
  Icon,
  background = "blue",
  color = "black",
  size = 25,
  pointer = false,
  onClick,
  className,
}: Props) => {
  const classnames = cn(
    {
      "bg-light-blue": background === "blue",
      "bg-transparent": background === "transparent",
      "text-black/90": color === "black",
      "text-white": color === "white",
      "text-lighter-gray": color === "gray",
      "cursor-pointer": pointer,
    },
    "rounded-2xl p-2",
    className
  );

  return (
    <div className={classnames} onClick={onClick}>
      <Icon size={size} className="text-inherit" />
    </div>
  );
};

export default Icon;
