// import "bootstrap/dist/css/bootstrap.css";
// import "./SpecialOffer.css";
// import "../../basicSet.css";
// import SoItem from "./so-item/so-item.jsx";

import "../../../../BasicAssets/basicSet.css";
import "./specialOffer.css";
import "bootstrap/dist/css/bootstrap.css";
import SoItem from "../SpecialOffer/SOItems/soItems";

function SpecialOffer() {
  return (
    <>
      <section>
        <SoItem />
      </section>
    </>
  );
}

export default SpecialOffer;
