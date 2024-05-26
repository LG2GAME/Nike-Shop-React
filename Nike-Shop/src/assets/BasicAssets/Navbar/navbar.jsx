import "../basicSet.css";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "/img/logo.png";

function Navbar() {
  function navbarToggle() {
    const ulNavbar = document.getElementById("navUl");
    const navbar = document.getElementById("navbar");

    ["hidden", "show"].map((e) => {
      ulNavbar.classList.toggle(e);
      navbar.classList.toggle(e);
    });
  }

  return (
    <>
      <nav className={["navbar bg-color-black hidden"]} id="navbar">
        <div className="navbar-top">
          <div>
            <img src={logo} alt="nike logo" />
          </div>
          <div className="hamburger" onClick={navbarToggle}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        </div>
        <ul className="hidden" id="navUl">
          <li>
            <a href="#" id="home-page" className="h5" defaultChecked={false}>
              strona główna
            </a>
          </li>
          <li>
            <a href="#" id="shop-page" className="h5">
              sklep
            </a>
          </li>
          <li>
            <a href="#" id="sale-page" className="h5">
              wyprzedaż
            </a>
          </li>
          <li>
            <a href="#" id="state-shop-page" className="h5">
              sklepy stacjonarne
            </a>
          </li>
          <li>
            <a href="#" id="contact-page" className="h5">
              kontakt
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;