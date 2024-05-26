import { useEffect, useState } from "react";
import { shopItems } from "../shopItemsData";
import "bootstrap/dist/css/bootstrap.css";
import "../../../../BasicAssets/basicSet.css";
import "./shopFilter.css";
import shopItemsBuild from "./ShopItems/shopItems.jsx";

function shopFilter() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(shopItems);

  let filters = ["men", "women", "kids"];
  let names = ["Mężczyźni", "Kobiety", "Dzieci"];

  const handleFilterButtonClick = (selectedCategory) => {
    setSelectedFilters([selectedCategory]);
  };

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
              onClick={() => handleFilterButtonClick(category)}
              className={`button ${
                selectedFilters?.includes(category) ? "active" : ""
              }`}
              key={`filters-${idx}`}
            >
              <a>{names[idx]}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="items-container min-height">
        {shopItemsBuild(filteredItems)}
      </div>
    </div>
  );
}

export default shopFilter;
