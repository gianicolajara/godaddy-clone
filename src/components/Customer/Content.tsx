import { GrDocumentLocked } from "react-icons/gr";
import { HiMagnifyingGlass } from "react-icons/hi2";
import LinkIcon from "../shared/Link/LinkIcon";
import Para from "../shared/Para";
import Title from "../shared/Title";

const Content = () => {
  return (
    <>
      <Title
        family="gdsherpa"
        size="large"
        className="leading-10 md:leading-10 lg:leading-[2.5rem] xl:leading-[3.4rem]"
      >
        “El Creador de sitios web de GoDaddy es muy práctico para aquellos que
        tienen una idea de lo que quieren crear, pero carecen de habilidades
        técnicas”.
      </Title>
      <div className="w-full lg:h-full grid grid-cols-1 lg:grid-cols-[45%,_55%] grid-rows-1">
        <div className="flex flex-col justify-end gap-y-4">
          <div>
            <Para className="">Productos usados por</Para>
            <Para>Roletape:</Para>
          </div>
          <div>
            <LinkIcon icon={HiMagnifyingGlass} title="Dominio" />
            <LinkIcon icon={GrDocumentLocked} title="Certificados SSL" />
          </div>
        </div>
        <div className="w-full h-full hidden lg:flex">
          <img
            src="/media/images/Raheim-Thompson-site.webp"
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Content;
