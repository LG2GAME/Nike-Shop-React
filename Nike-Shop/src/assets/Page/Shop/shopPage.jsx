import ShopFilter from "./ShopContent/ShopFilter/shopFilter";
import Accordion from "react-bootstrap/Accordion";
import { BsFilterLeft } from "react-icons/bs";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
// import { MdCheckBox } from "react-icons/md"; <MdCheckBox />

const sidebardToggle = () => {
  const spcItems = document.querySelector(".spc-items");
  const spcSidebar = document.querySelector(".spc-f-sidebar");
  const spcSort = document.querySelector(".spc-f-sort");

  const isOn = spcItems.classList.toggle("on");
  spcSidebar.classList.toggle("on");

  if (isOn) spcSort.classList.add("on");
  else spcSort.classList.remove("on");

  if (screen.availWidth <= 768)
    document.body.style.overflow = isOn ? "hidden" : "scroll";
};

function shopPage() {
  return (
    <>
      <div className="mt-5 shop-page-container">
        <div className="spc-filter">
          <div className="spc-f-filter">
            <button className="filter-button" onClick={sidebardToggle}>
              Filtruj <BsFilterLeft className="h4" />
            </button>
            <div className="spc-f-sidebar">
              <div className="spc-f-s-container">
                <Accordion>
                  <Accordion.Item eventKey="filter-sex">
                    <Accordion.Header>Płeć</Accordion.Header>
                    <Accordion.Body>
                      <div className="f-sex-men">
                        <button>
                          <span>
                            <MdCheckBoxOutlineBlank />
                          </span>
                          Mężczyźni
                        </button>
                      </div>
                      <div className="f-sex-women">
                        <button>
                          <span>
                            <MdCheckBoxOutlineBlank />
                          </span>
                          Kobiety
                        </button>
                      </div>
                      <div className="f-sex-unisex">
                        <button>
                          <span>
                            <MdCheckBoxOutlineBlank />
                          </span>
                          Uniseks
                        </button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="filter-price">
                    <Accordion.Header>Przeglądaj wg cen</Accordion.Header>
                    <Accordion.Body>
                      <div className="f-price-l2t">
                        <button>
                          <span>
                            <MdCheckBoxOutlineBlank />
                          </span>
                          Poniżej 2000 USD
                        </button>
                      </div>
                      <div className="f-price-l5t">
                        <button>
                          <span>
                            <MdCheckBoxOutlineBlank />
                          </span>
                          2000 USD - 5000 USD
                        </button>
                      </div>
                      <div className="f-price-l10t">
                        <button>
                          <span>
                            <MdCheckBoxOutlineBlank />
                          </span>
                          5000 USD - 10 000 USD
                        </button>
                      </div>
                      <div className="f-price-m10t">
                        <button>
                          <span>
                            <MdCheckBoxOutlineBlank />
                          </span>
                          Powyżej 10 000 USD
                        </button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="filter-sale">
                    <Accordion.Header>Wyprzedaż i oferty</Accordion.Header>
                    <Accordion.Body>
                      <div className="f-sale-sale">
                        <button>
                          <span>
                            <MdCheckBoxOutlineBlank />
                          </span>
                          Wyprzedaż
                        </button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="filter-size">
                    <Accordion.Header>Rozmiar</Accordion.Header>
                    <Accordion.Body>
                      <div className="f-size-xs">
                        <button>
                          <span>
                            <MdCheckBoxOutlineBlank />
                          </span>
                          XS
                        </button>
                      </div>
                      <div className="f-size-s">
                        <button>
                          <span>
                            <MdCheckBoxOutlineBlank />
                          </span>
                          S
                        </button>
                      </div>
                      <div className="f-size-m">
                        <button>
                          <span>
                            <MdCheckBoxOutlineBlank />
                          </span>
                          M
                        </button>
                      </div>
                      <div className="f-size-l">
                        <button>
                          <span>
                            <MdCheckBoxOutlineBlank />
                          </span>
                          L
                        </button>
                      </div>
                      <div className="f-size-xl">
                        <button>
                          <span>
                            <MdCheckBoxOutlineBlank />
                          </span>
                          XL
                        </button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="filter-color">
                    <Accordion.Header>Wybierz kolor</Accordion.Header>
                    <Accordion.Body>BRAK</Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="filter-brand">
                    <Accordion.Header>Marka</Accordion.Header>
                    <Accordion.Body>
                      <div className="f-bran-nike">
                        <button>
                          <span>
                            <MdCheckBoxOutlineBlank />
                          </span>
                          Nike
                        </button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="filter-rating">
                    <Accordion.Header>Ocena</Accordion.Header>
                    <Accordion.Body>
                      <div className="f-rating-1">
                        <button>
                          <span>
                            <MdCheckBoxOutlineBlank />
                          </span>
                          1
                        </button>
                      </div>
                      <div className="f-rating-2">
                        <button>
                          <span>
                            <MdCheckBoxOutlineBlank />
                          </span>
                          2
                        </button>
                      </div>
                      <div className="f-rating-3">
                        <button>
                          <span>
                            <MdCheckBoxOutlineBlank />
                          </span>
                          3
                        </button>
                      </div>
                      <div className="f-rating-4">
                        <button>
                          <span>
                            <MdCheckBoxOutlineBlank />
                          </span>
                          4
                        </button>
                      </div>
                      <div className="f-rating-5">
                        <button>
                          <span>
                            <MdCheckBoxOutlineBlank />
                          </span>
                          5
                        </button>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="spc-f-sort">
            <Accordion>
              <Accordion.Item eventKey="sort">
                <Accordion.Header>Sortuj</Accordion.Header>
                <Accordion.Body>
                  <a>Polecane</a>
                  <a>Najnowsze</a>
                  <a>Cena: od najwyższej</a>
                  <a>Cena: od najniższej</a>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="spc-items">
          <ShopFilter />
        </div>
      </div>
    </>
  );
}

export default shopPage;
