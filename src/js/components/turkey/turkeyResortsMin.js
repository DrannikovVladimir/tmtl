const turkeyResortsMinContainer = ReactDOM.createRoot(
  document.getElementById('turkey-resorts-list')
);

const TurkeyResortsMin = () => {
  return (
    <ul className="article__resorts resorts resorts--list-min">
      <li className="resorts__item resorts__item--list-min">
        <a href="/country/turkey/antalya/" className="resorts__item-link resorts__item-link--list-min">
          <picture>
            <source type="image/webp" srcSet="/img/tours/turkey/antalya-resort.webp" />
            <img src="/img/tours/turkey/antalya-resort.jpg" alt="Анталья" className="resorts__item-image resorts__item-image--list-min" width="280" />
          </picture>
          <h3 className="resorts__item-title resorts__item-title--list-min">Анталья</h3>
        </a>
      </li>
      <li className="resorts__item resorts__item--list-min">
        <a href="/country/turkey/kemer/" className="resorts__item-link resorts__item-link--list-min">
          <picture>
            <source type="image/webp" srcSet="/img/tours/turkey/kemer-resort.webp" />
            <img src="/img/tours/turkey/kemer-resort.jpg" alt="Кемер" className="resorts__item-image resorts__item-image--list-min" width="280" />
          </picture>
          <h3 className="resorts__item-title resorts__item-title--list-min">Кемер</h3>
        </a>
      </li>
      <li className="resorts__item resorts__item--list-min">
        <a href="/country/turkey/bodrum/" className="resorts__item-link resorts__item-link--list-min">
          <picture>
            <source type="image/webp" srcSet="/img/tours/turkey/bodrum-resort.webp" />
            <img src="/img/tours/turkey/bodrum-resort.jpg" alt="Бодрум" className="resorts__item-image resorts__item-image--list-min" width="280" />
          </picture>
          <h3 className="resorts__item-title resorts__item-title--list-min">Бодрум</h3>
        </a>
      </li>
      <li className="resorts__item resorts__item--list-min">
        <a href="/country/turkey/alanya/" className="resorts__item-link resorts__item-link--list-min">
          <picture>
            <source type="image/webp" srcSet="/img/tours/turkey/alanya-resort.webp" />
            <img src="/img/tours/turkey/alanya-resort.jpg" alt="Аланья" className="resorts__item-image resorts__item-image--list-min" width="280" />
          </picture>
          <h3 className="resorts__item-title resorts__item-title--list-min">Алания</h3>
        </a>
      </li>
      <li className="resorts__item resorts__item--list-min">
        <a href="/country/turkey/belek/" className="resorts__item-link resorts__item-link--list-min"> 
          <picture>
            <source type="image/webp" srcSet="/img/tours/turkey/belek-resort.webp" />
            <img src="/img/tours/turkey/belek-resort.jpg" alt="Белек" className="resorts__item-image resorts__item-image--list-min" width="280" />
          </picture>
          <h3 className="resorts__item-title resorts__item-title--list-min">Белек</h3>
        </a>
      </li>
      <li className="resorts__item resorts__item--list-min">
        <a href="/country/turkey/side/" className="resorts__item-link resorts__item-link--list-min">
          <picture>
            <source type="image/webp" srcSet="/img/tours/turkey/side-resort.webp" />
            <img src="/img/tours/turkey/side-resort.jpg" alt="Сиде" className="resorts__item-image resorts__item-image--list-min" width="280" />
          </picture>
          <h3 className="resorts__item-title resorts__item-title--list-min">Сиде</h3>
        </a>
      </li>
    </ul>
  )
};

const element = <TurkeyResortsMin />
turkeyResortsMinContainer.render(element);