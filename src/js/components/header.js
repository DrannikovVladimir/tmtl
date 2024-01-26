const headerContainer = ReactDOM.createRoot(
  document.getElementById('header')
);

const getLastLetter = (str) => {
  return str[str.length - 1];
};

const Modal = ({isOpened, setIsOpened}) => {
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

const Header = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [modalIsOpened, setModalIsOpened] = React.useState(false);
  
  const mobileMenuHandler = () => {
    setIsOpened(() => !isOpened)
  };
  
  const getClassNav = () => isOpened ? 'header__nav main-nav main-nav--show' : 'header__nav main-nav';
  const getClassButton = () => isOpened ? 'main-nav__button main-nav__button--opened' : 'main-nav__button main-nav__button--closed';
  const callbackHandler = (e) => {
    e.preventDefault();
    setModalIsOpened(() => !modalIsOpened);    
  }

  const classNav = getClassNav();
  const classButton = getClassButton();

  return (
    <>
      <div className="header__container">
        <a href="/index.html" className="header__logo">
          <img src="/img/Logo.png" width="50" height="50" alt="Логотип" className="header__logo-image" />
        </a>
        <nav className={classNav}>
          <button type="button" className={classButton} onClick={mobileMenuHandler}>
            <span className="visually-hidden">Мобильное меню</span>
          </button>
          <ul className="main-nav__list">
            <li className="main-nav__list-item">
              <a href="/country/index.html" className="main-nav__list-link">Страны</a>
            </li>
            <li className="main-nav__list-item">
              <a href="/tours/index.html" className="main-nav__list-link">Горящие туры</a>
            </li>
            <li className="main-nav__list-item">
              <a href="/info/about/index.html" className="main-nav__list-link">О нас</a>
            </li>
            <li className="main-nav__list-item">
              <a href="/info/contacts/index.html" className="main-nav__list-link">Контакты</a>
            </li>
          </ul>
        </nav>
        <ul className="header__phones phones-list">
          <li className="phones-list__item">
            <a href="tel:+77078863633" className="phones-list__link">+7 (707) 886-36-33</a>
          </li>
          <li className="phones-list__item">
            <a href="/pages/contacts.html" onClick={callbackHandler} rel="nofollow" className="phones-list__callback">Заказать обратный звонок</a>
          </li>
        </ul>
      </div>
      {modalIsOpened ? <Modal isOpened={modalIsOpened} setIsOpened={setModalIsOpened} /> : false}
    </>
  )
};

const element = <Header />
headerContainer.render(element);