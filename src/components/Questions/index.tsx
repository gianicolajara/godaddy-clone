import { IoIosArrowUp } from "react-icons/io";
import Icon from "../shared/Icon";
import Link from "../shared/Link";
import Para from "../shared/Para";
import Separator from "../shared/Separator";
import Title from "../shared/Title";

const data = [
  {
    id: 1,
    title:
      "¿Cómo ayuda GoDaddy a los propietarios de pequeñas empresas para que triunfen?",
    content: (
      <Para size="sm">
        En GoDaddy te ofrecemos más que una simple plataforma para crear tu
        página web; te damos todo lo que necesitas para crear una presencia en
        línea efectiva e inolvidable. ¿Ya tienes una página? Ofrecemos planes de
        hosting que la mantendrán rápida y segura en línea. Nuestro correo
        profesional te ayuda a reflejar una imagen profesional y nuestras
        herramientas de marketing online empoderan a los emprendedores para
        estar en línea con una página web optimizada para SEO. GoDaddy es un
        proveedor de soluciones ‘todo en uno’ para darle vida a tu idea en
        internet y cuenta con el respaldo de expertos que ofrecen asistencia
        personalizada.
      </Para>
    ),
  },
  {
    id: 2,
    title: "¿Por qué necesito un sitio web para mi negocio?",
    content: (
      <>
        <Para size="sm">
          Incluso las empresas pequeñas que solo brindan servicios a nivel local
          necesitan una página. Esto es porque internet es el primer lugar al
          que acuden las personas cuando buscan un producto o servicio. Una
          página web ayuda a todas las empresas a:
        </Para>
        <ul className="list-disc ml-10 flex flex-col gap-y-5">
          <li>Promocionar y vender productos y servicios</li>
          <li>Conectar con clientes nuevos (y conservar los que ya tienen)</li>
          <li>Construir credibilidad</li>
          <li>Competir con empresas más grandes</li>
          <li>Controlar la marca y mantener el marketing al día</li>
        </ul>
        Lo mejor de todo es que una página web es más sencilla y accesible de lo
        que imaginas. GoDaddy te ofrece una selección completa de herramientas
        online para crear páginas web, junto con las opciones de hosting, correo
        electrónico y marketing para garantizar tu crecimiento comercial en la
        web.
      </>
    ),
  },
  {
    id: 3,
    title: "¿Por qué necesito un correo profesional?",
    content: (
      <>
        <Para size="sm">
          Hay muchas razones para cambiar tu correo electrónico gratis a un
          correo con dominio propio, pero estas son las 3 principales:
        </Para>
        <ol className="list-decimal ml-10 flex flex-col gap-y-5">
          <li>
            Es más probable que los clientes confíen en una dirección
            profesional como lily@lilysbikes.com que
            lilysbikestexas84@hotmail.com.
          </li>
          <li>
            El <Link underline={true}>Correo personalizado</Link> te brinda
            seguridad de primer nivel, gracias a filtros que lideran la
            industria para evitar virus y correos no deseados.
          </li>
          <li>
            Las direcciones de correo personalizadas promocionan tu negocio de
            manera más efectiva. Siempre que envíes un correo electrónico,
            estarás proporcionando tu dirección web a tus clientes y potenciales
            compradores. De este modo, los estarás alentando a que visiten tu
            sitio web.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 4,
    title: "¿Por qué obtener un nombre de dominio de GoDaddy?",
    content: (
      <Para size="sm">
        GoDaddy es el registrador de dominio de confianza más grande del mundo
        que posibilita que personas con ideas creativas igual que tú, triunfen
        en línea. <Link underline={true}>Comprar un nombre de dominio</Link> es
        fácil; con nuestra herramienta de búsqueda de dominio y nuestras
        herramientas de generador de nombres de dominio puedes encontrar la
        dirección perfecta de sitio web para tu negocio.
      </Para>
    ),
  },
  {
    id: 5,
    title: "¿Por qué usar el creador de páginas web de GoDaddy?",
    content: (
      <>
        <Para size="sm">
          Porque es una forma rápida y fácil de crear una página web con la que
          tú y tus clientes estarán encantados. Simplemente escribe tu idea o
          industria y el <Link underline={true}>Creador de páginas web</Link> de
          GoDaddy te mostrará plantillas con diseños profesionales que están
          listas para usarse. Después, solo necesitas agregar tu propio texto e
          imágenes y estará todo listo.
        </Para>
      </>
    ),
  },
  {
    id: 6,
    title: "¿Qué hace que el Web Hosting de GoDaddy sea líder mundial?",
    content: (
      <>
        <Para size="sm">
          Con casi 20 años en la industria, tenemos la experiencia, la
          tecnología y los expertos en hosting para ayudar a los diseñadores
          web, desarrolladores, blogueros y comercios en línea a crear y
          mantener su presencia en Internet. Nuestra{" "}
          <Link underline={true}>plataforma de web hosting</Link> segura y
          completa con cPanel, ofrece una garantía de 99,9% de tiempo de
          actividad <sup>***</sup> y asistencia técnica de primer nivel y ha
          ayudado a casi 20+ millones de clientes a estar en línea.
        </Para>
      </>
    ),
  },
  {
    id: 7,
    title: "¿Por qué elegir GoDaddy para tener WordPress?",
    content: (
      <Para size="sm">
        GoDaddy ofrece planes confiables y accesibles de{" "}
        <Link underline={true}>hosting WordPress</Link> &nbsp;y{" "}
        <Link underline={true}>hosting de WooCommerce</Link> , además de
        instalaciones con un clic y la versión más reciente para que tengas
        disponibles las últimas funcionalidades para tu sitio. El contenido de
        tu página web se administra desde un lugar; tienes una variedad de temas
        a tu disposición y complementos que te dan opciones ilimitadas para
        triunfar.
      </Para>
    ),
  },
  {
    id: 8,
    title: "¿Por qué transferir mi dominio, web hosting o sitio web a GoDaddy?",
    content: (
      <Para size="sm">
        Hay varias razones: nuestra asistencia técnica siempre está en primer
        lugar cuando investigamos los motivos por los que las personas cambian
        su presencia online a GoDaddy. Por supuesto que los precios son otro
        motivador, incluyendo la extensión gratuita por un año para las
        transferencias de varios dominios. Y si ya tienes uno o más de nuestros
        productos, la transferencia de tu dominio, página web o hosting te
        permitirá consolidar tu presencia en la web con un solo proveedor, para
        que todo sea más fácil de administrar.
      </Para>
    ),
  },
  {
    id: 9,
    title: "¿Por qué usar el Creador de logos de GoDaddy?",
    content: (
      <Para size="sm">
        Con el <Link underline={true}>Creador de logos de GoDaddy</Link> es
        fácil crear un logotipo personalizado que te ayudará a definir la
        personalidad de tu marca y transformará tu negocio. Desde marcas hasta
        logotipos, hay cientos de plantillas para elegir. O puedes diseñar el
        tuyo en cuestión de minutos. No se necesitan conocimientos de diseño.
      </Para>
    ),
  },
];

const Questions = () => {
  return (
    <section className="expansion-section-y wrapper-sm xl:wrapper-lg flex flex-col gap-betweeen-grids">
      <div className="text-center xl:px-48 flex flex-col gap-y-4">
        <Title size="md" family="gdsherpa">
          Millones de clientes confían en nosotros para comprar dominios y web
          hosting, logrando que sus ideas aparezcan en línea
        </Title>
        <Title size="md" family="gdsherpa">
          Preguntas frecuentes
        </Title>
      </div>
      <div className="w-full h-full xl:px-32">
        {data.map((item) => (
          <div key={item.id} className="">
            <Separator />
            <details className="group p-2">
              <summary className="select-none flex justify-between items-center mb-2 cursor-pointer">
                <Title family="gdsherpa" size="sm">
                  {item.title}
                </Title>
                <Icon
                  Icon={IoIosArrowUp}
                  background="transparent"
                  className="group-open:rotate-180 transition-all"
                />
              </summary>

              <div className="text-sm xl:w-[80%] w-full flex flex-col gap-y-5">
                {item.content}
              </div>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions;
