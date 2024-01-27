const chainaResortsMinContainer = ReactDOM.createRoot(
  document.getElementById('chaina-resorts-list')
);

const ChinaResortsMin = () => {
  return (
    <ul className="article__resorts resorts resorts--list-min">
      <li className="resorts__item resorts__item--list-min">
        <a href="/country/china/hainan/index.html" className="resorts__item-link resorts__item-link--list-min">
          <picture>
            <source type="image/webp" srcSet="/img/tours/china/hainan-resort.webp" />
            <img src="/img/tours/china/hainan-resort.jpg" alt="Хайнань" className="resorts__item-image resorts__item-image--list-min" width="280" />
          </picture>
          <h3 className="resorts__item-title resorts__item-title--list-min">Хайнань</h3>
        </a>
      </li>
    </ul>
  )
};

const element = <ChinaResortsMin />
chinaResortsMinContainer.render(element);