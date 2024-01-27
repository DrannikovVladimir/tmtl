const chinaResortsContainer = ReactDOM.createRoot(
  document.getElementById('china-resorts')
);

const ChinaResorts = () => {
  return (
    <ul className="article__resorts resorts">
      <li className="resorts__item">
        <a href="/country/china/hainan/index.html" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/china/hainan/index.webp" />
            <img src="/img/tours/china/hainan/index.jpg" alt="Хайнань" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/country/china/hainan/index.html" className="resorts__item-link">
            <h3 className="resorts__item-title">Хайнань</h3>
          </a>
          <p className="resorts__item-text"></p>
          <a href="/country/china/hainan/index.html" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
    </ul>
  )
};

const element = <ChinaResorts />
chinaResortsContainer.render(element);