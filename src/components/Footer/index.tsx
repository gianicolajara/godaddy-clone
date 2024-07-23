import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import Icon from "../shared/Icon";
import Link from "../shared/Link";
import Logo from "../shared/Logo";
import Para from "../shared/Para";
import Separator from "../shared/Separator";
import ItemsDesktop from "./ItemsDesktop";
import ItemsPhone from "./ItemsPhone";

const data = [
  {
    id: 1,
    title: "Acerca de GoDaddy",
    items: [
      {
        id: 1,
        label: "La empresa",
      },
      {
        id: 2,
        label: "Empleo",
      },
      {
        id: 3,
        label: "Comunícate con nosotros",
      },
      {
        id: 4,
        label: "Legal",
      },
      {
        id: 5,
        label: "Centro de confianza",
      },
    ],
  },
  {
    id: 2,
    title: "Asistencia técnica",
    items: [
      {
        id: 1,
        label: "Asistencia técnica para productos",
      },
      {
        id: 2,
        label: "Reportar abusos",
      },
      {
        id: 3,
        label: "Recursos",
      },
    ],
  },
  {
    id: 3,
    title: "Recursos",
    items: [
      {
        id: 1,
        label: "Webmail",
      },
      {
        id: 2,
        label: "WHOIS",
      },
      {
        id: 3,
        label: "Confirmación ICANN",
      },
      {
        id: 4,
        label: "Diseñadores y desarrolladores",
      },
      {
        id: 5,
        label: "Catálogo de productos",
      },
      {
        id: 6,
        label: "Generador de nombre comercial",
      },
    ],
  },
  {
    id: 4,
    title: "Programas de socios",
    items: [
      {
        id: 1,
        label: "Afiliados",
      },
      {
        id: 2,
        label: "Programa de revendedores",
      },
      {
        id: 3,
        label: "GoDaddy Pro",
      },
    ],
  },
  {
    id: 5,
    title: "Cuenta",
    items: [
      {
        id: 1,
        label: "Mis Productos",
      },
      {
        id: 2,
        label: "Renovaciones y facturación",
      },
      {
        id: 3,
        label: "Crear cuenta",
      },
    ],
  },
  {
    id: 6,
    title: "Compras",
    items: [
      {
        id: 1,
        label: "Comprar un dominio",
      },
      {
        id: 2,
        label: "Sitios web",
      },
      {
        id: 3,
        label: "WordPress",
      },
      {
        id: 4,
        label: "Hosting",
      },
      {
        id: 5,
        label: "Seguridad de páginas web",
      },
      {
        id: 6,
        label: "Correo comercial",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className=" w-full h-full p-expansion-section-y bg-black">
      <div className="wrapper-md lg:wrapper">
        <ItemsDesktop data={data} />
        <ItemsPhone data={data} />
        <div className="w-full flex flex-row justify-between mt-4 py-2">
          <Logo />
          <div className="flex flex-row gap-x-2">
            <Icon
              Icon={FaFacebook}
              background="transparent"
              color="white"
              size={15}
              className="cursor-pointer"
            />
            <Icon
              Icon={BsTwitterX}
              background="transparent"
              color="white"
              size={15}
              className="cursor-pointer"
            />
            <Icon
              Icon={FaYoutube}
              background="transparent"
              color="white"
              size={15}
              className="cursor-pointer"
            />
          </div>
        </div>
        <Separator />
        <div className="flex xl:flex-row flex-col gap-y-4 text-center xl:text-left">
          <div className="flex-1">
            <Para color="white" size="sm">
              Copyright © 1999 - 2024 GoDaddy Operating Company, LLC. Todos los
              derechos reservados. La marca GoDaddy es una marca registrada de
              GoDaddy Operating Company, LLC en los EE. UU. y otros países. El
              logo “GO” es una marca comercial registrada de GoDaddy.com, LLC en
              los EE. UU.
            </Para>
          </div>
          <div className="flex flex-row gap-x-4 flex-0 justify-center xl:justify-start">
            <Link color="white" underlineHover={true}>
              Legal
            </Link>
            <Link color="white" underlineHover={true}>
              Politica de privacidad
            </Link>
            <Link color="white" underlineHover={true}>
              Cookies
            </Link>
          </div>
        </div>
        <div className="mt-5">
          <Para color="white" size="sm" className="text-center xl:text-left">
            Esta pagina web esta hecha para fines didacticos y de aprendizaje.
          </Para>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
