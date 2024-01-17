const vietnamResortsMinContainer = ReactDOM.createRoot(
  document.getElementById('vietnam-resorts-list')
);

const VietnamResortsMin = () => {
  return (
    <>
      <h3 className="article__resorts-title">Остальные курорты</h3>
      <ul className="article__resorts resorts resorts--list-min">
        <li className="resorts__item resorts__item--list-min">
          <a href="/tours/vietnam/nha-trang-resort.html" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/vietnam/nha-trang-resort.webp" />
              <img src="/img/tours/vietnam/nha-trang-resort.jpg" alt="Нячанг" className="resorts__item-image resorts__item-image--list-min" width="140" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--list-min">Нячанг</h3>
          </a>
        </li>
        <li className="resorts__item resorts__item--list-min">
          <a href="/tours/vietnam/phan-thiet-resort.html" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/vietnam/phan-thiet-resort.webp" />
              <img src="/img/tours/vietnam/phan-thiet-resort.jpg" alt="Фанхъет" className="resorts__item-image resorts__item-image--list-min" width="140" />
            </picture>      
            <h3 className="resorts__item-title resorts__item-title--list-min">Фантьет</h3>
          </a>
        </li>
        <li className="resorts__item resorts__item--list-min">
          <a href="/tours/vietnam/phu-quoc-resort.html" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/vietnam/phu-quoc-resort.webp" />
              <img src="/img/tours/vietnam/phu-quoc-resort.jpg" alt="Фукуок" className="resorts__item-image resorts__item-image--list-min" width="140" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--list-min">Фукуок</h3>
          </a>
        </li>
      </ul>
    </>
  )
};

const element = <VietnamResortsMin />
vietnamResortsMinContainer.render(element);