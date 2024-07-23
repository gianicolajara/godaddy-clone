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

const TitleCard = ({
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
      "title-sm-card xl:title-normal-card": size === "sm",
      "title-sm-card xl:title-md-card": size === "md",
      "title-md-card xl:title-lg-card": size === "large",
      "": size === "personalized",
      "font-gdsherpa": family === "gdsherpa",
      "font-gd-sage": family === "gd-sage",
    },
    className
  );

  return (
    <h2 className={classnames} {...rest}>
      {children}
    </h2>
  );
};

export default TitleCard;
