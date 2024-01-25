const headerContainer = ReactDOM.createRoot(
  document.getElementById('header')
);

// const Modal = ({isOpened, setIsOpened}) => {
//   const buttonCloseHandler = () => {
//     setIsOpened(() => !isOpened);
//   }

//   return (
//     <div className="modal__wrapper">
//       <div className="modal__content modal__content--booking">
//         <h2 className="modal__title modal__title--booking">Успейте приобрести выгодное предложение по лучшей цене!</h2>
//         <button onClick={buttonCloseHandler} className="modal__close modal__close--feedback">
//           <span className="visually-hidden">Закрыть</span>
//         </button>
//         <form action="post" className="feedback-form">
//           <ul className="feedback-form__list">
//             <li className="feedback-form__list-item">
//               <input type="text" id="name" name="name" className="feedback-form__input" placeholder="Имя" required />
//               <label htmlFor="name" className="visually-hidden">Имя</label>
//             </li>
//             <li className="feedback-form__list-item">
//               <input type="tel" id="phone" name="phone" className="feedback-form__input" required />
//               <label htmlFor="phone" className="visually-hidden">Телефон</label>
//             </li>
//           </ul>
//           <button className="feedback-form__submit" type="submit">Хочу подобрать тур</button>
//         </form>
//       </div>
//     </div>
//   );
// }

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
            <a href="tel:+7702000000000" className="phones-list__link">+7 (707) 886-36-33</a>
          </li>
          {/* <li className="phones-list__item">
            <a href="/pages/contacts.html" onClick={callbackHandler} rel="nofollow" className="phones-list__callback">Заказать обратный звонок</a>
          </li> */}
        </ul>
      </div>
      {/* {modalIsOpened ? <Modal isOpened={modalIsOpened} setIsOpened={setModalIsOpened} /> : false} */}
    </>
  )
};

const element = <Header />
headerContainer.render(element);