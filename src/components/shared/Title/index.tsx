import { ComponentPropsWithoutRef } from "react";
import cn from "../../../lib/cn";
import { ColorsPara, FamilyLetter } from "../../../types/colors";
import { LetterSize } from "../../../types/letters";

type Props = {
  children: React.ReactNode;
  color?: ColorsPara;
  size?: LetterSize;
  family?: FamilyLetter;
} & ComponentPropsWithoutRef<"h2">;

const Title = ({
  children,
  className,
  color = "black",
  size = "large",
  family = "gd-sage",
  ...rest
}: Props) => {
  const classnames = cn(
    {
      "text-blue": color === "blue",
      "text-black": color === "black",
      "text-ocean": color === "ocean",
      "text-white": color === "white",
      "title-sm xl:title-normal": size === "sm",
      "title-sm xl:title-md": size === "md",
      "title-md xl:title-lg": size === "large",
      "": size === "personalized",
      "font-gdsherpa": family === "gdsherpa",
      "font-gd-sage": family === "gd-sage",
    },
    className
  );

  if (size === "large") {
    return (
      <h2 className={classnames} {...rest}>
        {children}
      </h2>
    );
  }

  if (size === "md") {
    return (
      <h3 className={classnames} {...rest}>
        {children}
      </h3>
    );
  }

  if (size === "sm" || size === "personalized") {
    return (
      <h4 className={classnames} {...rest}>
        {children}
      </h4>
    );
  }
};

export default Title;
