/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Papa from "papaparse";
import ShowItem from "./ShowItem/showItem";
import axios from "axios";

const getImage = (images) => {
  return images
    .replace(/["[\]]/g, "")
    .split(",")
    .map((item) => item.trim())[0];
};

const ItemBuild = (props) => {
  {
    if (props.images !== "") {
      return (
        <div className="s-item-container">
          <img src={getImage(props.images)} alt={props.name} />
          <div className="sc-txt">
            <div className="sc-txt-name">
              <p className="h3">{props.name}</p>
            </div>
            <div className="sc-txt-info">
              <p className="h6">{props.brand}</p>
              <p className="h6" style={{ color: `var(--green)` }}>
                Dostępny
              </p>
            </div>
            <div className="sc-txt-price">
              <p className="h4">{props.price} USD</p>
              <ShowItem
                name={props.name}
                price={props.price}
                images={props.images}
                brand={props.brand}
                description={props.description}
                rating={props.rating}
                reviews={props.reviews}
              />
            </div>
          </div>
        </div>
      );
    }
  }
};

function ShopItemBuild() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://query.data.world/s/jewwg3ly7ekxkje75bmzgunavbturi?dws=00000"
        );
        const csv = response.data;
        const results = Papa.parse(csv, { header: true });

        setData(results.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const dataTo50 = data.slice(0, 50);

  return dataTo50.map((item) => (
    <ItemBuild
      name={item["Product Name"]}
      price={item["Sale Price"]}
      images={item.Images}
      brand={item.Brand}
      description={item.Description}
      rating={item.Rating}
      reviews={item.Reviews}
    />
  ));
}

export default ShopItemBuild;
