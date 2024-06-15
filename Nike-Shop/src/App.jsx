import "./assets/BasicAssets/allStyles.jsx";
import Footer from "./assets/BasicAssets/Footer/footer.jsx";
import Navbar from "./assets/BasicAssets/Navbar/navbar.jsx";
import HomePage from "./assets/Page/Home/homePage.jsx";
import SalePage from "./assets/Page/Sale/salePage.jsx";
import ShopPage from "./assets/Page/Shop/shopPage.jsx";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
    case "/home":
      component = HomePage();
      break;
    case "/shop":
      component = ShopPage();
      break;
    case "/sale":
      component = SalePage();
      break;
    case "/state-shop":
      // component = StateShopPage();
      break;
    case "/contact":
      // component = ContactPage();
      break;
  }
  return (
    <>
      <Navbar />
      {component}
      <Footer />
    </>
  );
}

export default App;
