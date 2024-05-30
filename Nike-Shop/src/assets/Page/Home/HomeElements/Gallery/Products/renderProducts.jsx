/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-key */

import products from "./products.jsx";

function ItemBuild(props) {
  return (
    <>
      <div className="gallery-item">
        <img src={props.img} />
        <div className="gallery-item-com">
          <p className="gallery-item-name h4">{props.name}</p>
          <div>
            <p className="gallery-item-price h4">{props.price} zł</p>
          </div>
        </div>
      </div>
    </>
  );
}

function renderGallery() {
  return products.map((item) => {
    return (
      <ItemBuild
        img={item.img}
        name={item.name}
        price={item.price}
        saleAmount={item.saleAmount}
      />
    );
  });
}

export default renderGallery;
