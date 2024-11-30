const destinationsContainer = ReactDOM.createRoot(
  document.getElementById('destinations-root')
);

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024
};

const DRAG_THRESHOLD = 50;
const ANIMATION_DURATION = 300;

const destinationsData = [
  {
    id: 'turkey',
    title: 'Туры в Турцию из Караганды',
    description: 'Погрузитесь в атмосферу роскошного отдыха all inclusive! Белоснежные пляжи, изысканная кухня и SPA-центры лучших отелей ждут вас. Мечты об идеальном отпуске сбываются в Турции!',
    price: '262 000',
    discount: 35,
    images: {
      desktop: '/img/tours/tours-turkey-desktop',
      mobile: '/img/tours/tours-turkey-mobile'
    },
    alt: 'Элитный отдых в Турции: лучшие отели Антальи, Белека и Кемера по выгодным ценам',
    link: '/tours/turkey'
  },
  {
    id: 'uae',
    title: 'Туры в Дубай (ОАЭ)',
    description: 'Испытайте невероятный контраст роскоши и традиций! От головокружительных небоскребов до золотых песков пустыни. Откройте для себя страну, где каждый день – новое приключение!',
    price: '340 000',
    discount: 30,
    images: {
      desktop: '/img/tours/tours-uae-desktop',
      mobile: '/img/tours/tours-uae-mobile'
    },
    alt: 'Туры в ОАЭ 2024: роскошные отели Дубая и лучшие пляжи Эмиратов',
    link: '/tours/uae'
  },
  {
    id: 'egypt',
    title: 'Туры в Египет',
    description: 'Окунитесь в магию древних пирамид и наслаждайтесь первоклассным сервисом all inclusive! Коралловые рифы, теплое море и вечное солнце сделают ваш отдых незабываемым!',
    price: '183 000',
    discount: 28,
    images: {
      desktop: '/img/tours/tours-egypt-desktop',
      mobile: '/img/tours/tours-egypt-mobile'
    },
    alt: 'Горящие туры в Египет: отдых в Хургаде и Шарм-эль-Шейхе все включено',
    link: '/tours/egypt'
  },
  {
    id: 'vietnam',
    title: 'Туры во Вьетнам',
    description: 'Откройте для себя рай на земле: лазурные бухты и экзотические пляжи Фукуока ждут вас! Аутентичная кухня, древние храмы и потрясающие SPA-процедуры включены!',
    price: '290 000',
    discount: 25,
    images: {
      desktop: '/img/tours/tours-vietnam-desktop',
      mobile: '/img/tours/tours-vietnam-mobile'
    },
    alt: 'Туры во Вьетнам из Казахстана: пляжный отдых на Фукуоке по специальным ценам',
    link: '/tours/vietnam'
  },
  {
    id: 'thailand',
    title: 'Туры в Таиланд',
    description: 'Ваш идеальный отпуск: роскошные пляжи, тайский массаж и незабываемые впечатления! От шумной Паттайи до райского Пхукета – исполните мечту о тропическом рае!',
    price: '214 000',
    discount: 24,
    images: {
      desktop: '/img/tours/tours-thailand-desktop',
      mobile: '/img/tours/tours-thailand-mobile'
    },
    alt: 'Горящие путевки в Таиланд: Пхукет и Паттайя с прямым перелетом из Казахстана',
    link: '/tours/thailand'
  }
];

const DestinationCard = ({ data }) => {
    return (
      <div className="destination-card">
        <div className="destination-card__image-wrapper">
          <picture className="destination-card__image-wrapper">
            <source
              media="(min-width: 768px)"
              srcSet={`${data.images.desktop}.webp 1x, 
                      ${data.images.desktop}@2x.webp 2x`}
              type="image/webp"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${data.images.desktop}.jpg 1x, 
                      ${data.images.desktop}@2x.jpg 2x`}
              type="image/jpeg"
            />
            <source
              srcSet={`${data.images.mobile}.webp 1x,
                      ${data.images.mobile}@2x.webp 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${data.images.mobile}.jpg 1x,
                      ${data.images.mobile}@2x.jpg 2x`}
              type="image/jpeg"
            />
            <img
              src={`${data.images.desktop}.jpg`}
              srcSet={`${data.images.desktop}@2x.jpg 2x`}
              alt={data.alt}
              className="destination-card__image"
              width="380"
              height="240"
              loading="lazy"
            />
          </picture>
          <span className="destination-card__discount">-{data.discount}%</span>
        </div>
        <div className="destination-card__content">
          <h3 className="destination-card__title">{data.title}</h3>
          <p className="destination-card__description">{data.description}</p>
          <div className="destination-card__price">
            <span className="destination-card__price-label">Цена на 1 человека: от</span>
            <span>&nbsp;</span>
            <span className="destination-card__price-value">{data.price}</span>
            <span>&nbsp;</span>
            <span className="destination-card__price-label">тг.</span>
          </div>
          <a href={data.link} className="destination-card__button">Выбрать тур</a>
        </div>
      </div>
    );
  };


const SliderControls = React.memo(({ onPrev, onNext, canGoPrev, canGoNext }) => (
  <>
    <button 
      className="destination-arrow destination-arrow--left"
      onClick={onPrev}
      style={{ display: canGoPrev ? 'block' : 'none' }}
    >
      ←
    </button>
    <button 
      className="destination-arrow destination-arrow--right"
      onClick={onNext}
      style={{ display: canGoNext ? 'block' : 'none' }}
    >
      →
    </button>
  </>
));

const SliderHeader = React.memo(() => (
  <>
    <h2 className="destinations__title">Популярные направления</h2>
    <p className="destinations__subtitle">Актуальные предложения для незабываемого отдыха</p>
  </>
));

const DestinationsWidget = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [visibleItems, setVisibleItems] = React.useState(3);
  const [isDragging, setIsDragging] = React.useState(false);
  const [slideWidth, setSlideWidth] = React.useState(0);
  
  const listRef = React.useRef(null);
  const startX = React.useRef(null);
  const currentX = React.useRef(null);

  const calculateSizes = React.useCallback(() => {
    const width = window.innerWidth;
    setVisibleItems(width < BREAKPOINTS.mobile ? 1 : width < BREAKPOINTS.tablet ? 2 : 3);

    if (listRef.current) {
      const slide = listRef.current.querySelector('.destinations-list__item');
      if (slide) {
        const width = slide.offsetWidth;
        const gap = parseInt(window.getComputedStyle(listRef.current).gap || '0');
        setSlideWidth(width + gap);
      }
    }
  }, []);

  React.useEffect(() => {
    calculateSizes();
    window.addEventListener('resize', calculateSizes);
    return () => window.removeEventListener('resize', calculateSizes);
  }, [calculateSizes]);

  React.useEffect(() => {
    if (listRef.current && !isDragging) {
      listRef.current.style.transition = `transform ${ANIMATION_DURATION}ms ease-out`;
      listRef.current.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }
  }, [currentIndex, slideWidth, isDragging]);

  const handleDragStart = React.useCallback((e) => {
    setIsDragging(true);
    startX.current = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    
    if (listRef.current) {
      listRef.current.style.transition = 'none';
    }

    if (e.type.includes('mouse')) {
      e.preventDefault();
    }
  }, []);

  const handleDragMove = React.useCallback((e) => {
    if (!isDragging || startX.current === null) return;

    currentX.current = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const diff = currentX.current - startX.current;
    
    const maxScroll = -(destinationsData.length - visibleItems) * slideWidth;
    const newPosition = -currentIndex * slideWidth + diff;
    const limitedPosition = Math.max(Math.min(newPosition, 0), maxScroll);

    if (listRef.current) {
      listRef.current.style.transform = `translateX(${limitedPosition}px)`;
    }

    if (e.type.includes('mouse')) {
      e.preventDefault();
    }
  }, [isDragging, currentIndex, slideWidth, visibleItems]);

  const handleDragEnd = React.useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    if (startX.current === null || currentX.current === null) return;

    const diff = currentX.current - startX.current;
    
    if (Math.abs(diff) > DRAG_THRESHOLD) {
      if (diff > 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      } else if (diff < 0 && currentIndex < destinationsData.length - visibleItems) {
        setCurrentIndex(prev => prev + 1);
      }
    }

    startX.current = null;
    currentX.current = null;
    
    if (listRef.current) {
      listRef.current.style.transition = `transform ${ANIMATION_DURATION}ms ease-out`;
    }
  }, [isDragging, currentIndex, visibleItems]);

  const handlePrevClick = React.useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  const handleNextClick = React.useCallback(() => {
    if (currentIndex < destinationsData.length - visibleItems) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, visibleItems]);

  const sliderEvents = React.useMemo(() => ({
    onMouseDown: handleDragStart,
    onMouseMove: handleDragMove,
    onMouseUp: handleDragEnd,
    onMouseLeave: handleDragEnd,
    onTouchStart: handleDragStart,
    onTouchMove: handleDragMove,
    onTouchEnd: handleDragEnd
  }), [handleDragStart, handleDragMove, handleDragEnd]);

  return (
    <section className="section destinations">
      <div className="destinations__container">
        <SliderHeader />
        
        <div className="destinations-slider">
          <ul 
            className="destinations-list"
            ref={listRef}
            {...sliderEvents}
          >
            {destinationsData.map((destination) => (
              <li key={destination.id} className="destinations-list__item">
                <DestinationCard data={destination} />
              </li>
            ))}
          </ul>

          <SliderControls 
            onPrev={handlePrevClick}
            onNext={handleNextClick}
            canGoPrev={currentIndex > 0}
            canGoNext={currentIndex < destinationsData.length - visibleItems}
          />
        </div>
      </div>
    </section>
  );
};

const element = <DestinationsWidget />
destinationsContainer.render(element);