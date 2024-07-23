import cn from "../../../lib/cn";
import { ColorsSeperator } from "../../../types/colors";

type Props = {
  color?: ColorsSeperator;
};

const Separator = ({ color = "gray" }: Props) => {
  const classnames = cn(
    {
      "border-mute": color === "gray",
      "border-black": color === "black",
    },
    "border-1 my-2"
  );

  return <hr className={classnames} />;
};

export default Separator;
