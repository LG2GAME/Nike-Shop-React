/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";

const ShowItem = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
    document.body.style.overflow = visible ? "scroll" : "hidden";
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && visible) {
        toggleVisibility();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [visible]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <div className="stars">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} />
        ))}
        {[...Array(halfStars)].map((_, index) => (
          <FaStarHalfAlt key={index + fullStars} />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index + fullStars + halfStars} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <button className="h4" onClick={toggleVisibility}>
        Zobacz
      </button>
      {visible && (
        <div className="show-item-container">
          <a className="h2 sic-close" onClick={toggleVisibility}>
            <IoClose />
          </a>
          <div className="sic-img">
            <img src={props.img} alt={props.name} />
          </div>
          <div className="sic-txt">
            <div className="mt-2 mb-2 sic-txt-general">
              <div className="sic-g-name">
                <p className="h1">{props.name}</p>
                <div className="sic-txt-price">
                  <p className="h5 mt-3">{props.price} USD</p>
                </div>
              </div>
              <div className="mt-5 sic-txt-sizes">
                <div className="mb-3 sic-txt-sizes-txt">
                  <p className="h6">Wybierz rozmiar</p>
                  <a
                    className="h6"
                    href="https://www.nike.com/pl/size-fit/koszulki-literowe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Przewodnik po rozmiarach
                  </a>
                </div>
                <div className="sic-txt-s-container">
                  <ul>
                    <li>XS</li>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                    <li>XXL</li>
                  </ul>
                </div>
              </div>
              <div className="h4 mt-5 sic-txt-add">
                <button>Dodaj do koszyka</button>
                <button>
                  Ulubione <CiHeart />
                </button>
              </div>
              <div className="mt-5 sic-txt-rating">
                {renderStars(props.rating)}
              </div>
            </div>
            <div className="mt-5 sic-txt-description">
              <Accordion>
                <Accordion.Item eventKey={props.id + "-desc"}>
                  <Accordion.Header>Opis</Accordion.Header>
                  <Accordion.Body>{props.description}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowItem;
