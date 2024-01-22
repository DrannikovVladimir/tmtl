const indiaResortsMinContainer = ReactDOM.createRoot(
  document.getElementById('india-resorts-list')
);

const IndiaResortsMin = () => {
  return (
    <ul className="article__resorts resorts resorts--list-min">
      <li className="resorts__item resorts__item--list-min">
        <a href="/country/india/goa/index.html" className="resorts__item-link resorts__item-link--list-min">
          <picture>
            <source type="image/webp" srcSet="/img/tours/india/goa-resort.webp" />
            <img src="/img/tours/india/goa-resort.jpg" alt="Гоа" className="resorts__item-image resorts__item-image--list-min" width="280" />
          </picture>
          <h3 className="resorts__item-title resorts__item-title--list-min">Гоа</h3>
        </a>
      </li>
    </ul>
  )
};

const element = <IndiaResortsMin />
indiaResortsMinContainer.render(element);