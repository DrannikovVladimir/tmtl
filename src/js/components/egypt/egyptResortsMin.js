const egyptResortsMinContainer = ReactDOM.createRoot(
  document.getElementById('egypt-resorts-list')
);

const EgyptResortsMin = () => {
  return (
    <>
      <h2 className="article__title article__title--list-h3">Курорты Египта</h2>
      <ul className="article__resorts resorts resorts resorts--list-min">
        <li className="resorts__item resorts__item--list-min">
          <a href="/country/egypt/sharm-el-sheikh/" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/egypt/sharm-panorama-resort.webp" />
              <img src="/img/tours/egypt/sharm-panorama-resort.jpg" alt="Шарм-Эль-Шейх" className="resorts__item-image resorts__item-image resorts__item-image--list-min" width="100" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--font-size-14 resorts__item-title--list-min">Шарм-Эль-Шейх</h3>
          </a>
        </li>

        <li className="resorts__item resorts__item--list-min">
          <a href="/country/egypt/hurghada/" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/egypt/hurgada-resort.webp" />
              <img src="/img/tours/egypt/hurgada-resort.jpg" alt="Хургада" className="resorts__item-image resorts__item-image resorts__item-image--list-min" width="100" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--list-min">Хургада</h3>
          </a>
        </li>

        <li className="resorts__item resorts__item--list-min">
          <a href="/country/egypt/marsa-alam/" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/egypt/marsa-alam-resort.webp" />
              <img src="/img/tours/egypt/marsa-alam-resort.jpg" alt="Марса Алам" className="resorts__item-image resorts__item-image resorts__item-image--list-min" width="100" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--list-min">Марса Алам</h3>
          </a>
        </li>

        <li className="resorts__item resorts__item--list-min">
          <a href="/country/egypt/dahab/" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/egypt/dahab-resort.webp" />
              <img src="/img/tours/egypt/dahab-resort.jpg" alt="Дахаб" className="resorts__item-image resorts__item-image resorts__item-image--list-min" width="100" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--list-min">Дахаб</h3>
          </a>
        </li>

        <li className="resorts__item resorts__item--list-min">
          <a href="/country/egypt/alexandria/" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/egypt/alexandria-resort.webp" />
              <img src="/img/tours/egypt/alexandria-resort.jpg" alt="Александрия" className="resorts__item-image resorts__item-image resorts__item-image--list-min" width="100" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--list-min">Александрия</h3>
          </a>
        </li>

        <li className="resorts__item resorts__item--list-min">
          <a href="/country/egypt/cairo/" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/egypt/cairo-resort.webp" />
              <img src="/img/tours/egypt/cairo-resort.jpg" alt="Каир" className="resorts__item-image resorts__item-image resorts__item-image--list-min" width="100" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--list-min">Каир</h3>
          </a>
        </li>
      </ul>
    </>
  )
};

const element = <EgyptResortsMin />
egyptResortsMinContainer.render(element);