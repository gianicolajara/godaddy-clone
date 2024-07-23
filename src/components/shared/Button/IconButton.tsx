import { IconType } from "react-icons";
import cn from "../../../lib/cn";
import { ColorsButtonIcon } from "../../../types/colors";

type Props = {
  Icon: IconType;
  size?: number;
  color?: string;
  background?: ColorsButtonIcon;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const IconButton = ({
  Icon,
  size = 25,
  className,
  color = "white",
  background = "transparent",
  ...rest
}: Props) => {
  const classesnames = cn(
    "w-max h-max transition-all",
    {
      "bg-transparent": background === "transparent",
      "bg-ocean hover:bg-ocean-dark": background === "ocean",
      "bg-white": background === "white",
      "bg-black": background === "black",
    },
    className
  );

  return (
    <button className={classesnames} {...rest}>
      <Icon size={size} color={color} />
    </button>
  );
};

export default IconButton;
