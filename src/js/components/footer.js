const footerContainer = ReactDOM.createRoot(
  document.getElementById('footer')
);

const Footer = () => {
  return (
    <div className="footer__container">
      <ul className="footer__block-list">
        <li className="footer__block-list__item footer__block-list__item--logo">
          <a href="/index.html" className="footer__logo">
            <img src="/img/Logo.png" width="50" height="50" alt="Логотип" className="footer__logo-image" />
          </a>
        </li>
        <li className="footer__block-list__item footer__block-list__item--tours">
          <ul className="footer__tours footer-tours-list">
            <li className="footer-tours-list__item">
              <a href="/tours/turkey/turkey.html" className="footer-tours-list__link">Турция</a>
            </li>
            <li className="footer-tours-list__item">
              <a href="/tours/uae/uae.html" className="footer-tours-list__link">ОАЭ</a>
            </li>
            <li className="footer-tours-list__item">
              <a href="/tours/egypt/egypt.html" className="footer-tours-list__link">Египет</a>
            </li>
            <li className="footer-tours-list__item">
              <a href="/tours/vietnam/vietnam.html" className="footer-tours-list__link">Вьетнам</a>
            </li>
            <li className="footer-tours-list__item">
              <a href="/tours/thailand/thailand.html" className="footer-tours-list__link">Таиланд</a>
            </li>
            <li className="footer-tours-list__item">
              <a href="/tours/tours-to-montnegro.html" className="footer-tours-list__link">Черногория</a>
            </li>
          </ul>
        </li>
        <li className="footer__block-list__item footer__block-list__item--menu">
          <ul className="main-nav__list main-nav__list--footer">
            <li className="main-nav__list-item">
              <a href="/pages/countries.html" className="main-nav__list-link">Страны</a>
            </li>
            <li className="main-nav__list-item">
              <a href="/pages/tours.html" className="main-nav__list-link">Горящие туры</a>
            </li>
            <li className="main-nav__list-item">
              <a href="/pages/about.html" className="main-nav__list-link">О нас</a>
            </li>
            <li className="main-nav__list-item">
              <a href="/pages/contacts.html" className="main-nav__list-link">Контакты</a>
            </li>
          </ul>
        </li>
        <li className="footer__block-list__item footer__block-list__item--contacts">
          <address className="footer__address">г.Караганда, ул.&#160;Мустафина&#160;81/3, офис&#160;206</address>
          <a href="tel:+7702000000000" className="phones-list__link phones-list__link--footer">+7 (707) 886-36-33</a>
          <ul className="footer__socials socials">
            <li className="socials__item">
              <a href="https://www.instagram.com/timetotravel_krg/" target="_blank" className="socials__link">
                <img src="/img/icon-instagram.svg" alt="Instagram" className="socials__icon" />
                <span className="visually-hidden">Instagram</span>
              </a>
            </li>
            <li className="socials__item">
              <a href="https://t.me/hottours_krg" target="_blank" className="socials__link">
                <img src="/img/icon-telegram-social.svg" alt="Telegram" className="socials__icon" />
                <span className="visually-hidden">Telegram</span>
              </a>
            </li>
            <li className="socials__item">
              <a href="https://wa.me/77078863633" target="_blank" className="socials__link">
                <img src="/img/icon-whatsup.svg" alt="Whatsup" className="socials__link" />
                <span className="visually-hidden">Whatsup</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <p className="footer__copy">&#169; «Time to Travel», 2023</p>
    </div>
  );
};

const element = <Footer />;
footerContainer.render(element);