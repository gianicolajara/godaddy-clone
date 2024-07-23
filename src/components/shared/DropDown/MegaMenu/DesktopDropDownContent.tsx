import { useMediaQuery } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { FaChevronLeft } from "react-icons/fa6";
import { IMenuList } from "../../../../types/menu";
import Cookie from "../../Cookie";
import Icon from "../../Icon";
import Link from "../../Link";
import Subtitle from "../../Title/Subtitle";

type Props = {
  isOpen: boolean;
  itemSelected?: IMenuList;
  setItemSelected: React.Dispatch<React.SetStateAction<IMenuList | undefined>>;
};

const DesktopDropDownContentDesktop = ({
  isOpen,
  itemSelected,
  setItemSelected,
}: Props) => {
  const isPhoneScreen = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width: 1280px)"
  );

  return (
    <>
      {isOpen && itemSelected?.items && (
        <>
          <motion.div
            initial={{
              scaleY: isPhoneScreen ? 1 : 0,
              scaleX: isPhoneScreen ? 0 : 1,
              transformOrigin: isPhoneScreen ? "right" : "top",
            }}
            animate={{
              scaleY: 1,
              scaleX: 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeIn",
              bounce: 0,
            }}
            className=" bg-white xl:w-full z-50 absolute top-0 xl:top-16 left-0 overflow-hidden h-screen xl:h-auto w-[90%]"
          >
            <motion.ul
              key={itemSelected.id}
              initial={{
                opacity: 0,
                x: "100%",
              }}
              animate={{
                opacity: [0, 0, 0, 0.2, 1],
                x: ["15%", "0%"],
              }}
              transition={{
                bounce: 0,
                duration: 0.5,
                ease: "easeInOut",
                times: [0, 0.4, 0.6, 0.9, 1],
                easings: ["easeIn", "easeOut"],
              }}
              className="xl:wrapper xl:w-full xl:grid-cols-4 xl:grid-rows-1 gap-betweeen-grids xl:m-between-items-menu-y wrapper-menu grid grid-cols-1 grid-rows-[repeat(4,_auto)] xl:overflow-y-visible overflow-y-auto h-screen pb-10"
            >
              {isPhoneScreen && (
                <div className="w-full sticky top-0 bg-white py-4">
                  <Icon
                    Icon={FaChevronLeft}
                    background="transparent"
                    size={20}
                    pointer={true}
                    onClick={() => setItemSelected(undefined)}
                    className="p-0"
                  />
                </div>
              )}
              {itemSelected?.items?.map((item) => (
                <li key={item.id} className="w-full flex-col">
                  <Subtitle className="mb-5">
                    {item.title.toUpperCase()}
                  </Subtitle>
                  <div className="flex flex-col gap-betweeen-grids-sm">
                    {item.subItems.map((subItem) => (
                      <div
                        className="w-full flex gap-x-3 items-center hover:bg-lighter-gray/10 rounded-lg transition-all p-1"
                        key={subItem.id}
                      >
                        <Icon
                          Icon={subItem.icon}
                          background={
                            subItem.transparent ? "transparent" : "blue"
                          }
                        />
                        <Link>{subItem.label}</Link>
                        {subItem.isFreeTry && <Cookie>PRUEBA GRATIS</Cookie>}
                      </div>
                    ))}
                  </div>
                </li>
              ))}
              <div className="group w-full  cursor-pointer xl:col-start-4 xl:col-end-5">
                <a href="#" className="">
                  <div className="overflow-hidden flex flex-col xl:gap-y-2 gap-y-4">
                    <div className="w-full rounded-lg overflow-hidden">
                      <img
                        src={itemSelected?.img}
                        alt={itemSelected?.caption}
                        className="w-full h-72  object-cover group-hover:scale-110 transition-all duration-1000"
                      />
                    </div>
                    <p className="group-hover:underline text-md xl:text-xl">
                      {itemSelected?.caption}
                    </p>
                  </div>
                </a>
              </div>
            </motion.ul>
          </motion.div>
        </>
      )}
    </>
  );
};

export default DesktopDropDownContentDesktop;
