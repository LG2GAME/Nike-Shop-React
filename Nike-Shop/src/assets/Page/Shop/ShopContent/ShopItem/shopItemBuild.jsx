/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Papa from "papaparse";
import renderColorShape from "./ColorGenerator/colorGenerator";
import isAvailable from "./IsAvailable/isAvailable";
import ShowItem from "./ShowItem/showItem";

const ItemBuild = (props) => {
  return (
    <div className="s-item-container">
      <img src={props.img} alt={props.name} />
      <div className="sc-txt">
        <div className="sc-txt-name">
          <p className="h3">{props.name}</p>
          <p className="h5">{props.subtitle}</p>
        </div>
        <div className="sc-txt-info">
          <div className="color-shape">{renderColorShape(props.color)}</div>
          {isAvailable(props.availability)}
        </div>
        <div className="sc-txt-price">
          <p className="h4">{props.price}</p>
          {props.availability === "InStock" ? (
            <ShowItem
              name={props.name}
              subtitle={props.subtitle}
              color={props.color}
              price={props.price}
              availability={props.availability}
              description={props.description}
              img={props.img}
              sizes={props.sizes}
            />
          ) : (
            <button className="h4 sc-btn-off">Zobacz</button>
          )}
        </div>
      </div>
    </div>
  );
};

function ShopItemBuild() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/nike_data.csv");
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value);
      const results = Papa.parse(csv, { header: true });

      setData(results.data);
    };

    fetchData();
  }, []);

  return data.map((item) => (
    <ItemBuild
      name={item.name}
      subtitle={item.sub_title}
      color={item.color}
      price={item.price + " " + item.currency}
      availability={item.availability}
      description={item.raw_description}
      img={item.images}
      sizes={item.available_sizes}
    />
  ));
}

export default ShopItemBuild;
