const subscribeMinContainer = ReactDOM.createRoot(
  document.getElementById('subscribe-min-container')
);

const SubscribeMin = () => {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setIsSuccess(false);

    try {
      const response = await fetch('/api/sub', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setEmail('');
        setIsSuccess(true);
      } else {
        setMessage(data.message || 'Произошла ошибка при отправке.');
      }
    } catch (error) {
      setMessage('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="subs-min">
      <div className="subs-min__inner-wrapper">
        <div className="subs-min__container">
          <div className="subs-min__content">
            <h2 className="visually-hidden">Подписка на актуальные новости, горящие туры и эксключивные предложения</h2>
            <picture>
              <source type="image/webp" srcSet="/img/subs-bg-mobile.webp" />
              <img className="subs-min__image" src="/img/subs-bg-mobile.png" width="620" height="auto" alt="Путеводитель по популярным курортам" />
            </picture>            
            <p className="subs-min__subtitle">
              {isSuccess ? (
                message
              ) : (
                <>
                  Хочешь получить эксклюзивный <strong>"Путеводитель по популярным курортам"</strong>?{' '}
                  Подпишись на рассылку и&nbsp;мы&nbsp;пришлём его через 2 минут!
                </>
              )}
            </p>
            
            <form className="subs-min__form form-subs-min" onSubmit={handleSubmit}>
              <div className="form-subs-min__wrapper">
                <label className="visually-hidden" htmlFor="emailInput">Введите свою почту:</label>
                <input 
                  type="email" 
                  className="form-subs-min__input" 
                  name="emailInput" 
                  id="emailInput" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="subs-min__button" disabled={isLoading}>
                  <span className="visually-hidden">{isLoading ? 'Отправка...' : 'Подписаться на рассылку'}</span>
                  <span aria-hidden="true">
                    {isLoading ? 'Отправка...' : 'Подписаться на рассылку'}
                  </span>
                </button>
              </div>
            </form>
            {!isSuccess && message && <p className="subs-min__error-message">{message}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

subscribeMinContainer.render(<SubscribeMin />);