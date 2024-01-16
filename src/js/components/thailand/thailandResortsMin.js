const thailandResortsMinContainer = ReactDOM.createRoot(
  document.getElementById('thailand-resorts-list')
);

const ThailandResortsMin = () => {
  return (
    <>
      <h3 className="article__resorts-title">Остальные курорты</h3>
      <ul className="article__resorts resorts resorts--list-min">
        <li className="resorts__item resorts__item--list-min">
          <a href="/tours/thailand/phuket-resort.html" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/thailand/phuket-resort.webp" />
              <img src="/img/tours/thailand/phuket-resort.jpg" alt="Пхукет" className="resorts__item-image resorts__item-image--list-min" width="140" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--list-min">Пхукет</h3>
          </a>
        </li>
        <li className="resorts__item resorts__item--list-min">
          <a href="/tours/thailand/pattaya-resort.html" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/thailand/pattaya-resort.webp" />
              <img src="/img/tours/thailand/pattaya-resort.jpg" alt="Паттайя" className="resorts__item-image resorts__item-image--list-min" width="280" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--list-min">Паттайя</h3>
          </a>
        </li>
        <li className="resorts__item resorts__item--list-min">
          <a href="/tours/thailand/samui-resort.html" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/thailand/samui-resort.webp" />
              <img src="/img/tours/thailand/samui-resort.jpg" alt="острок Самуи" className="resorts__item-image resorts__item-image--list-min" width="280" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--list-min">Самуи</h3>
          </a>
        </li>
        <li className="resorts__item resorts__item--list-min">
          <a href="/tours/thailand/bangkok-resort.html" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/thailand/bangkok-resort.webp" />
              <img src="/img/tours/thailand/bangkok-resort.jpg" alt="Бангкок" className="resorts__item-image resorts__item-image--list-min" width="280" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--list-min">Бангкок</h3>
          </a>
        </li>
        <li className="resorts__item resorts__item--list-min">
          <a href="/tours/thailand/ko-chang-resort.html" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/thailand/ko-chang-resort.webp" />
              <img src="/img/tours/thailand/ko-chang-resort.jpg" alt="Ко Чанг" className="resorts__item-image resorts__item-image--list-min" width="280" />
            </picture>          
            <h3 className="resorts__item-title resorts__item-title--list-min">Ко Чанг</h3>
          </a>        
        </li>
        <li className="resorts__item resorts__item--list-min">
          <a href="/tours/thailand/krabi-resort.html" className="resorts__item-link resorts__item-link--list-min">
            <picture>
              <source type="image/webp" srcSet="/img/tours/thailand/krabi-resort.webp" />
              <img src="/img/tours/thailand/krabi-resort.jpg" alt="Краби" className="resorts__item-image resorts__item-image--list-min" width="280" />
            </picture>
            <h3 className="resorts__item-title resorts__item-title--list-min">Краби</h3>
          </a>
        </li>
      </ul>
    </>
    
  )
};

const element = <ThailandResortsMin />
thailandResortsMinContainer.render(element);