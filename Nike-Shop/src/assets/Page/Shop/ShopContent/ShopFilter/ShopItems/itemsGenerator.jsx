/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-key */

const ItemBuild = (props) => {
  if (props.cat === props.id) {
    return (
      <>
        <div className="item-container">
          <img src={props.img} />
          <div className="ic-txt">
            <div className="ic-txt-name">
              <p className="h3">{props.name}</p>
              <p className="h5">{props.idName}</p>
            </div>
            <div className="ic-txt-price">
              <p className="h4">{props.price} zł</p>
              <button className="h4">Dodaj do koszyka</button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

function classItem(items, cat) {
  return (
    <>
      {items.map((item) => (
        <ItemBuild
          cat={cat}
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
}

function itemsGenerator(filteredItems) {
  return (
    <>
      <section>
        <div className="min-height container">
          <nav>
            <h1>Buty</h1>
          </nav>
          <div className="items-container">
            {classItem(filteredItems, "shoe")}
          </div>
        </div>
        <div className="min-height container">
          <nav>
            <h1>Ubrania</h1>
          </nav>
          <div className="items-container">
            {classItem(filteredItems, "clothes")}
          </div>
        </div>
        <div className="min-height container">
          <nav>
            <h1>Nowości</h1>
          </nav>
          <div className="items-container">
            {classItem(filteredItems, "news")}
          </div>
        </div>
        <div className="min-height container">
          <nav>
            <h1>Bestsellery</h1>
          </nav>
          <div className="items-container">
            {classItem(filteredItems, "best")}
          </div>
        </div>
      </section>
    </>
  );
}

export default itemsGenerator;
