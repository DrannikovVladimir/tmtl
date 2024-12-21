const egyptResortsContainer = ReactDOM.createRoot(
  document.getElementById('egypt-resorts')
);

console.log(egyptResortsContainer);

const EgyptResorts = () => {
  return (
    <ul className="article__resorts resorts">
      <li className="resorts__item">
        <a href="/country/egypt/sharm-el-sheikh/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/egypt/sharm-panorama-resort.webp" />
            <img src="/img/tours/egypt/sharm-panorama-resort.jpg" alt="Шарм-Эль-Шейх" className="resorts__item-image" width="250" />
          </picture>          
        </a>
        <div className="resorts__item-content">
          <a href="/country/egypt/sharm-el-sheikh/" className="resorts__item-link">
            <h3 className="resorts__item-title">Шарм-Эль-Шейх</h3>
          </a>
          <p className="resorts__item-text">Шарм-эль-Шейх представляет собой курорт европейского стиля с превосходно развитой туристической инфраструктурой, отельными комплексами и уютными гостиницами. Здесь можно обнаружить как небольшие комфортабельные отели с изысканным современным дизайном.</p>
          <a href="/country/egypt/sharm-el-sheikh/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>

      <li className="resorts__item">
        <a href="/country/egypt/hurghada/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/egypt/hurgada-resort.webp" />
            <img src="/img/tours/egypt/hurgada-resort.jpg" alt="Хургада" className="resorts__item-image" width="250" />
          </picture>          
        </a>
        <div className="resorts__item-content">
          <a href="/country/egypt/hurghada/" className="resorts__item-link">
            <h3 className="resorts__item-title">Хургада</h3>
          </a>
          <p className="resorts__item-text">Хургада - отличный курорт на берегу Красного моря и представляет собой одно из главных туристических направлений Египта. Он славится своими великолепными песчаными пляжами, живописными коралловыми островами и удивительным разнообразием растительного и животного мира. </p>
          <a href="/country/egypt/hurghada/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>

      <li className="resorts__item">
        <a href="/country/egypt/marsa-alam/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/egypt/marsa-alam-resort.webp" />
            <img src="/img/tours/egypt/marsa-alam-resort.jpg" alt="Марса Алам" className="resorts__item-image" width="100" loading="lazy" />
          </picture>          
        </a>
        <div className="resorts__item-content">
          <a href="/country/egypt/marsa-alam/" className="resorts__item-link">
            <h3 className="resorts__item-title">Марса Алам</h3>
          </a>
          <p className="resorts__item-text">Марса Алам находится на расстоянии 300 км к югу от Хургады. Этот быстро развивающийся курорт открыт для приема не только стандартных туристов, но и энтузиастов подводного плавания со всего мира.</p>
          <a href="/country/egypt/marsa-alam/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>

      <li className="resorts__item">
        <a href="/country/egypt/dahab/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/egypt/dahab-resort.webp" />
            <img src="/img/tours/egypt/dahab-resort.jpg" alt="Дахаб" className="resorts__item-image" width="100" />
          </picture>          
        </a>
        <div className="resorts__item-content">
          <a href="/country/egypt/dahab/" className="resorts__item-link">
            <h3 className="resorts__item-title">Дахаб</h3>
          </a>
          <p className="resorts__item-text">Дахаб - это идеальное место для любителей подводных экскурсий, рыбалки и виндсерфинга. Вы получите возможность наблюдать за удивительным подводным миром в живописной Голубой Бухте или таинственном Каньоне - местах, которые особенно любят опытные дайверы.</p>
          <a href="/country/egypt/dahab/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>

      <li className="resorts__item">
        <a href="/country/egypt/alexandria/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/egypt/alexandria-resort.webp" />
            <img src="/img/tours/egypt/alexandria-resort.jpg" alt="Александрия" className="resorts__item-image" width="100" loading="lazy" />
          </picture>          
        </a>
        <div className="resorts__item-content">
          <a href="/country/egypt/alexandria/" className="resorts__item-link">
            <h3 className="resorts__item-title">Александрия</h3>
          </a>
          <p className="resorts__item-text">Александр Македонский основал Александрию в первой половине IV века до н.э. на берегу Средиземного моря. На протяжении многих веков, она была ключевым торговым центром для множества империй.</p>
          <a href="/country/egypt/alexandria/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>

      <li className="resorts__item">
        <a href="/country/egypt/cairo/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/egypt/cairo-resort.webp" />
            <img src="/img/tours/egypt/cairo-resort.jpg" alt="Каир" className="resorts__item-image" width="100" loading="lazy" />
          </picture>          
        </a>
        <div className="resorts__item-content">
          <a href="/country/egypt/cairo/" className="resorts__item-link">
            <h3 className="resorts__item-title">Каир</h3>
          </a>
          <p className="resorts__item-text">Каир, известный как город тысячи минаретов, заслуживает этого названия, так как в его пределах расположено множество великолепных мечетей, которые являются архитектурным достоянием всего мира.</p>
          <a href="/country/egypt/cairo/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
    </ul>
  )
};

const element = <EgyptResorts />
egyptResortsContainer.render(element);