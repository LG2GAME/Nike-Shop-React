import "../../BasicAssets/basicSet.css";
import "./homePage.css";
import "bootstrap/dist/css/bootstrap.css";
import Categories from "./HomeElements/Categories/categories.jsx";
import Gallery from "./HomeElements/Gallery/gallery.jsx";
import logo from "/img/logo.png";
import SpecialOffer from "./HomeElements/SpecialOffer/specialOffer.jsx";

function HomePage() {
  return (
    <>
      <header className="container min-height bg-color-black header-pg">
        <img src={logo} alt="nike logo" />
      </header>
      <SpecialOffer />
      <Categories />
      <Gallery />
    </>
  );
}

// Navbar()

export default HomePage;
