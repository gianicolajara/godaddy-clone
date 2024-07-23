import Card from "../shared/Card";

const Security = () => {
  return (
    <section className="grid grid-cols-1 h-[30rem] xl:h-[35rem] grid-rows-[1fr,_1fr] w-full gap-y-2 xl:grid-cols-2 xl:grid-rows-[35rem] xl:gap-x-6">
      <Card
        img="/godaddy-clone/media/images/intl-img-hp-recore-wp-large-portrait.webp"
        desktopImg="/godaddy-clone/media/images/intl-img-hp-recore-wp-large-landscape.webp"
        hoverShadow={true}
        descriptionText="No te preocupes y deja que la IA cree rápidamente un sitio web completamente administrado y siempre actualizado."
        buttonText="Explora los planes de WordPress"
      >
        WordPress $10,99/mes
      </Card>
      <Card
        img="/godaddy-clone/media/images/img-bl-hp-recore-ssl-large-portrait.webp"
        desktopImg="/godaddy-clone/media/images/img-bl-hp-recore-ssl-large-landscape.webp"
        hoverShadow={true}
        descriptionText="Ayuda a mantener la seguridad de los datos confidenciales en tu sitio e impulsa tu posicionamiento de búsqueda con un certificado SSL."
        buttonText="Protege tus datos"
        recomended={true}
      >
        Certificados SSL $69,99/año
      </Card>
    </section>
  );
};

export default Security;
