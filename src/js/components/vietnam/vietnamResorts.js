const vietnamResortsContainer = ReactDOM.createRoot(
  document.getElementById('vietnam-resorts')
);

const VietnamResorts = () => {
  return (
    <ul className="article__resorts resorts">
      <li className="resorts__item">
        <a href="/tours/vietnam/nha-trang-resort.html" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/vietnam/nha-trang-resort.webp" />
            <img src="/img/tours/vietnam/nha-trang-resort.jpg" alt="Нячанг" className="resorts__item-image" width="280" />
          </picture>
        </a>
        <div className="resorts__item-content">
          <a href="/tours/vietnam/nha-trang-resort.html" className="resorts__item-link">
            <h3 className="resorts__item-title">Нячанг</h3>
          </a>
          <p className="resorts__item-text">Райский уголок на берегу Южно-Китайского моря. Здесь солнце, море, пальмы и белоснежные песчаные пляжи создают идеальные условия для отдыха и релаксации. Нячанг - это совершенное сочетание экзотической атмосферы, уютных отелей, разнообразных ресторанов и богатой культурной программы.</p>
          <a href="/tours/vietnam/nha-trang-resort.html" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/tours/vietnam/phan-thiet-resort.html" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/vietnam/phan-thiet-resort.webp" />
            <img src="/img/tours/vietnam/phan-thiet-resort.jpg" alt="Фанхъет" className="resorts__item-image" width="280" />
          </picture>          
        </a>
        <div className="resorts__item-content">
          <a href="/tours/vietnam/phan-thiet-resort.html" className="resorts__item-link">
            <h3 className="resorts__item-title">Фантьет</h3>
          </a>
          <p className="resorts__item-text">Тропический курорт на Юго-Востоке Вьетнама. Райское убежище для истинных ценителей природы и комфорта. Изумрудные воды, белоснежные пляжи, роскошные виллы с приватными бассайнами и шикарными видами на океан. Экзотическая кухня в ресторанах высшего класса.</p>
          <a href="/tours/vietnam/phan-thiet-resort.html" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/tours/vietnam/phu-quoc-resort.html" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/vietnam/phu-quoc-resort.webp" />
            <img src="/img/tours/vietnam/phu-quoc-resort.jpg" alt="Фукуок" className="resorts__item-image" width="280" />
          </picture>  
          
        </a>
        <div className="resorts__item-content">
          <a href="/tours/vietnam/phu-quoc-resort.html" className="resorts__item-link">
            <h3 className="resorts__item-title">Фукуок</h3>
          </a>
          <p className="resorts__item-text">Ещё совсем недавно остров Фукуоу был недоступен для туристов. Это прекрасное место, затерянное в океане, усыпанное пальмами, раскачивающиеся лёгким бризом открыло свои двери для всех желающих уединиться с природой, любоваться великолепными закатами и наслаждаться длительными прогулками.</p>
          <a href="/tours/vietnam/phu-quoc-resort.html" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
    </ul>
  )
};

const element = <VietnamResorts />
vietnamResortsContainer.render(element);