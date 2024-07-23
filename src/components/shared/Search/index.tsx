import { BiSearch } from "react-icons/bi";
import Button from "../Button";
import IconButton from "../Button/IconButton";

const Search = () => {
  return (
    <div className="w-full flex border border-lighter-gray overflow-hidden focus-within:border focus-within:border-blue transition-all shadow-lg items-center group bg-white ">
      <input
        type="text"
        name=""
        id=""
        className="w-full placeholder:text-lighter-gray xl:placeholder:text-lg xl:text-2xl focus:border-none outline-none flex-0 px-4"
        placeholder="Encuentra tu dominio perfecto"
      />
      <IconButton
        Icon={BiSearch}
        background="black"
        className="flex-1 w-full h-full p-4 flex xl:hidden"
      />
      <Button
        size="lg"
        background="black"
        rounded={false}
        className="p-6 hidden lg:flex"
      >
        Buscar
      </Button>
    </div>
  );
};

export default Search;
