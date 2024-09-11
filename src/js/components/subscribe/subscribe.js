const subscribeContainer = ReactDOM.createRoot(
  document.getElementById('subscribe-container')
);

const Subscribe = () => {
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
    <section className="subs">
      <div className="subs__inner-wrapper">
        <div className="subs__container">
          <div className="subs__content">
            <h2 className="visually-hidden">Подписка на актуальные новости, горящие туры и эксключивные предложения</h2>
            <p className="subs__subtitle">
              {isSuccess ? (
                message
              ) : (
                <>
                  Хотите получить эксклюзивный <strong>"Путеводитель по популярным курортам"</strong>?{' '}
                  Подпишитесь на рассылку и мы пришлём его в течении 2 минут!
                </>
              )}
            </p>
            
            <form className="subs__form form-subs" onSubmit={handleSubmit}>
              <div className="form-subs__wrapper">
                <label className="visually-hidden" htmlFor="emailInput">Введите свою почту:</label>
                <input 
                  type="email" 
                  className="form-subs__input" 
                  name="emailInput" 
                  id="emailInput" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="subs__button" disabled={isLoading}>
                  <span className="visually-hidden">{isLoading ? 'Отправка...' : 'Подписаться на рассылку'}</span>
                  <span aria-hidden="true">
                    {isLoading ? 'Отправка...' : 'Подписаться на рассылку'}
                  </span>
                </button>
              </div>
            </form>
            {!isSuccess && message && <p className="subs__error-message">{message}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

subscribeContainer.render(<Subscribe />);