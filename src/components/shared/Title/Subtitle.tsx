import { HTMLAttributes, ReactNode } from "react";
import cn from "../../../lib/cn";

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLHeadElement>;

const Subtitle = ({ children, className, ...rest }: Props) => {
  const classnames = cn("subtitle-sm", className);

  return (
    <h4 className={classnames} {...rest}>
      {children}
    </h4>
  );
};

export default Subtitle;
