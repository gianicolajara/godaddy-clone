import { BsWindow } from "react-icons/bs";
import { CgArrowsExchange } from "react-icons/cg";
import { CiBoxList } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {
  IoLockOpenOutline,
  IoPersonCircleOutline,
  IoServerOutline,
} from "react-icons/io5";
import { MdOutlineArrowRightAlt, MdOutlineTouchApp } from "react-icons/md";

import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";
import { GoMegaphone, GoShieldCheck } from "react-icons/go";
import { GrDocumentLocked } from "react-icons/gr";
import {
  RiAuctionLine,
  RiHandHeartLine,
  RiMoneyDollarBoxLine,
} from "react-icons/ri";
import { TbServer, TbWorld } from "react-icons/tb";
import { IMenuList } from "../types/menu";

export const menuItems: IMenuList[] = [
  {
    id: 1,
    label: "Dominios",
    open: false,
    img: "/godaddy-clone/media/images/img-meganav-domains-2.webp",
    caption: "Compra el dominio que deseas",
    items: [
      {
        id: 1,
        title: "Busca un dominio",
        subItems: [
          {
            id: 1,
            label: "Buscar un dominio",
            icon: HiMagnifyingGlass,
          },
          {
            id: 2,
            label: "Transferir nombres de dominio",
            icon: CgArrowsExchange,
          },
          {
            id: 3,
            label: "Explorar Opciones de nombres de dominio",
            icon: CiBoxList,
          },
        ],
      },
      {
        id: 2,
        title: "Subastas por dominios",
        subItems: [
          {
            id: 1,
            label: "Subastas por nombres de dominios",
            icon: RiAuctionLine,
          },
          {
            id: 2,
            label: "Calcula el valor del nombre de dominio",
            icon: RiMoneyDollarBoxLine,
          },
          {
            id: 3,
            label: "Invertir en nombres de dominios",
            icon: RiHandHeartLine,
          },
        ],
      },
      {
        id: 3,
        title: "Herramientas y servicios de dominios",
        subItems: [
          {
            id: 1,
            label: "Generar nombres de dominio y de negocio",
            icon: MdOutlineTouchApp,
          },
          {
            id: 2,
            label: "Busca al propietario de un dominio (WHOIS)",
            icon: TbWorld,
          },
          {
            id: 3,
            label: "Servicio de gestor de dominios",
            icon: IoPersonCircleOutline,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Sitios web y hosting",
    open: false,
    caption: "Vende en línea con hosting de comercio electrónico de WordPress",
    img: "/godaddy-clone/media/images/img-meganav-ecommerce-hosting.webp",
    items: [
      {
        id: 1,
        title: "Sitios web",
        subItems: [
          {
            id: 1,
            label: "Creador de páginas web",
            icon: BsWindow,
            isFreeTry: true,
          },
          {
            id: 2,
            label: "Todas las opciones de sitio web",
            icon: MdOutlineArrowRightAlt,
            transparent: true,
          },
        ],
      },
      {
        id: 2,
        title: "Hosting",
        subItems: [
          {
            id: 1,
            label: "Web Hosting",
            icon: TbServer,
          },
          {
            id: 2,
            label: "Hosting de WordPress",
            icon: TbServer,
          },

          {
            id: 3,
            label: "Hosting VPS",
            icon: IoServerOutline,
          },
          {
            id: 4,
            label: "Todas las opciones de hosting",
            icon: MdOutlineArrowRightAlt,
            transparent: true,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Correo electrónico",
  },
  {
    id: 4,
    label: "Seguridad",
    open: false,
    img: "/godaddy-clone/media/images/img-meganav-web-security.webp",
    caption: "Todas las opciones de seguridad web",
    items: [
      {
        id: 1,
        title: "Certificados SSL",
        subItems: [
          {
            id: 1,
            label: "Certificados SSL",
            icon: GrDocumentLocked,
          },
          {
            id: 2,
            label: "Certificado SSL administrado",
            icon: IoLockOpenOutline,
          },
        ],
      },
      {
        id: 2,
        title: "Seguridad de páginas web",
        subItems: [
          {
            id: 1,
            label: "Seguridad del sitio web completa",
            icon: GoShieldCheck,
          },
          {
            id: 2,
            label: "Todas las opciones de seguridad web",
            transparent: true,
            icon: MdOutlineArrowRightAlt,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: "Marketing",
    open: false,
    img: "/godaddy-clone/media/images/Image-Grow-Desktop.webp",
    caption: "Obtén información para que tu empresa crezca",
    items: [
      {
        id: 1,
        title: "Herramientas de comunicación",
        subItems: [
          {
            id: 1,
            label: "Suite de marketing digital",
            icon: GoMegaphone,
            isFreeTry: true,
          },
        ],
      },
      {
        id: 2,
        title: "Herramientas de creación de contenido",
        subItems: [
          {
            id: 1,
            label: "Creador de contenido y fotos",
            icon: CiImageOn,
          },
          {
            id: 2,
            label: "Creador de logos gratuito",
            icon: AiOutlineThunderbolt,
          },
        ],
      },
    ],
  },
];
