const minPriceVerticalContainer = ReactDOM.createRoot(
  document.getElementById('article__min-price__box')
);

const MinPriceVertical = () => {
  return (
    <>
      <h3 className="article__min-price__title">Подберите лучший тур!</h3>
      <div className="tv-min-price tv-moduleid-9966664"></div>
      <p className="article__min-price__text">*(Цена указана за 1 человека, при двухместном размещении)</p>
    </>
  );
}

const element = <MinPriceVertical />

minPriceVerticalContainer.render(element);

