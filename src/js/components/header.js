const headerContainer = ReactDOM.createRoot(
  document.getElementById('header')
);

const Header = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [callbackIsOpened, setCallbackIsOpened] = React.useState(false);
  
  const mobileMenuHandler = () => {
    setIsOpened(() => !isOpened)
  };
  
  const getClassNav = () => isOpened ? 'header__nav main-nav main-nav--show' : 'header__nav main-nav';
  const getClassButton = () => isOpened ? 'main-nav__button main-nav__button--opened' : 'main-nav__button main-nav__button--closed';
  const callbackHandler = (e) => {
    e.preventDefault();
    setCallbackIsOpened(() => !callbackIsOpened);    
  }

  const classNav = getClassNav();
  const classButton = getClassButton();

  return (
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
          <a href="tel:+7702000000000" className="phones-list__link">+7 (707) 886-36-33</a>
        </li>
        {/* <li className="phones-list__item">
          <a href="/pages/contacts.html" onClick={callbackHandler} rel="nofollow" className="phones-list__callback">Заказать обратный звонок</a>
        </li> */}
      </ul>
    </div>
  )
};

const element = <Header />
headerContainer.render(element);