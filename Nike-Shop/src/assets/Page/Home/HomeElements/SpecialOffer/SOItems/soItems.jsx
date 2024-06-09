/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */

// import "../SpecialOffer.css";
import soItemData from "./soItemsData.jsx";

function imgSwitcher() {
  const imgArr = [
    document.getElementById("whiteTheme"),
    document.getElementById("blackTheme"),
  ];

  for (let i = 0; i < imgArr.length; i++) {
    imgArr[i].addEventListener("click", () => {
      imgArr[i].classList.toggle("clicked");
    });
  }
}

function ItemBuild(props) {
  return (
    <>
      <section
        className={
          ["container min-height am98-section "] +
          `${props.bgcolor + " " + props.theme}`
        }
      >
        <section className="shoe " id={props.theme}>
          <img src={props.shoe} />
        </section>
        <section className="atc">
          <div className="atc-logo">
            <img src={props.logo} />
          </div>
          <div className="atc-btns">
            <div className="atc-btns-price h4">{props.price}</div>
            <div className="atc-btns-addToCard">
              <a href="#" className="h3">
                Dodaj do koszyka
              </a>
            </div>
          </div>
          <div className="atc-name h3">{props.name}</div>
        </section>
        <section className="desc">
          <div className="atc-logo">
            <img src={props.logo} />
          </div>
          <div className="desc-name h3">{props.name}</div>
          <div className="desc-desc h4">{props.desc}</div>
        </section>
      </section>
    </>
  );
}
window.addEventListener("load", imgSwitcher);

function soItem() {
  return soItemData.map((item) => {
    return (
      <ItemBuild
        bgcolor={item.bgcolor}
        shoe={item.shoe}
        logo={item.logo}
        price={item.price}
        name={item.name}
        desc={item.desc}
        theme={item.theme}
      />
    );
  });
}

export default soItem;
