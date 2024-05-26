import "bootstrap/dist/css/bootstrap.css";
import "./shopItems.css";
import "../../../../../BasicAssets/basicSet.css";

const ItemBuild = (props) => {
  if (props.id == "shoe") {
    return (
      <>
        <nav>
          <p>asdf</p>
        </nav>
      </>
    );
  }
};

const shopItemsBuild = (filteredItems) => {
  return (
    <>
      {filteredItems.map((item, idx) => (
        <ItemBuild
          key={idx}
          category={item.category}
          id={item.id}
          idName={item.idName}
          img={item.img}
          name={item.name}
          price={item.price}
        />
      ))}
    </>
  );
};

export default shopItemsBuild;
