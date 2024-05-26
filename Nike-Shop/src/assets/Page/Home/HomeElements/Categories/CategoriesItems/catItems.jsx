/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-key */

import "bootstrap/dist/css/bootstrap.css";
import catItemData from "./catItemsData";

function ItemBuild(props) {
  return (
    <>
      <section className="offer-content">
        <div className="offer-content-img">
          <img src={props.img} />
        </div>
        <div className="offer-content-btns">
          <p>{props.cat}</p>
          <a href="#">Przeglądaj stylizacje</a>
        </div>
      </section>
    </>
  );
}

function catItem() {
  return catItemData.map((item) => {
    return <ItemBuild img={item.img} cat={item.cat} />;
  });
}

export default catItem;
