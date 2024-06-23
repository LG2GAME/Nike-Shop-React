import ShopFilter from "./ShopContent/ShopFilter/shopFilter";
import Accordion from "react-bootstrap/Accordion";
import { BsFilterLeft } from "react-icons/bs";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
// import { MdCheckBox } from "react-icons/md"; <MdCheckBox />

const sidebardToggle = () => {
  const spcItems = document.querySelector(".spc-items");
  const spcSidebar = document.querySelector(".spc-f-sidebar");

  spcItems.classList.toggle("on");
  spcSidebar.classList.toggle("on");
};

function shopPage() {
  return (
    <>
      <div className="shop-page-container">
        <div className="spc-filter">
          <div className="spc-f-filter">
            <button className="filter-button" onClick={sidebardToggle}>
              Filtruj <BsFilterLeft className="h4" />
            </button>
            <div className="spc-f-sidebar on">
              <Accordion>
                <Accordion.Item eventKey="filter-sex">
                  <Accordion.Header>Płeć</Accordion.Header>
                  <Accordion.Body>
                    <div className="f-sex-men">
                      <button>
                        <MdCheckBoxOutlineBlank />
                        Mężczyźni
                      </button>
                    </div>
                    <div className="f-sex-women">
                      <button>
                        <MdCheckBoxOutlineBlank />
                        Kobiety
                      </button>
                    </div>
                    <div className="f-sex-unisex">
                      <button>
                        <MdCheckBoxOutlineBlank />
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
                        <MdCheckBoxOutlineBlank />
                        Poniżej 2000 USD
                      </button>
                    </div>
                    <div className="f-price-l5t">
                      <button>
                        <MdCheckBoxOutlineBlank />
                        2000 USD - 5000 USD
                      </button>
                    </div>
                    <div className="f-price-l10t">
                      <button>
                        <MdCheckBoxOutlineBlank />
                        5000 USD - 10 000 USD
                      </button>
                    </div>
                    <div className="f-price-m10t">
                      <button>
                        <MdCheckBoxOutlineBlank />
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
                        <MdCheckBoxOutlineBlank />
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
                        <MdCheckBoxOutlineBlank />
                        XS
                      </button>
                    </div>
                    <div className="f-size-s">
                      <button>
                        <MdCheckBoxOutlineBlank />S
                      </button>
                    </div>
                    <div className="f-size-m">
                      <button>
                        <MdCheckBoxOutlineBlank />M
                      </button>
                    </div>
                    <div className="f-size-l">
                      <button>
                        <MdCheckBoxOutlineBlank />L
                      </button>
                    </div>
                    <div className="f-size-xl">
                      <button>
                        <MdCheckBoxOutlineBlank />
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
                        <MdCheckBoxOutlineBlank />
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
                        <MdCheckBoxOutlineBlank />1
                      </button>
                    </div>
                    <div className="f-rating-2">
                      <button>
                        <MdCheckBoxOutlineBlank />2
                      </button>
                    </div>
                    <div className="f-rating-3">
                      <button>
                        <MdCheckBoxOutlineBlank />3
                      </button>
                    </div>
                    <div className="f-rating-4">
                      <button>
                        <MdCheckBoxOutlineBlank />4
                      </button>
                    </div>
                    <div className="f-rating-5">
                      <button>
                        <MdCheckBoxOutlineBlank />5
                      </button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
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
        <div className="spc-items on">
          <ShopFilter />
        </div>
      </div>
    </>
  );
}

export default shopPage;
