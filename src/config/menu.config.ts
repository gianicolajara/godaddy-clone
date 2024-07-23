import { BsPerson } from "react-icons/bs";
import { CiCircleQuestion } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import LoginCustomMenu from "../components/shared/customMenu/Login.custommenu";
import { IMenuList } from "../types/menu";

export const iconItems = [
  {
    id: 1,
    icon: CiCircleQuestion,
  },
  {
    id: 2,
    icon: BsPerson,
  },
  {
    id: 3,
    icon: IoCartOutline,
    specialCss: "block",
  },
];

export const littleMenuItems: IMenuList[] = [
  {
    id: 1,
    label: "Contáctanos",
    open: false,
  },
  {
    id: 2,
    label: "Ayuda",
    open: false,
  },
  {
    id: 3,
    label: "Iniciar sesión",
    open: false,
    custom: LoginCustomMenu,
  },
];
