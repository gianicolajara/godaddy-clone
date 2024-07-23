import { useMediaQuery } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import Button from "../shared/Button";
import Title from "../shared/Title";
import MiniCard from "./MiniCard";
import SwiperSlideCard from "./SwiperSlideCard";

const data = [
  {
    id: 1,
    title:
      "Obtén acceso en línea rápidamente. No se necesitan conocimientos de diseño.",
    description:
      "Crea tu sitio en minutos. Elige entre cientos de hermosas plantillas optimizadas para dispositivos móviles con nuestro Creador de sitios web, muchas de ellas con funciones de comercio electrónico.",
    image: "intl-img-bl-prod-feature-get-online-fast-desktop.webp",
  },
  {
    id: 2,
    title:
      "Genera confianza con un correo electrónico que coincida con tu dominio.",
    description:
      "Ayuda a aumentar tu credibilidad ante los clientes con un correo profesional gratis idéntico a tu nombre de dominio.",
    image: "intl-img-bl-prod-feature-build-trust-desktop.webp",
  },
  {
    id: 3,
    title: "Interactúa con herramientas de marketing.",
    description:
      "Ayuda a tu audiencia a encontrarte con la optimización SEO integrada y promueve tu negocio con herramientas de redes sociales e email marketing.",
    image: "intl-img-bl-prod-feature-engage-with-marketing-desktop.webp",
  },
];

const MultiImage = () => {
  const [itemSelected, setItemSelected] = useState(1);

  const isPhoneScreen = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width: 1280px)"
  );

  return (
    <section className="expansion-section-y wrapper-sm xl:wrapper-xl flex flex-col gap-betweeen-grids">
      <Title family="gdsherpa" size="large" className="text-center">
        Haz crecer tu marca con Páginas Web + Marketing.
      </Title>
      {isPhoneScreen ? (
        <SwiperSlideCard data={data} />
      ) : (
        <>
          <motion.picture
            key={itemSelected}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className=" w-full h-[450px] rounded-2xl overflow-hidden"
          >
            <img
              loading="lazy"
              src={"/media/images/" + data[itemSelected - 1]?.image || ""}
              className="w-full h-full object-cover"
            />
          </motion.picture>
          <div className="grid grid-rows-1 grid-cols-3 gap-x-7">
            {data.map((item) => (
              <MiniCard
                description={item.description}
                key={item.id}
                title={item.title}
                onHover={() => setItemSelected(item.id)}
              />
            ))}
          </div>
        </>
      )}

      <Button
        isArrow={true}
        background="black"
        size="lg"
        className="self-center"
      >
        Comienza gratis
      </Button>
    </section>
  );
};

export default MultiImage;
