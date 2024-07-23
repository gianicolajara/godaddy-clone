import { ReactNode } from "react";
import cn from "../../../lib/cn";
import Mark from "./Mark";

type Props = {
  children: ReactNode;
  heightScreen: boolean;
  bgTransparent: boolean;
  fullScreen: boolean;
  markUp?: boolean;
};

const Desktop = ({
  children,
  heightScreen,
  bgTransparent,
  markUp,
  fullScreen,
}: Props) => {
  const classnames = cn(
    "w-full lg:bg-[image:var(--image-url-desktop)] grid-cols-2 grid-rows-1 p-5 bg-center bg-no-repeat bg-cover hidden lg:grid",
    {
      "h-screen": heightScreen,
      "rounded-xl": !fullScreen,
    }
  );
  const classnamesContent = cn(
    " p-10 grid-cols-1 grid-rows-[65%,_35%] hidden lg:grid",
    { "bg-white": !bgTransparent, "rounded-xl": !fullScreen }
  );

  return (
    <div className={classnames}>
      <Mark markUp={markUp} fullScreen={fullScreen} />
      <div className={classnamesContent}>{children}</div>
    </div>
  );
};

export default Desktop;
