import Para from "../shared/Para";
import Search from "../shared/Search";
import Title from "../shared/Title";

const Domain = () => {
  return (
    <section className="w-full bg-light-blue wrapper-md lg:wrapper m-between-sections-y">
      <div className="flex flex-col justify-center items-center lg:px-52 gap-y-5 expansion-section-y-lg text-center">
        <Title size="large">Todo empieza con un dominio.</Title>
        <Para size="large">
          Convierte tu idea en realidad. Reclama tu espacio en línea con un
          dominio.
        </Para>
        <Search />
      </div>
    </section>
  );
};

export default Domain;
