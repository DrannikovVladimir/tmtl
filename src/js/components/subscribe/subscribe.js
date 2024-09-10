const subscribeContainer = ReactDOM.createRoot(
  document.getElementById('subscribe-container')
);

const Subscribe = () => {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

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
            <h2 className="visually-hidden">Горящие туры, лучшие предложения, новости</h2>
            <p className="subs__subtitle">
              {successMessage || 'Хотите узнавать первым о горящих турах, лучших предложениях, актуальных новостях из мира туризма. Тогда подписывайтесь на нашу рассылку!'}
            </p>
            
            <form className="subs__form form-subs" onSubmit={handleSubmit}>
              <div className="form-subs__wrapper">
                <label className="visually-hidden" htmlFor="emailInput">Введите свою почту:</label>
                <input 
                  type="email" 
                  className="form-subs__input" 
                  name="emailInput" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="subs__button" disabled={isLoading}>
                  {isLoading ? 'Отправка...' : 'Подписаться на рассылку'}
                </button>
              </div>
            </form>
            {errorMessage && <p className="subs__error-message">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

const element = <Subscribe />
subscribeContainer.render(element);