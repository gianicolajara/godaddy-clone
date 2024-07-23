import { ComponentPropsWithoutRef } from "react";
import cn from "../../lib/cn";
import Para from "../shared/Para";
import Title from "../shared/Title";
type Props = {
  title: string;
  description: string;
  onHover?: () => void;
} & ComponentPropsWithoutRef<"div">;

const MiniCard = ({ description, title, onHover, className }: Props) => {
  const classnames = cn(
    "p-5 cursor-pointer hover:bg-mute/50 transition-all rounded-none xl:rounded-xl gap-y-4 flex flex-col",
    className
  );

  return (
    <div className={classnames} onMouseEnter={onHover}>
      <Title family="gdsherpa" size="sm">
        {title}
      </Title>
      <Para size="sm" className="leading-7">
        {description}
      </Para>
    </div>
  );
};

export default MiniCard;
