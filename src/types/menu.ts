import { IconType } from "react-icons";

interface IMenuSubItems {
  id: number;
  label: string;
  icon: IconType;
  transparent?: boolean;
  isFreeTry?: boolean;
}

export interface IMenuItems {
  id: number;
  title: string;
  subItems: IMenuSubItems[];
}

//TODO add href method
export interface IMenuList {
  id: number;
  label: string;
  custom?: React.ComponentType;
  open?: boolean;
  img?: string;
  caption?: string;
  items?: IMenuItems[];
}
