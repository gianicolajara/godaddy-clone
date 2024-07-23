import Button from "../shared/Button";
import Para from "../shared/Para";
import Title from "../shared/Title";

const Content = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-8 ">
      <div className="">
        <img
          src="/godaddy-clone/media/svg/gd-guides-logo.svg"
          className="w-52 h-full"
        />
      </div>
      <div className="flex flex-col gap-y-5">
        <Title size="large">¿Por qué elegir a GoDaddy?</Title>
        <Para className="text-left">
          Porque sabemos que hasta la mejor tecnología necesita de la gente más
          competente. Por eso, ofrecemos asistencia técnica telefónica de
          expertos 24/7, entre muchas otras cosas.
        </Para>
        <Para className="text-left">
          Llama a nuestro equipo de asistencia técnica al 0212 7719061.
        </Para>

        <Button isArrow={true} background="black" size="lg">
          Obtener ayuda
        </Button>
      </div>
    </div>
  );
};

export default Content;
