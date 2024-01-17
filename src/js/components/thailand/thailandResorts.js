const thailandResortsContainer = ReactDOM.createRoot(
  document.getElementById('thailand-resorts')
);

const ThailandResorts = () => {
  return (
    <ul className="article__resorts resorts">
      <li className="resorts__item">
        <a href="/tours/thailand/phuket-resort.html" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/thailand/phuket-resort.webp" />
            <img src="/img/tours/thailand/phuket-resort.jpg" alt="Пхукет" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/tours/thailand/phuket-resort.html" className="resorts__item-link">
            <h3 className="resorts__item-title">Пхукет</h3>
          </a>
          <p className="resorts__item-text">Остров Пхукет, который является самым большим островом Таиланда, можно смело назвать райским уголком на Земле. Главный остров королевства Таиланд богат роскошными курортами. Пляжи Патонга, Патонг-Бич, Панва, Чалонг, Карона и Ката окружены кристально чистыми водами Индийского океана.</p>
          <a href="/tours/thailand/phuket-resort.html" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/tours/thailand/pattaya-resort.html" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/thailand/pattaya-resort.webp" />
            <img src="/img/tours/thailand/pattaya-resort.jpg" alt="Паттайя" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/tours/thailand/pattaya-resort.html" className="resorts__item-link">
            <h3 className="resorts__item-title">Паттайя</h3>
          </a>
          <p className="resorts__item-text">Паттайя находится на восточном побережье и занимает особое место среди самых известных и востребованных туристических мест Таиланда. Отпуск в Паттайе идеально подходит для тех, кто желает днем наслаждаться солнечными ваннами, а вечером погрузиться в мир страстей или принять участие в ярком фестивале!</p>
          <a href="/tours/thailand/pattaya-resort.html" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/tours/thailand/samui-resort.html" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/thailand/samui-resort.webp" />
            <img src="/img/tours/thailand/samui-resort.jpg" alt="острок Самуи" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/tours/thailand/samui-resort.html" className="resorts__item-link">
            <h3 className="resorts__item-title">Самуи</h3>
          </a>
          <p className="resorts__item-text">Самуи занимает третье место по размеру среди островов Таиланда. Это тропический уголок райского блаженства, настоящая жемчужина среди курортов премиум-класса. Отпуск на Самуи предлагает гостям насладиться лазурными водами Сиамского залива, солнечными лучами, пляжами с белоснежным песком, восхитительной тропической флорой и фауной, а также ярким синим небом.</p>
          <a href="/tours/thailand/samui-resort.html" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/tours/thailand/bangkok-resort.html" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/thailand/bangkok-resort.webp" />
            <img src="/img/tours/thailand/bangkok-resort.jpg" alt="Бангкок" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/tours/thailand/bangkok-resort.html" className="resorts__item-link">
            <h3 className="resorts__item-title">Бангкок</h3>
          </a>
          <p className="resorts__item-text">Столица Таиланда, также известен как "город ангелов". Славится бурной ночной жизнью, шумными рынками и великолепными храмами. Здесь можно посетить Королевский дворец, храм Золотого Будды и множество других достопримечательностей.</p>
          <a href="/tours/thailand/bangkok-resort.html" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/tours/thailand/koh-chang-resort.html" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/thailand/ko-chang-resort.webp" />
            <img src="/img/tours/thailand/ko-chang-resort.jpg" alt="Ко Чанг" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/tours/thailand/koh-chang-resort.html" className="resorts__item-link">
            <h3 className="resorts__item-title">Ко Чанг</h3>
          </a>
          <p className="resorts__item-text">Второй по величине остров Таиланда, расположенный близ границы с Камбоджей. Известен своими великолепными пляжами, густыми джунглями и богатым подводным миром. Здесь можно заняться дайвингом, посетить водопады и насладиться красотой природы.</p>
          <a href="/tours/thailand/koh-chang-resort.html" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/tours/thailand/krabi-resort.html" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/thailand/krabi-resort.webp" />
            <img src="/img/tours/thailand/krabi-resort.jpg" alt="Краби" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/tours/thailand/krabi-resort.html" className="resorts__item-link">
            <h3 className="resorts__item-title">Краби</h3>
          </a>
          <p className="resorts__item-text">Провинция на юге Таиланда, известная своими впечатляющими скалами, пещерами и белоснежными пляжами. Здесь можно заняться скалолазанием, посетить национальный парк и насладиться великолепным видом на всемирно известный залив Пханг Нга.</p>
          <a href="/tours/thailand/krabi-resort.html" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
    </ul>
  )
};

const element = <ThailandResorts />
thailandResortsContainer.render(element);