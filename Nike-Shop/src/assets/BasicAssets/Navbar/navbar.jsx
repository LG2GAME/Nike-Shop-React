import logo from "/img/logo.png";

function Navbar() {
  function navbarToggle() {
    const ulNavbar = document.getElementById("navUl");
    const navbar = document.getElementById("navbar");

    ["hidden", "show"].forEach((e) => {
      ulNavbar.classList.toggle(e);
      navbar.classList.toggle(e);
    });

    if (navbar.classList.contains("show")) {
      document.body.style.overflow = "hidden"; // Blokowanie scrollowania
    } else {
      document.body.style.overflow = ""; // Odblokowanie scrollowania
    }
  }

  return (
    <>
      <nav className="navbar bg-color-black hidden" id="navbar">
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
            <a
              href="/home"
              id="home-page"
              className="h5"
              defaultChecked={false}
            >
              strona główna
            </a>
          </li>
          <li>
            <a href="/shop" id="shop-page" className="h5">
              sklep
            </a>
          </li>
          <li>
            <a href="/sale" id="sale-page" className="h5">
              wyprzedaż
            </a>
          </li>
          <li>
            <a href="/state-shop" id="state-shop-page" className="h5">
              sklepy stacjonarne
            </a>
          </li>
          <li>
            <a href="/contact" id="contact-page" className="h5">
              kontakt
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
