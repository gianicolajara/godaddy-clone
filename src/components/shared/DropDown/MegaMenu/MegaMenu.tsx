import { useClickAway, useMediaQuery } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import cn from "../../../../lib/cn";
import { LetterSize } from "../../../../types/letters";
import { IMenuList } from "../../../../types/menu";
import Icon from "../../Icon";
import Logo from "../../Logo";
import DesktopDropDownContent from "./DesktopDropDownContent";
import DropDownMenuItem from "./DropDownMenuItem";

type Props = {
  list: IMenuList[];
  sizeLetter?: LetterSize;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MegaMenu = ({ list, sizeLetter = "md", isOpen, setIsOpen }: Props) => {
  const [itemList, setItemList] = useState<IMenuList[]>(list);
  const [itemSelected, setItemSelected] = useState<IMenuList | undefined>();
  const [idSelected, setIdSelected] = useState<number | null>();

  const ref = useClickAway<HTMLDivElement>(() => {
    handleCloseALl();
  });

  const onChangeOpen = (id: number) => {
    if (itemSelected?.id === id || id === -1) {
      handleCloseALl();
      return;
    }

    setIdSelected(id);

    setItemList(
      itemList.map((item) =>
        item.id === id ? { ...item, open: true } : { ...item, open: false }
      )
    );
  };

  const handleCloseALl = () => {
    setIsOpen(false);
    setItemSelected(undefined);
    setItemList(list);
  };

  const handleEscKeyPress = (e: KeyboardEvent) => {
    if (e.code === "Escape") {
      handleCloseALl();
    }
  };

  useEffect(() => {
    if (idSelected) {
      setItemSelected(itemList[idSelected - 1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemList]);

  useEffect(() => {
    if (!itemSelected && isPhoneScreen) {
      setItemSelected(undefined);
      setItemList(list);
      setIdSelected(null);
      return;
    }

    if (!itemSelected) {
      setIsOpen(false);
      setItemSelected(undefined);
      setItemList(list);
      setIdSelected(null);
      return;
    }

    setIsOpen(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemSelected]);

  useEffect(() => {
    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "initial";
    }
  }, [isOpen]);

  const isPhoneScreen = useMediaQuery(
    "only screen and (min-width : 0px) and (max-width: 1280px)"
  );

  const classNamesUl = cn(
    "xl:bg-gray xl:flex xl:flex-row xl:w-full xl:relative xl:top-auto xl:gap-x-4 xl:h-min flex-col top-0 left-0 bg-white h-screen z-20 max-h-screen relative",
    { "z-40 wrapper-menu gap-y-16 flex p-4": isPhoneScreen }
  );

  const classNamesBlackScreen = cn("w-full  left-0 top-16 z-10", {
    "bg-black/50 top-16 h-[calc(100vh-4rem)] absolute": !isPhoneScreen,
    "h-screen flex justify-center items-start": isPhoneScreen,
  });

  const blurScreen = cn(
    "w-full  backdrop-blur-sm z-0 absolute left-0 bg-black/50",
    {
      "top-0 h-screen": isPhoneScreen,
      "top-16 h-[calc(100vh-4rem)]": !isPhoneScreen,
    }
  );

  useEffect(() => {
    setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPhoneScreen]);

  return (
    <div className="w-full" ref={ref}>
      {/* overlay backdrop */}
      {isOpen && (
        <motion.div
          className={blurScreen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        ></motion.div>
      )}
      {/*  container overlay and menu */}

      <AnimatePresence mode="wait">
        <motion.div
          key={String(isOpen) + isPhoneScreen}
          initial={
            isPhoneScreen && {
              opacity: 0,
              zIndex: -1000,
              x: "-100%",
            }
          }
          animate={
            isPhoneScreen && {
              opacity: isOpen ? 1 : 0,
              zIndex: isOpen ? 20 : -1000,
              x: isOpen ? "0%" : "-100%",
            }
          }
          exit={
            isPhoneScreen
              ? {
                  opacity: 0,
                  zIndex: -1000,
                }
              : {}
          }
          transition={{
            bounce: 0,
            ease: "easeInOut",
            duration: 0.7,
          }}
          className="w-full h-screen absolute left-0 top-0 flex flex-row flex-nowrap xl:w-full xl:h-full xl:relative"
        >
          {/* menu items */}
          <motion.ul
            className={classNamesUl}
            initial={
              isPhoneScreen && {
                width: "10%",
              }
            }
            animate={
              isPhoneScreen && {
                width: isOpen ? "90%" : "10%",
              }
            }
            exit={
              isPhoneScreen
                ? {
                    width: "10%",
                  }
                : {}
            }
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            {/* logo */}
            {isPhoneScreen && <Logo color="black" />}
            {/* menu items */}
            {itemList.map((item) => (
              <DropDownMenuItem
                key={item.id}
                isOpen={item.open || false}
                idNumber={item.id}
                handleChange={onChangeOpen}
                menuItems={item.items}
                img={item.img}
                caption={item.caption}
                sizeLetter={sizeLetter}
                isCustom={!!item?.custom}
              >
                {item.label}
              </DropDownMenuItem>
            ))}
          </motion.ul>

          {/* overlay */}
          {isPhoneScreen && (
            <motion.div
              initial={{
                width: "100%",
              }}
              animate={{
                width: isOpen ? "10%" : "100%",
              }}
              exit={
                isPhoneScreen
                  ? {
                      width: "100%",
                    }
                  : {}
              }
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
              className={classNamesBlackScreen}
              onClick={handleCloseALl}
            >
              <div className="cursor-pointer" onClick={handleCloseALl}>
                <Icon Icon={IoClose} background="transparent" color="white" />
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* desktop menu */}
      <DesktopDropDownContent
        isOpen={isOpen}
        itemSelected={itemSelected}
        setItemSelected={setItemSelected}
      />

      {/* black screen */}
      {isOpen && itemSelected?.id && itemSelected.items && !isPhoneScreen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className={classNamesBlackScreen}
          onClick={handleCloseALl}
        ></motion.div>
      )}
    </div>
  );
};

export default MegaMenu;
