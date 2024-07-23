import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import RoundedButton from "../shared/Button/RoundedButton";
import Title from "../shared/Title";
import Domain from "./Domain";
import Recomended from "./Recomended";
import Security from "./Security";

enum PriorityItemEnum {
  "domain",
  "recomended",
  "security",
}

const Priority = () => {
  const [selectItem, setSelectItem] = useState<PriorityItemEnum>(
    PriorityItemEnum.domain
  );

  return (
    <section className="expansion-section-y wrapper-sm xl:wrapper">
      <div className="flex flex-col gap-y-4 justify-center items-center text-center">
        <Title family="gdsherpa" size="large">
          ¿Cuál es la prioridad para tu negocio?
        </Title>
        <div className="w-full flex justify-start items-start sm:justify-center sm:items-center gap-x-2 overflow-x-auto overflow-y-hidden p-4">
          <RoundedButton
            onClick={() => setSelectItem(PriorityItemEnum.domain)}
            isActive={selectItem === PriorityItemEnum.domain}
          >
            Dominio
          </RoundedButton>
          <RoundedButton
            onClick={() => setSelectItem(PriorityItemEnum.recomended)}
            isActive={selectItem === PriorityItemEnum.recomended}
          >
            Recomendado
          </RoundedButton>
          <RoundedButton
            onClick={() => setSelectItem(PriorityItemEnum.security)}
            isActive={selectItem === PriorityItemEnum.security}
          >
            Wordpress y Seguridad
          </RoundedButton>
        </div>

        <div className="wrapper-lg w-full h-full">
          <AnimatePresence>
            {selectItem === PriorityItemEnum.domain && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Domain />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {selectItem === PriorityItemEnum.recomended && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Recomended />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {selectItem === PriorityItemEnum.security && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Security />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Priority;
