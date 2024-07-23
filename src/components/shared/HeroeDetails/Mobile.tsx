import { ReactNode } from "react";
import cn from "../../../lib/cn";
import Mark from "./Mark";

type Props = {
  children: ReactNode;
  markUp: boolean;
  fullScreen: boolean;
};

const Mobile = ({ children, markUp, fullScreen }: Props) => {
  const classnames = cn(
    "grid grid-cols-1 grid-rows-[350px,_auto] overflow-hidden lg:hidden",
    {
      "rounded-xl": !fullScreen,
    }
  );

  return (
    <div className={classnames}>
      <div className="w-full h-full overflow-hidden ">
        <div className="w-full h-full bg-[image:var(--image-url-phone)] bg-no-repeat bg-center bg-cover p-7  flex">
          <Mark markUp={markUp} fullScreen={fullScreen} />
        </div>
      </div>
      <div className="gap-y-4 flex flex-col p-5 bg-mute/20 ">{children}</div>
    </div>
  );
};

export default Mobile;
