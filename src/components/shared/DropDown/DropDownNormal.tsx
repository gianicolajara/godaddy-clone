import { LetterSize } from "../../../types/letters";
import { IMenuList } from "../../../types/menu";
import DropDownListMenuNormal from "./DropDownListMenuNormal";

type Props = {
  list: IMenuList[];
  sizeLetter?: LetterSize;
};

const DropDownNormal = ({ list, sizeLetter = "md" }: Props) => {
  return (
    <div className="w-full lg:flex hidden gap-x-2">
      {list.map((item) => (
        <DropDownListMenuNormal
          key={item.id}
          idNumber={item.id}
          className="hidden xl:flex"
          sizeLetter={sizeLetter}
          childrenContent={item.custom && <item.custom />}
        >
          {item.label}
        </DropDownListMenuNormal>
      ))}
    </div>
  );
};

export default DropDownNormal;
