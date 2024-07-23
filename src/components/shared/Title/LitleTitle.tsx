import { HTMLAttributes } from "react";
import cn from "../../../lib/cn";

type Props = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLHeadElement>;

const LitleTitle = ({ children, className, ...rest }: Props) => {
  const classnames = cn("subtitle-md-black", className);

  return (
    <h6 className={classnames} {...rest}>
      {children}
    </h6>
  );
};

export default LitleTitle;
