import { ReactNode } from "react";
import Button from ".";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  isActive?: boolean;
};

const RoundedButton = ({ children, onClick, isActive }: Props) => {
  return (
    <Button
      background="white"
      className="p-4 rounded-full hover:scale-105"
      isActive={isActive}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default RoundedButton;
