/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Accordion from "react-bootstrap/Accordion";
import { renderStars, getRatingText } from "./RenderStars/renderStars";
import siGallery from "./SiGallery/siGallery";

const ShowItem = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
    // document.body.style.overflow = visible ? "scroll" : "hidden";
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
          <div className="sic-img">{siGallery(props.images)}</div>
          <div className="sic-txt">
            <div className="mt-4 sic-txt-general">
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
            </div>
            <div className="mt-5 mb-4 sic-txt-description">
              <Accordion>
                <Accordion.Item eventKey={props.id + "-desc"}>
                  <Accordion.Header>Opis</Accordion.Header>
                  <Accordion.Body>{props.description}</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={props.id + "-brand"}>
                  <Accordion.Header>Marka</Accordion.Header>
                  <Accordion.Body>
                    <li>{props.brand}</li>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={props.id + "-delivery"}>
                  <Accordion.Header>
                    Bezpłatna dostawa i zwroty
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Bezpłatna standardowa dostawa dzięki członkostwu Nike.
                    </p>
                    <li>
                      Zamówione produkty można zwrócić bezpłatnie w ciągu 30
                      dni.
                      <a
                        href="https://www.nike.com/pl/help/a/wyjatki-dotyczace-zwrotow-ue"
                        target="_blank"
                      >
                        <br />
                        Obowiązują pewne wyjątki.
                      </a>
                    </li>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={props.id + "-rating"}>
                  <Accordion.Header>Oceny ({props.reviews})</Accordion.Header>
                  <Accordion.Body>
                    {props.reviews === "" || props.reviews === "0" ? (
                      <div className="sic-txt-rating">
                        <p>Produkt nie został jeszcze oceniony.</p>
                      </div>
                    ) : (
                      <div className="sic-txt-rating">
                        {renderStars(props.rating)}
                        <p>{getRatingText(props.rating)}</p>
                      </div>
                    )}
                  </Accordion.Body>
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
