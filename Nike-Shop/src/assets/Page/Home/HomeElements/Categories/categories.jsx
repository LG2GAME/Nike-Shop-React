import CatItem from "./CategoriesItems/catItems";

function Categories() {
  return (
    <>
      <section className="container min-height bg-color-white offer">
        <h1>odkryj więcej produktów</h1>
        <div className="offer-sect">
          <CatItem />
        </div>
      </section>
    </>
  );
}

// Navbar()

export default Categories;
