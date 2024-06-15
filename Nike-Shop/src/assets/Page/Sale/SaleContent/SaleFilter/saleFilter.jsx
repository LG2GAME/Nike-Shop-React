/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { saleItems } from "../saleItemsData";
import { useEffect, useState } from "react";
import itemsGenerator from "./SaleItems/itemsGenerator.jsx";

export const handleFilterButtonClick = (
  selectedCategory,
  setSelectedFilters
) => {
  setSelectedFilters([selectedCategory]);
  localStorage.setItem("selectedCategory", selectedCategory);
};

function saleFilter() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(saleItems);

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
        let temp = saleItems.filter(
          (item) => item.category === selectedCategory
        );
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      let temp = saleItems.filter((item) => item.category === "men");
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
        {itemsGenerator(filteredItems, selectedFilters[0] || "men")}
      </div>
    </div>
  );
}

export default saleFilter;
