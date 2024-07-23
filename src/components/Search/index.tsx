import { BiSearch } from "react-icons/bi";
import Button from "../shared/Button";
import IconButton from "../shared/Button/IconButton";
import Icon from "../shared/Icon";
import Para from "../shared/Para";

const Search = () => {
  return (
    <section className="">
      <div className="xl:grid xl:grid-cols-[1fr,_auto] xl:grid-rows-1 xl:gap-x-4 bg-mute/30 p-1 rounded-xl">
        <div className="w-full flex rounded-xl border border-mute overflow-hidden focus-within:border focus-within:border-blue transition-all shadow-lg pl-2 items-center group bg-white">
          <Icon
            Icon={BiSearch}
            color="gray"
            background="transparent"
            className="hidden xl:block group-focus-within:hidden"
          />
          <input
            type="text"
            name=""
            id=""
            className="w-full p-2 placeholder:text-lighter-gray  xl:placeholder:text-2xl xl:text-2xl focus:border-none outline-none flex-0"
            placeholder="Escribe el dominio que deseas"
          />
          <IconButton
            Icon={BiSearch}
            background="ocean"
            className="flex-1 w-full h-full p-4 flex xl:hidden"
          />
          <Button className="px-8 py-5 m-2 hidden xl:flex">
            Buscar dominios
          </Button>
        </div>
        <div className="w-max xl:flex gap-x-4 items-center border border-transparent hover:rounded-xl hover:border hover:border-mute py-2 px-4 cursor-pointer transition-all group hidden ">
          <a href="#" className="flex gap-x-1">
            <img src="/media/svg/img_icon_bug_tld-shop.svg" alt=".shop" />
          </a>
          <div>
            <Para
              className="font-bold group-hover:text-blue transition-all"
              size="sm"
            >
              $1,49*/primer año
            </Para>
            <small className="text-light-gray">
              Complace al mundo con .shop
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
