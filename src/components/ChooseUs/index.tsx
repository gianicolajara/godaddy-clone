import HeroeDetails from "../shared/HeroeDetails";
import Content from "./Content";

const ChooseUs = () => {
  return (
    <HeroeDetails
      bgTransparent={true}
      heightScreen={false}
      imgDesktop="mrq-Guide-LATAM-Felicia-desktop.webp"
      imgPhone="NG-Guides-Sliced-Images_V3mrq-Guide-LATAM-Felicia-portrait.webp"
      markUp={true}
      fullScreen={true}
    >
      <Content />
    </HeroeDetails>
  );
};

export default ChooseUs;
