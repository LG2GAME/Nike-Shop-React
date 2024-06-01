/* eslint-disable react/jsx-key */
import "bootstrap/dist/css/bootstrap.css";
import catItemData from "./catItemsData";
import { useState } from "react";
import { handleFilterButtonClick } from "../../../../Shop/ShopContent/ShopFilter/shopFilter";

function ItemBuild(props) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleClick = (category) => {
    handleFilterButtonClick(category, setSelectedFilters);
    window.location.href = "/shop";
  };

  return (
    <>
      <section className="offer-content">
        <div className="offer-content-img">
          <img src={props.img} />
        </div>
        <div className="offer-content-btns">
          <p>{props.cat}</p>
          <a
            href="/shop"
            onClick={() => handleClick(props.id)}
            className="button"
          >
            Przeglądaj stylizacje
          </a>
        </div>
      </section>
    </>
  );
}

function catItem() {
  return catItemData.map((item) => {
    return <ItemBuild img={item.img} cat={item.cat} id={item.id} />;
  });
}

export default catItem;
