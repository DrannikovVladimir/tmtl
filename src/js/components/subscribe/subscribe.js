const subscribeContainer = ReactDOM.createRoot(
  document.getElementById('subscribe-container')
);

const Subscribe = () => {
  return (
    <section className="subs">
        <div className="subs__inner-wrapper">
          <div className="subs__container">
            <div className="subs__content">
              <h2 className="visually-hidden">Горящие туры, лучшие предложения, новости</h2>
              <p className="subs__subtitle">Хотите узнавать первым о горящих турах, лучших предложениях, актуальных новостях из мира туризма. Тогда подписывайтесь на нашу рассылку!</p>
              
                <form className="subs__form form-subs">
                  <div className="form-subs__wrapper">
                    <label className="visually-hidden" for="emailInput">Введите свою почту:</label>
                    <input type="email" class="form-subs__input" name="emailInput" id="email" />
                    <button type="submit" className="subs__button">Подписаться на рассылку</button>
                  </div>
                </form>
                {/* <ul className="subs__socials socials">
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
                      <img src="/img/icon-whatsup.svg" alt="Whatsup" className="socials__icon" />
                      <span className="visually-hidden">Whatsup</span>
                    </a>
                  </li>
                </ul> */}
              
            </div>
          </div>
        </div>
      </section>
  );
};

const element = <Subscribe />
subscribeContainer.render(element);