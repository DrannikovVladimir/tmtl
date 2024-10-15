const chinaResortsContainer = ReactDOM.createRoot(
  document.getElementById('china-resorts')
);

const ChinaResorts = () => {
  return (
    <ul className="article__resorts resorts">
      <li className="resorts__item">
        <a href="/country/china/hainan/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/china/hainan-resort.webp" />
            <img src="/img/tours/china/hainan-resort.jpg" alt="Хайнань" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/country/china/hainan/" className="resorts__item-link">
            <h3 className="resorts__item-title">Хайнань</h3>
          </a>
          <p className="resorts__item-text">Островная провинция, расположенная в самой южной части Китая. Так как остров Хайнань лежит на одной широте с Гавайскими островами, его чайто называют «Восточные Гавайи». Этот тропический рай представляет собой уникальное сочетание истории, культуры и природной красоты.</p>
          <a href="/country/china/hainan/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
    </ul>
  )
};

const element = <ChinaResorts />
chinaResortsContainer.render(element);