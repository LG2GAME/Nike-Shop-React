import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../../BasicAssets/Navbar/navbar.jsx";
import ShopFilter from "./ShopContent/ShopFilter/shopFilter.jsx";

function shopPage() {
  return (
    <>
      <Navbar />
      <ShopFilter />
    </>
  );
}

export default shopPage;
