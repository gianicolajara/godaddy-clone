import { littleMenuItems } from "../../config/menu.config";
import DropDownNormal from "../shared/DropDown/DropDownNormal";

const ListOfLittleMenuItems = () => {
  return <DropDownNormal list={littleMenuItems} sizeLetter="sm" />;
};

export default ListOfLittleMenuItems;
