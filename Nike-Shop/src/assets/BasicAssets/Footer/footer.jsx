import "../basicSet.css";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.css";
import Accordion from "react-bootstrap/Accordion";
import FqAcc from "./FooterSet/STFooterItem/footerQNA";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <section className="min-height footer">
        <section className="footer-qna bg-color-white">
          <div className="container">
            <h1>Q&A</h1>
            <div
              className="accordion accordion-flush footer-qna-acc"
              id="nkQNAAccordion"
            >
              <Accordion>
                <FqAcc />
              </Accordion>
            </div>
          </div>
        </section>
        <section className="footer-ftr bg-color-black">
          <section className="ftr-ctn container">
            <div className="ftr-links">
              <div>
                <ul>
                  <li>
                    <a href="#" className="h5">
                      karty upominkowe
                    </a>
                  </li>
                  <li>
                    <a href="#" className="h5">
                      znajdź sklep
                    </a>
                  </li>
                  <li>
                    <a href="#" className="h5">
                      nike journal
                    </a>
                  </li>
                  <li>
                    <a href="#" className="h5">
                      zostań członkiem
                    </a>
                  </li>
                  <li>
                    <a href="#" className="h5">
                      rabat dla studentów
                    </a>
                  </li>
                  <li>
                    <a href="#" className="h5">
                      prześlij opinie
                    </a>
                  </li>
                  <li>
                    <a href="#" className="h5">
                      kody promocyjne
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#" className="h4">
                      uzyskaj pomoc
                    </a>
                  </li>
                  <li>
                    <a href="#" className="h5">
                      status zamówień
                    </a>
                  </li>
                  <li>
                    <a href="#" className="h5">
                      wysyłka i dostawy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="h5">
                      zwroty
                    </a>
                  </li>
                  <li>
                    <a href="#" className="h5">
                      opcje płatności
                    </a>
                  </li>
                  <li>
                    <a href="#" className="h5">
                      skontaktuj się z nami
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#" className="h4">
                      o nike
                    </a>
                  </li>
                  <li>
                    <a href="#" className="h5">
                      aktualności
                    </a>
                  </li>
                  <li>
                    <a href="#" className="h5">
                      praca
                    </a>
                  </li>
                  <li>
                    <a href="#" className="h5">
                      inwestorzy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="h5">
                      ochrona
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#" className="h4">
                      dołącz do nas
                    </a>
                  </li>
                  <li>
                    <a href="#" className="h5">
                      Nike APP
                    </a>
                  </li>
                  <li>
                    <a href="#" className="h5">
                      Nike Run Club
                    </a>
                  </li>
                  <li>
                    <a href="#" className="h5">
                      Nike Training Club
                    </a>
                  </li>
                  <li>
                    <a href="#" className="h5">
                      SNKRS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ftr-icons">
              <a href="#">
                <RiTwitterXLine />
              </a>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <IoLogoYoutube />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

// Navbar()

export default Footer;
