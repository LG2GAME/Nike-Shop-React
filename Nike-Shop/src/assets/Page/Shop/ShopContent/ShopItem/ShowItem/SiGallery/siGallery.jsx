/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const initSlider = () => {
  const imageList = document.querySelector(".si-g-b-items");
  if (!imageList) return;

  const slideButtons = document.querySelectorAll(".si-g-button");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  slideButtons.forEach((button) => {
    button.addEventListener(
      "click",
      debounce(() => {
        const direction = button.id === "si-g-btn-prv" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        const targetScrollLeft = Math.min(
          Math.max(imageList.scrollLeft + scrollAmount, 0),
          maxScrollLeft
        );
        imageList.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
      }, 300)
    ); // Adjust debounce delay as needed

    const handleSlideButton = () => {
      slideButtons[0].classList.toggle("off", imageList.scrollLeft <= 0);
      slideButtons[1].classList.toggle(
        "off",
        imageList.scrollLeft >= maxScrollLeft
      );
    };

    imageList.addEventListener("scroll", handleSlideButton);
    handleSlideButton(); // Initial check
  });
};

const getImagesArray = (images) => {
  return images
    .replace(/["[\]]/g, "")
    .split(",")
    .map((item) => item.trim());
};

const siRenderGallery = (imagesArray) => {
  return imagesArray.map((img, index) => (
    <div key={index} className="si-g-b-item">
      <img src={img} alt={`Gallery image ${index + 1}`} />
    </div>
  ));
};

const SiGallery = ({ images }) => {
  const imagesArray = getImagesArray(images);

  useEffect(() => {
    initSlider();
  }, [imagesArray]);

  return (
    <>
      <section className="si-gallery" id="gallery">
        <section className="si-g-header">
          <div className="si-g-btns">
            <button
              className="h3 slide-button si-g-button off"
              id="si-g-btn-prv"
            >
              <FaAngleLeft />
            </button>
            <button className="h3 slide-button si-g-button" id="si-g-btn-nxt">
              <FaAngleRight />
            </button>
          </div>
        </section>
        <section className="si-g-body">
          <section
            className="si-g-b-thumbnail"
            style={{ gridTemplateRows: `repeat(${imagesArray.length}, 1fr)` }}
          >
            {siRenderGallery(imagesArray)}
          </section>
          <section className="si-g-b-gallery">
            <section className="si-g-b-container">
              <section className="si-g-b-carousel">
                <section
                  className="si-g-b-items"
                  style={{
                    gridTemplateColumns: `repeat(${imagesArray.length}, 100%)`,
                  }}
                >
                  {siRenderGallery(imagesArray)}
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default SiGallery;
