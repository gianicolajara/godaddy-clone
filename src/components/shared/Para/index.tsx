import { ReactNode } from "react";
import cn from "../../../lib/cn";
import { ColorsPara } from "../../../types/colors";
import { LetterSize } from "../../../types/letters";

type Props = {
  children: ReactNode;
  color?: ColorsPara;
  size?: LetterSize;
} & React.ComponentPropsWithoutRef<"p">;

const Para = ({
  children,
  color = "black",
  size = "md",
  className,
  ...rest
}: Props) => {
  const classnames = cn(
    {
      "text-blue": color === "blue",
      "text-black": color === "black",
      "text-ocean": color === "ocean",
      "text-white": color === "white",
      "text-base": size === "md",
      "text-lg": size === "large",
      "text-sm": size === "sm",
    },
    className
  );

  return (
    <p className={classnames} {...rest}>
      {children}
    </p>
  );
};

export default Para;
