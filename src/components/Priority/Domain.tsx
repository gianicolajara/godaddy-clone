import Card from "../shared/Card";

const Domain = () => {
  return (
    <section className="grid grid-cols-1 h-[30rem] xl:h-[35rem] grid-rows-2 w-full gap-y-2 xl:grid-cols-2 xl:grid-rows-[35rem] xl:gap-x-6">
      <Card
        img="/media/images/intl-img-hp-recore-domains-large-portrait.webp"
        desktopImg="/media/images/intl-img-hp-recore-domains-large-landscape.webp"
        descriptionText="Comienza con el dominio perfecto, que cuenta con una protección de dominio gratuita para siempre."
        hoverShadow={true}
        buttonText="Buscar dominios"
      >
        Dominios
      </Card>
      <Card
        img="/media/images/img-hp-recore-co-large-portrait.webp"
        desktopImg="/media/images/img-hp-recore-co-large-landscape.webp"
        hoverShadow={true}
        descriptionText="Garantiza que se destaquen tu empresa y tu sitio web con un dominio .co."
        buttonText="Comienza ahora"
      >
        .co por $0,01/primer año
      </Card>
    </section>
  );
};

export default Domain;
