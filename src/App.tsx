import ChooseUs from "./components/ChooseUs";
import Customer from "./components/Customer";
import Domain from "./components/Domain";
import Footer from "./components/Footer";
import Heroe from "./components/Heroe";
import MultiImage from "./components/MultiImage";
import Nav from "./components/Nav";
import Priority from "./components/Priority";
import Questions from "./components/Questions";

function App() {
  return (
    <main className="antialiased w-full">
      <Nav />
      <Heroe />
      <Priority />
      <MultiImage />
      <Customer />
      <Domain />
      <ChooseUs />
      <Questions />
      <Footer />
    </main>
  );
}

export default App;
