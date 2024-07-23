import Card from "../shared/Card";

const Recomended = () => {
  return (
    <section className="grid grid-cols-2 h-[30rem] xl:h-[35rem] grid-rows-[1.5fr,_1fr] w-full gap-2 xl:grid-cols-2 xl:grid-rows-[17.5rem,_17.5rem] xl:gap-6">
      <Card
        img="/godaddy-clone/media/images/intl-img-hp-recore-prof-email-large-portrait.webp"
        desktopImg="/godaddy-clone/media/images/intl-img-hp-recore-prof-email-large-landscape.webp"
        hoverShadow={true}
        descriptionText="Consigue la confianza de los clientes con una dirección de correo electrónico que coincida con tu dominio."
        buttonText="Comienza ahora"
        className="col-span-2 xl:col-span-1 xl:row-span-2"
      >
        Correo profesional $1,99 por usuario/mes
      </Card>
      <Card
        background="blue-cake"
        desktopImg="/godaddy-clone/media/images/intl-img-hp-recore-wsb-small.webp"
        hoverShadow={true}
        descriptionText="Comienza gratis y diseña en poco tiempo un sitio bonito y apto para móviles."
        buttonText="Crea tu sitio"
        sizeCard="little"
      >
        Sitios web $10,99/mes
      </Card>
      <Card
        background="blue-cake"
        hoverShadow={true}
        desktopImg="/godaddy-clone/media/images/intl-img-hp-recore-web-hosting-small.webp"
        descriptionText="Obtén tiempos de carga rápidos y 99,9% de tiempo de actividad garantizado.***"
        buttonText="Ver planes y precios"
        sizeCard="little"
      >
        Web Hosting $6,99/mes
      </Card>
    </section>
  );
};

export default Recomended;
