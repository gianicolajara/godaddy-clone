import { useMediaQuery } from "@uidotdev/usehooks";
import { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";
import cn from "../../../lib/cn";
import { ColorsCard } from "../../../types/colors";
import { SizeCard } from "../../../types/sizes";
import ContentCard from "./ContentCard";
import ContentCardWithoutImage from "./ContentCardWithoutImage";

type Props = {
  img?: string;
  hoverShadow?: boolean;
  children: ReactNode;
  desktopImg?: string;
  background?: ColorsCard;
  descriptionText?: string;
  buttonText?: string;
  sizeCard?: SizeCard;
  recomended?: boolean;
} & ComponentPropsWithoutRef<"article">;

const Card = ({
  img = "",
  desktopImg = "",
  hoverShadow = false,
  background,
  className,
  children,
  descriptionText,
  buttonText,
  sizeCard = "big",
  recomended = false,
}: Props) => {
  const isPhoneScreen = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width: 1280px)"
  );

  const classnames = cn(
    "p-2 xl:p-4 h-full w-full h-full rounded-lg",
    {
      "bg-[image:var(--image-url)] xl:bg-[image:var(--image-url-desktop)] bg-center bg-no-repeat bg-cover grid g grid-rows-1":
        (img && isPhoneScreen) || (desktopImg && !isPhoneScreen),

      "grid-cols-[45%,_55%] xl:grid-cols-[75%,_25%]":
        (img || desktopImg) && sizeCard === "big",
      "grid-cols-[45%,_55%] xl:grid-cols-[50%,_50%]":
        (img || desktopImg) && sizeCard === "little",
      "bg-white-cake": background === "white-cake",
      "bg-green-cake": background === "green-cake",
      "bg-blue-cake": background === "blue-cake",
      "hover:shadow-lg transition-all cursor-pointer hover:scale-[1.01]":
        hoverShadow,
    },
    className
  );

  return (
    <article
      style={
        {
          "--image-url": `url(${img})`,
          "--image-url-desktop": `url(${desktopImg})`,
        } as CSSProperties
      }
      className={classnames}
    >
      {isPhoneScreen && img && (
        <ContentCard
          sizeCard={sizeCard}
          children={children}
          buttonText={buttonText}
          descriptionText={descriptionText}
          recomended={recomended}
        />
      )}

      {isPhoneScreen && !img && <ContentCardWithoutImage children={children} />}

      {!isPhoneScreen && desktopImg && (
        <ContentCard
          sizeCard={sizeCard}
          children={children}
          buttonText={buttonText}
          descriptionText={descriptionText}
          recomended={recomended}
        />
      )}

      {!isPhoneScreen && !desktopImg && (
        <ContentCardWithoutImage children={children} />
      )}
    </article>
  );
};

export default Card;
