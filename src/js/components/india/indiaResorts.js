const indiaResortsContainer = ReactDOM.createRoot(
  document.getElementById('india-resorts')
);

const IndiaResorts = () => {
  return (
    <ul className="article__resorts resorts">
      <li className="resorts__item">
        <a href="/country/india/goa/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/india/goa-resort.webp" />
            <img src="/img/tours/india/goa-resort.jpg" alt="Гоа" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/country/india/goa/" className="resorts__item-link">
            <h3 className="resorts__item-title">Гоа</h3>
          </a>
          <p className="resorts__item-text">Гоа, известный своими золотыми пляжами, бурной ночной жизнью и португальской архитектурой, предлагает уникальное сочетание индийской и португальской культур. Здесь можно наслаждаться белоснежными пляжами с кокосовыми пальмами, исследовать заповедники дикой природы и пробовать блюда местной кухни.</p>
          <a href="/country/india/goa/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
    </ul>
  )
};

const element = <IndiaResorts />
indiaResortsContainer.render(element);