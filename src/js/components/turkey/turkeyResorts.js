const turkeyResortsContainer = ReactDOM.createRoot(
  document.getElementById('turkey-resorts')
);

const TurkeyResorts = () => {
  return (
    <ul className="article__resorts resorts">
      <li className="resorts__item">
        <a href="/country/turkey/antalya/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/turkey/antalya-resort.webp" />
            <img src="/img/tours/turkey/antalya-resort.jpg" alt="Анталья" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/country/turkey/antalya/" className="resorts__item-link">
            <h3 className="resorts__item-title">Анталья</h3>
          </a>
          <p className="resorts__item-text">Один из самых популярных курортов в Турции. Город расположен на побережье Средиземного моря и знаменит своими красивыми пляжами, роскошными отелями и ресторанами. Один из главных международных аэропортов страны находится именно здесь.</p>
          <a href="/country/turkey/antalya/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/country/turkey/kemer/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/turkey/kemer-resort.webp" />
            <img src="/img/tours/turkey/kemer-resort.jpg" alt="Кемер" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/country/turkey/kemer/" className="resorts__item-link">
            <h3 className="resorts__item-title">Кемер</h3>
          </a>
          <p className="resorts__item-text">Расположен между Таврскими горами и Средиземным морем в 40 километров от аэропорта. Ночные клубы, бары работают до раннего утра. Район был популярен среди туристов с древних времен, и сегодня он по-прежнему популярен среди посетителей со всего мира.</p>
          <a href="/country/turkey/kemer/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/country/turkey/bodrum/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/turkey/bodrum-resort.webp" />
            <img src="/img/tours/turkey/bodrum-resort.jpg" alt="Бодрум" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/country/turkey/bodrum/" className="resorts__item-link">
            <h3 className="resorts__item-title">Бодрум</h3>
          </a>
          <p className="resorts__item-text">Еще один прекрасный курортный город, расположенный на Эгейском побережье Турции. В Бодруме также есть несколько удивительных пляжей с мелководьем, что делает их идеальными для купания. Самый западный курорт Турции, который расположен ближе к Греции.</p>
          <a href="/country/turkey/bodrum/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/country/turkey/alanya/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/turkey/alanya-resort.webp" />
            <img src="/img/tours/turkey/alanya-resort.jpg" alt="Аланья" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/country/turkey/alanya/" className="resorts__item-link">
            <h3 className="resorts__item-title">Алания</h3>
          </a>
          <p className="resorts__item-text">Здесь находится знаменитый пляж “Клеопатра”. Множество отелей на любой вкус, также много предложений для аренды аппартаментов. Аланья может похвастаться потрясающими пляжами с золотым мелким песком и лазурным морем.</p>
          <a href="/country/turkey/alanya/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/country/turkey/belek/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/turkey/belek-resort.webp" />
            <img src="/img/tours/turkey/belek-resort.jpg" alt="Белек" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/country/turkey/belek/" className="resorts__item-link">
            <h3 className="resorts__item-title">Белек</h3>
          </a>
          <p className="resorts__item-text">Широкая песчаная береговая линия, кристально чистая вода и множество элитных отелей. Самый фешенебельный курорт турции. Отлично подходит для отдыха с детьми. Плавная береговая линия без резких спусков, что подходит всем гостям.</p>
          <a href="/country/turkey/belek/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/country/turkey/side/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/turkey/side-resort.webp" />
            <img src="/img/tours/turkey/side-resort.jpg" alt="Сиде" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/country/turkey/side/" className="resorts__item-link">
            <h3 className="resorts__item-title">Сиде</h3>
          </a>
          <p className="resorts__item-text">Расположен на полуострове, окруженном морем с трех сторон, основан греками. В его историческом центре находятся древние руины римских городов, которые стали частью городского пейзажа. Пляжи Сиде удостоен голубого флага за чистоту.</p>
          <a href="/country/turkey/side/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/country/turkey/stambul/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/turkey/stambul-resort.webp" />
            <img src="/img/tours/turkey/stambul-resort.jpg" alt="Стамбул" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/country/turkey/stambul/" className="resorts__item-link">
            <h3 className="resorts__item-title">Стамбул</h3>
          </a>
          <p className="resorts__item-text">Расположен на двух континентах, разделенных проливом Босфор, основан греками как Византий. В его историческом центре находятся величественные памятники четырех империй, которые стали символами города. Стамбул внесен в список Всемирного наследия ЮНЕСКО.</p>
          <a href="/country/turkey/stambul/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/country/turkey/cappadocia/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/turkey/cappadocia1.webp" />
            <img src="/img/tours/turkey/cappadocia1.jpg" alt="Стамбул" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/country/turkey/cappadocia/" className="resorts__item-link">
            <h3 className="resorts__item-title">Каппадокия</h3>
          </a>
          <p className="resorts__item-text"></p>
          <a href="/country/turkey/cappadocia/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
    </ul>
  )
};

const element = <TurkeyResorts />
turkeyResortsContainer.render(element);