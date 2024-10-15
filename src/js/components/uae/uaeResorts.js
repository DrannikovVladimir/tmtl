const uaeResortsContainer = ReactDOM.createRoot(
  document.getElementById('uae-resorts')
);

const UaeResorts = () => {
  return (
    <ul className="article__resorts resorts">
      <li className="resorts__item">
        <a href="/country/uae/dubai/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/uae/dubai-resort.webp" />
            <img src="/img/tours/uae/dubai-resort.jpg" alt="Дубай" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/country/uae/dubai/" className="resorts__item-link">
            <h3 className="resorts__item-title">Дубай</h3>
          </a>
          <p className="resorts__item-text">Самый густонаселенный эмират, известный своими роскошными магазинами, ультрасовременной архитектурой и бурной ночной жизнью. Рекомендуется для всех любителей шопинга. В городе также проходят многочисленные международные мероприятия.</p>
          <a href="/country/uae/dubai/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/country/uae/abu-dhabi/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/uae/abu-dhabi-resort.webp" />
            <img src="/img/tours/uae/abu-dhabi-resort.jpg" alt="Абу-Даби" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/country/uae/abu-dhabi/" className="resorts__item-link">
            <h3 className="resorts__item-title">Абу-Даби</h3>
          </a>
          <p className="resorts__item-text">Столица и крупнейший эмират, также является центром культуры, бизнеса и инноваций. Обязателен к посещению всем любителям искусства и архитектуры, а также для любителей острых ощущений необходимо посетить всемирно известные тематические парки.</p>
          <a href="/country/uae/abu-dhabi/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/country/uae/sharjah/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/uae/sharjah-resort.webp" />
            <img src="/img/tours/uae/sharjah-resort.jpg" alt="Шарджа" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/country/uae/sharjah/" className="resorts__item-link">
            <h3 className="resorts__item-title">Шарджа</h3>
          </a>
          <p className="resorts__item-text">Tретий по величине эмират в ОАЭ, признанная ЮНЕСКО культурной столицей арабского мира. Много музеев, художественных галерей и культурных центров, в том числе художественный музей и музей исламской цивилизации. Уникальное место для отдыха - остров Аль-Нур.</p>
          <a href="/country/uae/sharjah/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/country/uae/ajman/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/uae/ajman-resort.webp" />
            <img src="/img/tours/uae/ajman-resort.jpg" alt="Аджман" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/country/uae/ajman/" className="resorts__item-link">
            <h3 className="resorts__item-title">Аджман</h3>
          </a>
          <p className="resorts__item-text">Самый маленький эмират, известный своими нетронутыми пляжами, историческими памятниками культуры и Национальным музеем. Здесь непринужденная атмосфера по сравнению с шумными соседями, что делает его идеальным местом для того, кто ценит спокойный отдых.</p>
          <a href="/country/uae/ajman/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/country/uae/fujairah/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/uae/fujairah-resort.webp" />
            <img src="/img/tours/uae/fujairah-resort.jpg" alt="Фуджейра" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/country/uae/fujairah/" className="resorts__item-link">
            <h3 className="resorts__item-title">Фуджейра</h3>
          </a>
          <p className="resorts__item-text">Единственный эмират, расположенный на восточном побережье, откуда открывается потрясающий вид на Оманский залив. Эмират известен своими прекрасными пляжами, прозрачной водой и горами Хаджар. Единственный эмират пригодный для дайвинга.</p>
          <a href="/country/uae/fujairah/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/country/uae/ras-al-khaimah/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/uae/ras-al-khaimah-resort.webp" />
            <img src="/img/tours/uae/ras-al-khaimah-resort.jpg" alt="Рас Аль Хайма" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/country/uae/ras-al-khaimah/" className="resorts__item-link">
            <h3 className="resorts__item-title">Рас Аль Хайма</h3>
          </a>
          <p className="resorts__item-text">Рай для любителей приключений, предлагающий разнообразный ландшафт, включающий горы, пляжи и пустыни. В эмирате находится самая высокая вершина ОАЭ, Джебель-Джайс, где находится самый длинный в мире зиплайн и захватывающий полет Джебель-Джайс.</p>
          <a href="/country/uae/ras-al-khaimah/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
      <li className="resorts__item">
        <a href="/country/uae/umm-el-quwain/" className="resorts__item-link">
          <picture>
            <source type="image/webp" srcSet="/img/tours/uae/umm-el-quwain-resort.webp" />
            <img src="/img/tours/uae/umm-el-quwain-resort.jpg" alt="Умм Аль Кувейн" className="resorts__item-image" width="280" />
          </picture>
          
        </a>
        <div className="resorts__item-content">
          <a href="/country/uae/umm-el-quwain/" className="resorts__item-link">
            <h3 className="resorts__item-title">Умм Аль Кувейн</h3>
          </a>
          <p className="resorts__item-text">Спокойный эмират, где можно познакомиться с традиционным эмиратским стилем жизни. Эмират славится своими нетронутыми пляжами и мангровыми лесами. Любители истории могут осмотреть форт Умм-аль-Кувейн и археологические раскопки Аль-Дур.</p>
          <a href="/country/uae/umm-el-quwain/" className="resorts__item-link resorts__item-link--about">Подробнее о регионе</a>
        </div>
      </li>
    </ul>
  )
};

const element = <UaeResorts />
uaeResortsContainer.render(element);