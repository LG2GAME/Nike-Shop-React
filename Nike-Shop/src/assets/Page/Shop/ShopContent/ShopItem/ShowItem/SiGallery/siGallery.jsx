/* eslint-disable react/jsx-key */
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const siGallery = (images) => {
  return (
    <>
      <section className="si-gallery" id="gallery">
        <section className="si-g-header">
          <div className="si-g-btns">
            <button
              className="h3 slide-button si-g-button off"
              id="gallery-btn-prv"
            >
              <FaAngleLeft />
            </button>
            <button
              className="h3 slide-button si-g-button"
              id="gallery-btn-nxt"
            >
              <FaAngleRight />
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default siGallery;
