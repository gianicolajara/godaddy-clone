import { ReactNode } from "react";
import { BsArrowRight } from "react-icons/bs";
import Icon from "../Icon";
import Title from "../Title";

type Props = {
  children: ReactNode;
};

const ContentCardWithoutImage = ({ children }: Props) => {
  return (
    <div className="w-full h-full flex p-4">
      <div className="w-full h-full relative">
        <Title
          family="gdsherpa"
          size="md"
          className="m-0 text-left absolute bottom-0 left-0"
        >
          {children}
        </Title>
        <Icon
          Icon={BsArrowRight}
          background="transparent"
          color="black"
          className="top-0 right-0 absolute p-0"
        />
      </div>
    </div>
  );
};

export default ContentCardWithoutImage;
