// ShowItem/showItem.js
import { useState } from "react";
import { IoClose } from "react-icons/io5";
// import { RiArrowDropDownLine } from "react-icons/ri";
import sizeGenerator from "./SizeGenerator/sizeGenerator.jsx";
import { CiHeart } from "react-icons/ci";

const ShowItem = (props) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
    visible === false
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  };

  return (
    <div>
      <button className="h4" onClick={handleClick}>
        Zobacz
      </button>
      {visible && (
        <div className="show-item-container">
          <a className="h2 sic-close" onClick={handleClick}>
            <IoClose />
          </a>
          <div className="sic-img">
            <img src={props.img} alt={props.name} />
          </div>
          <div className="sic-txt">
            <div className="mt-5 sic-txt-general">
              <div className="sic-g-name">
                <p className="h3">{props.name}</p>
                <p className="h6">{props.subtitle}</p>
                <div className="sic-txt-price">
                  <p className="h5 mt-3">{props.price}</p>
                </div>
              </div>
              <div className="mt-5 sic-txt-sizes">
                <p className="h6">Dostępne rozmiary</p>
                <div className="sic-txt-s-container">
                  {sizeGenerator(props.sizes)}
                </div>
              </div>
              <div className="h4 mt-5 sic-txt-add">
                <button>Dodaj do koszyka</button>
                <button>
                  Ulubione <CiHeart />
                </button>
              </div>
            </div>
            <div className="mt-5 sic-txt-description">
              <div
                className="sic-product-description"
                dangerouslySetInnerHTML={{ __html: props.description }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowItem;
