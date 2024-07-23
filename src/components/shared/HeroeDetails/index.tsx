import { CSSProperties, ReactNode } from "react";
import cn from "../../../lib/cn";
import Title from "../Title";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

type Props = {
  children: ReactNode;
  title?: string;
  imgDesktop: string;
  imgPhone: string;
  heightScreen?: boolean;
  fullScreen?: boolean;
  bgTransparent?: boolean;
  markUp?: boolean;
};

const HeroeDetails = ({
  children,
  title,
  imgDesktop,
  imgPhone,
  heightScreen = true,
  bgTransparent = false,
  markUp = false,
  fullScreen = false,
}: Props) => {
  const classnames = cn("flex flex-col", {
    "": fullScreen,
    "wrapper-2xl wrapper-md": !fullScreen,
    "gap-betweeen-grids": !!title,
  });

  return (
    <section
      style={
        {
          "--image-url-phone": `url(/godaddy-clone/media/images/${imgPhone})`,
          "--image-url-desktop": `url(/godaddy-clone/media/images/${imgDesktop})`,
        } as CSSProperties
      }
      className={classnames}
    >
      <div className="w-full grid grid-cols-[80%,_20%] lg:grid-cols-2  grid-rows-1 lg:wrapper">
        {title && (
          <Title family="gdsherpa">Avanzamos con nuestros clientes.</Title>
        )}
      </div>
      <Desktop
        markUp={markUp}
        heightScreen={heightScreen}
        bgTransparent={bgTransparent}
        fullScreen={fullScreen}
      >
        {children}
      </Desktop>
      <Mobile markUp={markUp} fullScreen={fullScreen}>
        {children}
      </Mobile>
    </section>
  );
};

export default HeroeDetails;
