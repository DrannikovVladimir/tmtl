const headerContainer = ReactDOM.createRoot(
  document.getElementById('header')
);

const getLastLetter = (str) => {
  return str[str.length - 1];
};

const Modal = ({isOpened, setIsOpened}) => {
  const [phoneValue, setPhoneValue] = React.useState('');
  const [status, setStatus] = React.useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = React.useState('');
  const phoneInputRef = React.useRef(null);
  const maskRef = React.useRef(null);

  const initializeMask = React.useCallback(() => {
    console.log("Initializing mask, phoneInputRef:", phoneInputRef.current);
    if (phoneInputRef.current) {
      if (maskRef.current) {
        console.log("Destroying existing mask");
        maskRef.current.destroy();
      }
      console.log("Creating new mask");
      maskRef.current = IMask(phoneInputRef.current, {
        mask: '+{7}(000)000-00-00',
        lazy: false,
      });

      maskRef.current.on('accept', () => {
        console.log("Mask accepted value:", maskRef.current.value);
        setPhoneValue(maskRef.current.value);
      });
    } else {
      console.warn("Phone input element not found in DOM");
    }
  }, []);

  React.useEffect(() => {
    console.log("Effect running, status:", status);
    const timer = setTimeout(() => {
      initializeMask();
    }, 0);

    return () => {
      clearTimeout(timer);
      if (maskRef.current) {
        console.log("Cleaning up mask");
        maskRef.current.destroy();
      }
    };
  }, [initializeMask, status]);

  const resetForm = () => {
    setPhoneValue('');
    setStatus('idle');
    setErrorMessage('');
    if (maskRef.current) {
      maskRef.current.value = '';
    }
    initializeMask();
  };

  const buttonCloseHandler = () => {
    setIsOpened(false);
    resetForm();
  };

  const callbackFormHandler = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    if (phoneValue.replace(/\D/g, '').length !== 11) {
      setStatus('error');
      setErrorMessage('Пожалуйста, введите корректный номер телефона');
      return;
    }

    const phone = JSON.stringify({ phone: phoneValue });
    
    try {
      const response = await fetch('/api/phone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: phone,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setStatus('success');
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      if (error.message.includes('Failed to fetch')) {
        setErrorMessage('Не удалось связаться с сервером. Пожалуйста, проверьте ваше интернет-соединение и попробуйте снова.');
      } else if (error.message.includes('HTTP error')) {
        setErrorMessage('Произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте позже.');
      } else {
        setErrorMessage('Произошла неизвестная ошибка. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.');
      }
    }
  };

  const renderContent = () => {
    switch (status) {
      case 'success':
        return (
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
        );
      case 'error':
        return (
          <>
            <h2 className="modal__title modal__title--error">Произошла ошибка</h2>
            <p className="modal__text modal__text--error">{errorMessage}</p>
            <button className="feedback-form__submit" onClick={resetForm}>Попробовать снова</button>
          </>
        );
        default:
          return (
            <>
              <h2 className="modal__title">Оставьте ваш телефон и мы обязательно вам перезвоним!</h2>
              <form onSubmit={callbackFormHandler} className="feedback-form">
                <ul className="feedback-form__list">
                  <li className="feedback-form__list-item">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="feedback-form__input"
                      required
                      ref={phoneInputRef}
                      disabled={status === 'submitting'}
                      onFocus={() => {
                        console.log("Input focused, re-initializing mask");
                        initializeMask();
                      }}
                    />
                    <label htmlFor="phone" className="visually-hidden">Телефон</label>
                  </li>
                </ul>
                <button className="feedback-form__submit" type="submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Отправка...' : 'Перезвоните мне'}
                </button>
              </form>
            </>
          );
    }
  };

  return (
    <section className="modal">
      <div className="modal__wrapper">
        <div className="modal__content">
          <button onClick={buttonCloseHandler} className="modal__close">
            <span className="visually-hidden">Закрыть</span>
          </button>
          {renderContent()}
        </div>
      </div>
    </section>
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
        <a href="/info/contacts/index.html" onClick={mapClickHandler} className="header__address__link phones-list__callback">Схема проезда к офису</a>
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
}

const HeaderPhones = () => {
  const [modalIsOpened, setModalIsOpened] = React.useState(false);
  
  const callbackHandler = (e) => {
    e.preventDefault();
    setModalIsOpened(() => !modalIsOpened);    
  }
  
  return (
    <>
      <ul className="header__phones phones-list">
        <li className="phones-list__item">
          <p className="phones-list__time">Работаем с 10:00 до 19:00</p>
        </li>
        <li className="phones-list__item">
          <a href="tel:+77078863633" className="phones-list__link">+7 (707) 886-36-33</a>
        </li>
        <li className="phones-list__item">
          <a href="/pages/contacts.html" onClick={callbackHandler} className="phones-list__callback">Заказать обратный звонок</a>
        </li>
      </ul>
      {modalIsOpened ? <Modal isOpened={modalIsOpened} setIsOpened={setModalIsOpened} /> : false}
    </>
  );
}

const Credit = () => {
  return (
    <section className="credit">
      <a href="/info/credit/index.html">
        <div className="credit__container">
          <p className="credit__subtitle">
            Отдыхайте сейчас платите 
            <span className="credit__subtitle__text--accent"> потом</span>
          </p>
          <h2 className="credit__title">
            Туры в рассрочку 
            <span className="credit__title__text--small"> до</span>
            <span className="credit__title__text--accent"> 3 000 000</span>
            <span className="credit__title__text--small"> тг.</span>
          </h2>
        </div>
      </a>
    </section>
  );
}

const Header = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  
  const mobileMenuHandler = () => {
    setIsOpened(() => !isOpened)
  };
  
  const getClassNav = () => isOpened ? 'header__nav main-nav main-nav--show' : 'header__nav main-nav';
  const getClassButton = () => isOpened ? 'main-nav__button main-nav__button--opened' : 'main-nav__button main-nav__button--closed';

  const classNav = getClassNav();
  const classButton = getClassButton();

  return (
    <>
      <Credit />
      <div className="header__container">
        <a href="/index.html" className="header__logo">
          <img src="/img/Logo.png" width="50" height="50" alt="Логотип" className="header__logo-image" />
        </a>
        <nav className={classNav}>
          <button type="button" className={classButton} onClick={mobileMenuHandler}>
            <span className="visually-hidden">Мобильное меню</span>
          </button>
          <ul className="main-nav__list" itemScope itemType="http://schema.org/SiteNavigationElement">
          <li className="main-nav__list-item">
              <a itemProp="url" href="/tours/index.html" className="main-nav__list-link">Поиск тура</a>
            </li>
            <li className="main-nav__list-item">
              <a itemProp="url" href="/country/index.html" className="main-nav__list-link">Страны</a>
            </li>
            <li className="main-nav__list-item">
              <a itemProp="url" href="/hottours/index.html" className="main-nav__list-link">Горящие туры</a>
            </li>
            <li className="main-nav__list-item">
              <a itemProp="url" href="/articles/articles.html" className="main-nav__list-link">Статьи</a>
            </li>
            <li className="main-nav__list-item">
              <a itemProp="url" href="/info/about/index.html" className="main-nav__list-link">О нас</a>
            </li>
            <li className="main-nav__list-item">
              <a itemProp="url" href="/info/contacts/index.html" className="main-nav__list-link">Контакты</a>
            </li>
          </ul>
        </nav>
        <div className="header__address">
          <HeaderAddress />
        </div>
        <HeaderPhones />
      </div>
      
    </>
  )
};

const element = <Header />
headerContainer.render(element);