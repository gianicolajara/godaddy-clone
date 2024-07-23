import { iconItems } from "../../config/menu.config";
import IconButton from "../shared/Button/IconButton";

const ListOfIconsItems = () => {
  return (
    <>
      {iconItems.map((item) => (
        <IconButton
          key={item.id}
          Icon={item.icon}
          size={20}
          className={item.specialCss ? item.specialCss : "block lg:hidden"}
        />
      ))}
    </>
  );
};

export default ListOfIconsItems;
