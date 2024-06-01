/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import "../../../../BasicAssets/basicSet.css";
import "./shopFilter.css";
import "bootstrap/dist/css/bootstrap.css";
import { shopItems } from "../shopItemsData";
import { useEffect, useState } from "react";
import itemsGenerator from "./ShopItems/itemsGenrator";

export const handleFilterButtonClick = (
  selectedCategory,
  setSelectedFilters
) => {
  setSelectedFilters([selectedCategory]);
  localStorage.setItem("selectedCategory", selectedCategory);
};

function shopFilter() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(shopItems);

  let filters = ["men", "women", "kids"];
  let names = ["Mężczyźni", "Kobiety", "Dzieci"];

  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    if (savedCategory) {
      setSelectedFilters([savedCategory]);
    }
  }, []);

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = shopItems.filter(
          (item) => item.category === selectedCategory
        );
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      let temp = shopItems.filter((item) => item.category === "men");
      setFilteredItems(temp);
    }
  };

  return (
    <div className="min-height shop-filter">
      <div className="sf-btn-ctn">
        <ul>
          {filters.map((category, idx) => (
            <li
              onClick={() =>
                handleFilterButtonClick(category, setSelectedFilters)
              }
              className="button"
              key={`filters-${idx}`}
            >
              <a>{names[idx]}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="items-container min-height">
        {itemsGenerator(filteredItems)}
      </div>
    </div>
  );
}

export default shopFilter;
