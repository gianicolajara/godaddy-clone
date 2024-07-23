import { ReactNode } from "react";
import { BsArrowRight } from "react-icons/bs";
import { SizeCard } from "../../../types/sizes";
import Button from "../Button";
import Cookie from "../Cookie";
import Icon from "../Icon";
import Para from "../Para";
import TitleCard from "./TitleCard";

type Props = {
  children: ReactNode;
  descriptionText?: string;
  buttonText?: string;
  sizeCard: SizeCard;
  recomended?: boolean;
};

const ContentCard = ({
  children,
  descriptionText,
  buttonText,
  sizeCard,
  recomended = false,
}: Props) => {
  return (
    <div className="w-full h-full flex">
      <div className="flex flex-col self-end p-4 xl:gap-y-2">
        {recomended && <Cookie size="sm">RECOMENDADO</Cookie>}
        <TitleCard
          family="gdsherpa"
          size={sizeCard === "big" ? "md" : "sm"}
          className="m-0 text-left"
        >
          {children}
        </TitleCard>
        {descriptionText && (
          <Para className="hidden xl:flex text-left" size="sm">
            {descriptionText}
          </Para>
        )}
        {buttonText && (
          <Button
            className="hidden xl:flex"
            background="black"
            size="lg"
            scaleAnimation={true}
          >
            {buttonText}
          </Button>
        )}
        <Icon
          Icon={BsArrowRight}
          background="transparent"
          color="black"
          className="p-0 flex xl:hidden"
        />
      </div>
    </div>
  );
};

export default ContentCard;
