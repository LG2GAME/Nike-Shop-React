import "bootstrap/dist/css/bootstrap.css";
import "./gallery.css";
import "../../../../BasicAssets/basicSet.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import RenderGallery from "./Products/renderProducts.jsx";

const initSlider = () => {
  const imageList = document.querySelector(".gallery-items");
  const slideButtons = document.querySelectorAll(".slide-button");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  slideButtons.forEach((buttons) => {
    buttons.addEventListener("click", () => {
      const direction = buttons.id === "gallery-btn-prv" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    const handleSlideButton = () => {
      slideButtons[0].classList =
        imageList.scrollLeft <= 0
          ? "h3 slide-button gallery-button off"
          : "h3 slide-button gallery-button";
      slideButtons[1].classList =
        imageList.scrollLeft >= maxScrollLeft
          ? "h3 slide-button gallery-button off"
          : "h3 slide-button gallery-button";
    };

    imageList.addEventListener("scroll", () => {
      handleSlideButton();
    });
  });
};
window.addEventListener("load", initSlider);

function Gallery() {
  return (
    <>
      <section
        className="container min-height bg-color-black gallery"
        id="gallery"
      >
        <section className="gallery-header">
          <h1>odkryj inne oferty</h1>
          <div className="gh-c">
            <a href="/sale" className="h3">
              Zobacz więcej
            </a>
            <div className="gh-c-btns">
              <button
                className="h3 slide-button gallery-button off"
                id="gallery-btn-prv"
              >
                <FaAngleLeft />
              </button>
              <button
                className="h3 slide-button gallery-button"
                id="gallery-btn-nxt"
              >
                <FaAngleRight />
              </button>
            </div>
          </div>
        </section>
        <section className="gallery-container">
          <section className="gallery-carousel">
            <section className="gallery-items">
              <RenderGallery />
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

// Navbar()

export default Gallery;
