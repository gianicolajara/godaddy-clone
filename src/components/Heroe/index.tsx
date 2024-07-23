import Search from "../Search";
import Presentation from "./Presentation";

const Heroe = () => {
  return (
    <section className="w-full h-full xl:h-[calc(100vh-4rem)] 2xl:h-[calc(80vh-4rem)]">
      <div className="w-full h-full grid grid-rows-[auto,_8fr] grid-cols-1 gap-betweeen-grids-sm expansion-section-y-sm wrapper-sm xl:wrapper">
        <Search />
        <Presentation />
      </div>
    </section>
  );
};

export default Heroe;
