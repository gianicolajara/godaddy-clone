import { menuItems } from "../../config/megamenu.config";
import MegaMenu from "../shared/DropDown/MegaMenu/MegaMenu";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ListOfMenuItems = ({ isOpen, setIsOpen }: Props) => {
  return <MegaMenu list={menuItems} isOpen={isOpen} setIsOpen={setIsOpen} />;
};

export default ListOfMenuItems;
