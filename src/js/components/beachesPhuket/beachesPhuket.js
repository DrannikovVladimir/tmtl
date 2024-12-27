const beachesPhuketContainer = ReactDOM.createRoot(
  document.getElementById('beaches-phuket-container')
);

const BeachesPhuketComponents = () => {
  return (
    <section>
      <h2 className="article__title--list-h3">Пляжи Пхукета</h2>
      <div className="beaches-menu">
        <ul className="beaches-menu__list">
          <li className="beaches-menu__item">
              <a href="#" className="beaches-menu__link">Патонг<span className="beaches-menu__count">3.8 км</span></a>
          </li>
          <li className="beaches-menu__item">
              <a href="#" className="beaches-menu__link">Карон<span className="beaches-menu__count">3.2 км</span></a>
          </li>
          <li className="beaches-menu__item">
              <a href="#" className="beaches-menu__link">Ката<span className="beaches-menu__count">1.5 км</span></a>
          </li>
          <li className="beaches-menu__item">
              <a href="#" className="beaches-menu__link">Камала<span className="beaches-menu__count">2 км</span></a>
          </li>
          <li className="beaches-menu__item">
              <a href="#" className="beaches-menu__link">Най Харн<span className="beaches-menu__count">0.7 км</span></a>
          </li>
          <li className="beaches-menu__item">
            <a href="#" className="beaches-menu__link">Сурин<span className="beaches-menu__count">0.8 км</span></a>
          </li>
          <li className="beaches-menu__item">
              <a href="#" className="beaches-menu__link">Банг Тао<span className="beaches-menu__count">6.0 км</span></a>
          </li>
          <li className="beaches-menu__item">
              <a href="#" className="beaches-menu__link">Май Кхао<span className="beaches-menu__count">11.0 км</span></a>
          </li>
          <li className="beaches-menu__item">
              <a href="#" className="beaches-menu__link">Най Янг<span className="beaches-menu__count">2.8 км</span></a>
          </li>
          <li className="beaches-menu__item">
              <a href="#" className="beaches-menu__link">Раваи<span className="beaches-menu__count">2.5 км</span></a>
          </li>
          <li className="beaches-menu__item">
              <a href="#" className="beaches-menu__link">Лайан<span className="beaches-menu__count">1.0 км</span></a>
          </li>
          <li className="beaches-menu__item">
              <a href="#" className="beaches-menu__link">Фридом<span className="beaches-menu__count">0.3 км</span></a>
          </li>
          <li className="beaches-menu__item">
              <a href="#" className="beaches-menu__link">Ката Ной<span className="beaches-menu__count">0.7 км</span></a>
          </li>
          <li className="beaches-menu__item">
              <a href="#" className="beaches-menu__link">Найтон<span className="beaches-menu__count">0.8 км</span></a>
          </li>
          <li className="beaches-menu__item">
              <a href="#" className="beaches-menu__link">Панва<span className="beaches-menu__count">0.5 км</span></a>
          </li>
        </ul>
      </div>
    </section>
  )
};

beachesPhuketContainer.render(<BeachesPhuketComponents />);