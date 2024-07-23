import { useMediaQuery } from "@uidotdev/usehooks";
import { BsArrowRight } from "react-icons/bs";
import Button from "../shared/Button";
import Icon from "../shared/Icon";
import Link from "../shared/Link";
import Para from "../shared/Para";
import Title from "../shared/Title";

const Presentation = () => {
  const isPhoneScreen = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width: 1280px)"
  );

  return (
    <section className="w-full grid grid-rows-[550px,_1fr] grid-cols-1 gap-betweeen-grids-sm xl:gap-betweeen-grids-md xl:grid-cols-4 xl:grid-rows-1">
      <div className="w-full h-full bg-[url('/godaddy-clone/media/images/row-mrq-hp-portrait.webp')] xl:bg-[url('/godaddy-clone/media/images/row-mrq-hp-landscape.webp')] bg-no-repeat rounded-2xl bg-right-bottom xl:bg-center bg-cover p-5 xl:p-10 xl:col-span-3 xl:grid xl:grid-cols-[40%,_auto] xl:grid-rows-1">
        <div className="flex xl:justify-start xl:items-start justify-start items-center flex-col gap-y-2">
          <Para>Páginas Web + Marketing</Para>
          <Title>Crea tu sitio web.</Title>
          <Button
            background="black"
            isArrow={true}
            size="lg"
            scaleAnimation={true}
          >
            Comienza Gratis
          </Button>
          <small>
            Sin cargo, sin obligación, sin tener que cancelar nada.**
          </small>
        </div>
      </div>
      <div className="w-full h-full bg-black p-4 rounded-2xl flex gap-x-2 xl:justify-center xl:items-center">
        <div className="flex flex-col gap-y-2 flex-1 xl:justify-center xl:items-center xl:text-center">
          <Para color="white">Nombres de dominios</Para>
          <Title color="white" size="md">
            Obtén un .com por $0,01*/1er año
          </Title>
          {!isPhoneScreen && (
            <Para color="white">
              Compra de 3 años obligatoria. Año(s) adicional(es) ‪$21,99*‬
            </Para>
          )}
          {!isPhoneScreen && (
            <Button
              isArrow={true}
              background="white"
              size="lg"
              scaleAnimation={true}
            >
              Encuentra tu dominio
            </Button>
          )}
          {!isPhoneScreen && (
            <Link
              color="white"
              underlineHover={true}
              className="hover:scale-105 transition-all"
            >
              Transfiere tu dominio
            </Link>
          )}
          <small className="text-white">
            Los dominios incluyen protección de privacidad gratis para siempre+
          </small>
        </div>
        {isPhoneScreen && (
          <div className="flex justify-center items-center flex-0">
            <Icon
              Icon={BsArrowRight}
              background="transparent"
              color="white"
              pointer={true}
              className="p-5"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Presentation;
