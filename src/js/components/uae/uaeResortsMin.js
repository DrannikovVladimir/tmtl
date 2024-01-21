const uaeResortsMinContainer = ReactDOM.createRoot(
  document.getElementById('uae-resorts-list')
);

const UaeResortsMin = () => {
  return (
    <>
      <h3 className="article__resorts-title">Остальные курорты</h3>
      <ul className="article__resorts resorts resorts--list-min">
        <li className="resorts__item resorts__item--list-min">
          <a href="/country/uae/dubai/index.html" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/uae/dubai-resort.webp" />
              <img src="/img/tours/uae/dubai-resort.jpg" alt="Дубай" className="resorts__item-image resorts__item-image--list-min" width="140" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--list-min">Дубай</h3>
          </a>
        </li>
        <li className="resorts__item resorts__item--list-min">
          <a href="/country/uae/abu-dhabi/index.html" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/uae/abu-dhabi-resort.webp" />
              <img src="/img/tours/uae/abu-dhabi-resort.jpg" alt="Абу-Даби" className="resorts__item-image resorts__item-image--list-min" width="140" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--list-min">Абу-Даби</h3>
          </a>
        </li>
        <li className="resorts__item resorts__item--list-min">
          <a href="/country/uae/sharjah/index.html" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/uae/sharjah-resort.webp" />
              <img src="/img/tours/uae/sharjah-resort.jpg" alt="Шарджа" className="resorts__item-image resorts__item-image--list-min" width="140" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--list-min">Шарджа</h3>
          </a>
        </li>
        <li className="resorts__item resorts__item--list-min">
          <a href="/country/uae/ajman/index.html" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/uae/ajman-resort.webp" />
              <img src="/img/tours/uae/ajman-resort.jpg" alt="Аджман" className="resorts__item-image resorts__item-image--list-min" width="140" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--list-min">Аджман</h3>
          </a>
        </li>
        <li className="resorts__item resorts__item--list-min">
          <a href="/country/uae/fujairah/index.html" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/uae/fujairah-resort.webp" />
              <img src="/img/tours/uae/fujairah-resort.jpg" alt="Фуджейра" className="resorts__item-image resorts__item-image--list-min" width="140" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--list-min">Фуджейра</h3>
          </a>
        </li>
        <li className="resorts__item resorts__item--list-min">
          <a href="/country/uae/ras-al-khaimah/index.html" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/uae/ras-al-khaimah-resort.webp" />
              <img src="/img/tours/uae/ras-al-khaimah-resort.jpg" alt="Рас Аль Хайма" className="resorts__item-image resorts__item-image--list-min" width="140" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--list-min">Рас Аль Хайма</h3>
          </a>
        </li>
        <li className="resorts__item resorts__item--list-min">
          <a href="/country/uae/umm-el-quwain/index.html" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/uae/umm-el-quwain-resort.webp" />
              <img src="/img/tours/uae/umm-el-quwain-resort.jpg" alt="Умм Аль Кувейн" className="resorts__item-image resorts__item-image--list-min" width="140" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--list-min">Умм Аль Кувейн</h3>
          </a>
        </li>
      </ul>
    </>
  )
};

const element = <UaeResortsMin />
uaeResortsMinContainer.render(element);