const footerContainer = ReactDOM.createRoot(
  document.getElementById('footer')
);

const Socials = () => {
  return (
    <ul className="footer__socials socials socials--footer">
      <li className="socials__item socials__item--footer">
        <a href="https://www.instagram.com/timetotravel_krg/" target="_blank" className="socials__link socials__link--footer">
          <img src="/img/icon-instagram.svg" alt="Instagram" className="socials__icon" />
          <span className="visually-hidden">Instagram</span>
        </a>
      </li>
      <li className="socials__item socials__item--footer">
        <a href="https://t.me/hottours_krg" target="_blank" className="socials__link socials__link--footer">
          <img src="/img/icon-telegram-social.svg" alt="Telegram" className="socials__icon" />
          <span className="visually-hidden">Telegram</span>
        </a>
      </li>
      <li className="socials__item socials__item--footer">
        <a href="https://wa.me/77078863633" target="_blank" className="socials__link socials__link--footer">
          <img src="/img/icon-whatsup.svg" alt="Whatsup" className="socials__link" />
          <span className="visually-hidden">Whatsup</span>
        </a>
      </li>
    </ul>
  );
};

const HeaderAddress = () => {
  const [mapIsOpened, setMapIsOpened] = React.useState(false);

  const mapClickHandler = (e) => {
    e.preventDefault();
    setMapIsOpened(() => !mapIsOpened);
  };

  return (
    <>
      <address className="header__address__container">
        <p className="header__address__street">Мустафина 81/3, офис 206</p>
        <p className="header__address__city">г. Караганда</p>            
        <a href="/info/contacts/index.html" onClick={mapClickHandler} className="phones-list__callback">Схема проезда к офису</a>
      </address>
      {mapIsOpened
        ? (<section className="modal modal--map">
            <div className="modal__wrapper modal__wrapper--map">
              <div className="modal__content">
                <h2 className="modal__title--map">Турагентство «Time to Travel»</h2>
                <p className="modal__text--map">г. Караганда, ул. Мустафина 81/3, офис 206</p>
                <p className="modal__text--map">пн-пт 10:00-19:00</p>
                <button onClick={mapClickHandler} className="modal__close modal__close--map">
                  <span className="visually-hidden">Закрыть</span>
        
                </button>
                <div style={{ position:'relative', overflow: 'hidden' }}>
                  <a href="https://yandex.kz/maps/ru/org/time_to_travel/196365210130/?lang=ru&utm_medium=mapframe&utm_source=maps" style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}>Time to travel</a>
                  <a href="https://yandex.kz/maps/ru/164/karaganda/category/travel_agency/184106432/?lang=ru&utm_medium=mapframe&utm_source=maps" style={{color:'#eee', fontSize: '12px', position: 'absolute', top: '14px'}}>Турагентство в Караганде</a>
                  <iframe src="https://yandex.kz/map-widget/v1/?ll=73.112339%2C49.813474&mode=search&oid=196365210130&ol=biz&z=16.99" width={680} height={400} frameBorder={0} allowFullScreen={true} style={{position: 'relative'}}></iframe>
                </div>
              </div>
            </div>
          </section>)
        : null
      }
    </>
  )
};

const ModalPhones = ({isOpened, setIsOpened}) => {
  const [phoneValue, setPhoneValue] = React.useState('');
  const [feedback, setFeedback] = React.useState(false);
  const [error, setError] = React.useState(false);

  const phoneValueHandler = ({ target }) => {
    const lastLetter = getLastLetter(target.value);
    if (target.value.length < phoneValue.length) {
      setPhoneValue(() => target.value);
      return;
    }
    if(target.value.length < 2 && target.value === '+') {
      setPhoneValue(() => `${target.value}7 (`);
      return;
    }
    if (target.value.length < 2 && target.value === '7') {
      setPhoneValue(() => `+7 (`);
      return;
    }
    if (target.value.length < 2 && target.value === '8') {
      setPhoneValue(() => `+7 (`)
      return;
    }
    if (target.value.length === 8) {
      setPhoneValue(() => `${phoneValue}) ${lastLetter}`)
      return;
    }
    if (target.value.length === 13) {
      setPhoneValue(() => `${phoneValue}-${lastLetter}`)
      return;
    }
    if (target.value.length === 16) {
      setPhoneValue(() => `${phoneValue}-${lastLetter}`)
      return;
    }
    if (target.value.length >= 19) {
      return;
    }
    setPhoneValue(() => target.value);
  }
  const buttonCloseHandler = () => {
    setIsOpened(() => !isOpened);
    setFeedback(() => false);
    setError(() => false);
  }

  const callbackFormHandler = async (e) => {
    e.preventDefault();
    const phone = JSON.stringify({ phone: phoneValue });
    try {
      await fetch('/api/phone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: phone,
      });
      setFeedback(() => !feedback);
    } catch (error) {
      console.log(error);
      setError(() => true);
    }
  } 

  return (
    <section className="modal">
      <div className="modal__wrapper">
        <div className="modal__content">
          
          <button onClick={buttonCloseHandler} className="modal__close">
            <span className="visually-hidden">Закрыть</span>
          </button>
          {feedback 
            ? (
                <>
                  <h2 className="modal__title modal__title--feedback">Спасибо что решили доверить нам свой отдых, мы вам сейчас перезвоним!</h2>
                  <p className="modal__text">А пока можете почитать о популярных направлениях, курортах и отелях, а также посмотреть туры</p>
                  <ul className="pages__list countries countries--feedback">
                    <li className="countries__item countries__item--feedback">
                      <a href="/country/thailand/index.html" className="countries__item-link countries__item-link--feedback">
                        <h3 className="countries__item-title countries__item-title--feedback tabs__title tabs__title--thailand">Таиланд</h3>
                      </a>
                    </li>
                    <li className="countries__item countries__item--feedback">
                      <a href="/country/uae/index.html" className="countries__item-link countries__item-link--feedback">
                        <h3 className="countries__item-title countries__item-title--feedback tabs__title tabs__title--uae">ОАЭ</h3>
                      </a>
                    </li>
                    <li className="countries__item countries__item--feedback">
                      <a href="/country/vietnam/index.html" className="countries__item-link countries__item-link--feedback">
                        <h3 className="countries__item-title countries__item-title--feedback tabs__title tabs__title--vietnam">Вьетнам</h3>
                      </a>
                    </li>
                    <li className="countries__item countries__item--feedback">
                      <a href="/country/egypt/index.html" className="countries__item-link countries__item-link--feedback">
                        <h3 className="countries__item-title countries__item-title--feedback tabs__title tabs__title--egypt">Египет</h3>
                      </a>
                    </li>
                    <li className="countries__item countries__item--feedback">
                      <a href="/country/turkey/index.html" className="countries__item-link countries__item-link--feedback">
                        <h3 className="countries__item-title countries__item-title--feedback tabs__title tabs__title--turkey">Турция</h3>
                      </a>
                    </li>
                  </ul>
                </>
              )
            : (          
                <>
                  <h2 className="modal__title">Оставьте ваш телефон и мы обязательно вам перезвоним!</h2>
                  <form action="post" id="callback-form" onSubmit={callbackFormHandler} className="feedback-form">
                    <ul className="feedback-form__list">
                      <li className="feedback-form__list-item">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="feedback-form__input"
                          required
                          placeholder="+7(___)___-__-__"
                          value={phoneValue}
                          onChange={phoneValueHandler}
                        />
                        <label htmlFor="phone" className="visually-hidden">Телефон</label>
                      </li>
                    </ul>
                    <button className="feedback-form__submit" type="submit">Перезвоните мне</button>
                  </form>
                </>
          )}
        </div>
      </div>
    </section>
  );
}

const HeaderPhones = () => {
  const [modalIsOpened, setModalIsOpened] = React.useState(false);
  
  const callbackHandler = (e) => {
    e.preventDefault();
    setModalIsOpened(() => !modalIsOpened);    
  }
  
  return (
    <>
      <ul className="phones-list  phones-list--footer">
        <li className="phones-list__item">
          <p className="phones-list__time" href="tel:+77078863633">Работаем с 10:00 до 19:00</p>
        </li>
        <li className="phones-list__item">
          <a className="phones-list__link" href="tel:+77078863633">+7 (707) 886-36-33</a>
        </li>
        <li className="phones-list__item">
          <a href="/pages/contacts.html" onClick={callbackHandler} className="phones-list__callback">Заказать обратный звонок</a>
        </li>
      </ul>
      {modalIsOpened ? <ModalPhones isOpened={modalIsOpened} setIsOpened={setModalIsOpened} /> : false}
    </>
  );
}

const Footer = () => {
  return (
    <div className="footer__container">
      <ul className="footer__block-list">
        <li className="footer__block-list__item footer__block-list__item--logo">
          <a href="/index.html" className="footer__logo">
            <img src="/img/Logo.png" width="50" height="50" alt="Логотип" className="footer__logo-image" />
          </a>
          <Socials />
          <p className="footer__copy">&#169; «Time to Travel», 2024</p>
          
        </li>
        <li className="footer__block-list__item footer__block-list__item--tours">
          <h3 className="footer__block-list__item-title">Популярные страны</h3>
          <ul className="footer__list footer-list">
            <li className="footer-list__item">
              <a href="/country/turkey/index.html" className="footer-list__link">Турция</a>
            </li>
            <li className="footer-list__item">
              <a href="/country/uae/index.html" className="footer-list__link">ОАЭ</a>
            </li>
            <li className="footer-list__item">
              <a href="/country/egypt/index.html" className="footer-list__link">Египет</a>
            </li>
            <li className="footer-list__item">
              <a href="/country/vietnam/index.html" className="footer-list__link">Вьетнам</a>
            </li>
            <li className="footer-list__item">
              <a href="/country/thailand/index.html" className="footer-list__link">Таиланд</a>
            </li>
            <li className="footer-list__item">
              <a href="/country/india/index.html" className="footer-list__link">Индия (Гоа)</a>
            </li>
            <li className="footer-list__item">
              <a href="/country/china/hainan/index.html" className="footer-list__link">Китай (о.Хайнань)</a>
            </li>
          </ul>
        </li>
        <li className="footer__block-list__item footer__block-list__item--menu">
          <h3 className="footer__block-list__item-title">Полезные ссылки</h3>
          <ul itemScope itemType="http://schema.org/SiteNavigationElement" className="footer__list footer-list">
            <li className="footer-list__item">
              <a itemProp="url" href="/tours/index.html" className="footer-list__link">Туры</a>
            </li>
            <li className="footer-list__item">
              <a itemProp="url" href="/info/credit/index.html" className="footer-list__link">Рассрочка</a>
            </li>
            <li className="footer-list__item">
              <a itemProp="url" href="/country/index.html" className="footer-list__link">Страны</a>
            </li>
            <li className="footer-list__item">
              <a itemProp="url" href="/hottours/index.html" className="footer-list__link">Горящие туры</a>
            </li>
            <li className="footer-list__item">
              <a itemProp="url" href="/articles/articles.html" className="footer-list__link">Статьи</a>
            </li>
            <li className="footer-list__item">
              <a itemProp="url" href="/info/about/index.html" className="footer-list__link">О нас</a>
            </li>
            <li className="footer-list__item">
              <a itemProp="url" href="/info/contacts/index.html" className="footer-list__link">Контакты</a>
            </li>
            
          </ul>
        </li>
        <li className="footer__block-list__item footer__block-list__item--contacts">
          <h3 className="footer__block-list__item-title">Наши контакты</h3>
          <HeaderAddress />
          <br />
          <HeaderPhones />
          
        </li>
      </ul>
    </div>
  );
};

const element = <Footer />;
footerContainer.render(element);