import cn from "../../../lib/cn";

type Props = {
  markUp?: boolean;
  fullScreen: boolean;
};

const Mark = ({ markUp, fullScreen }: Props) => {
  const classnames = cn(" flex flex-col", {
    "self-start": markUp,
    "self-end": !markUp,
    "p-10": fullScreen,
  });

  return (
    <div className={classnames}>
      <small>Rahiem Thompson</small>
      <small>roletape.com</small>
    </div>
  );
};

export default Mark;
