import { IconType } from "react-icons";
import Link from ".";
import Icon from "../Icon/index";

type Props = {
  title: string;
  icon: IconType;
};

const LinkIcon = ({ icon, title }: Props) => {
  return (
    <div className="w-full flex gap-x-3 items-center rounded-lg transition-all p-1">
      <Icon Icon={icon} />
      <Link>{title}</Link>
    </div>
  );
};

export default LinkIcon;
