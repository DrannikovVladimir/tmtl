const { useState, useEffect, useRef } = React;

const BookingButtonModal = ({ buttonText = "Подобрать тур", modalTitle = "Успейте приобрести выгодное предложение по лучшей цене!" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const phoneInputRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    if (isModalOpen && phoneInputRef.current) {
      maskRef.current = IMask(phoneInputRef.current, {
        mask: '+{7}(000)000-00-00',
        lazy: false,
      });

      maskRef.current.on('accept', () => {
        setFormData(prevData => ({
          ...prevData,
          phone: maskRef.current.value
        }));
      });

      return () => {
        if (maskRef.current) {
          maskRef.current.destroy();
        }
      };
    }
  }, [isModalOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if ([400, 401, 402, 403, 404, 500].includes(response.status)) {
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      comment: ''
    });
    setSubmitStatus(null);
    if (maskRef.current) {
      maskRef.current.value = '';
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    resetForm();
  };

  const renderModalContent = () => {
    if (submitStatus === 'success') {
      return (
        <div className="modal__content modal__content--booking">
          <h2 className="modal__title">Ваша заявка успешно отправлена</h2>
          <p className="modal__text">Спасибо, что выбрали наше турагентство. Мы свяжемся с вами в течении часа и поможем выбрать лучшее предложения для вашего отдыха.</p>
          <button className="feedback-form__submit" onClick={handleCloseModal}>Закрыть</button>
        </div>
      );
    } else if (submitStatus === 'error') {
      return (
        <div className="modal__content modal__content--booking">
          <h2 className="modal__title">Что то пошло не так</h2>
          <p className="modal__text">Ошибка при отправке форме. Мы уже разбираемся с этой проблемой. Пожалуйста перезагрузите страницу или попробуйте позжу.</p>
          <button className="feedback-form__submit" onClick={handleCloseModal}>Закрыть</button>
        </div>
      );
    } else {
      return (
        <div className="modal__content modal__content--booking">
          <h2 className="modal__title modal__title--booking">{modalTitle}</h2>
          <button className="modal__close modal__close--feedback" onClick={handleCloseModal}>
            <span className="visually-hidden">Закрыть</span>
          </button>
          <form onSubmit={handleSubmit} className="feedback-form">
            <ul className="feedback-form__list">
              <li className="feedback-form__list-item">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="feedback-form__input" 
                  placeholder="Имя" 
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
                <label htmlFor="name" className="visually-hidden">Имя</label>
              </li>
              <li className="feedback-form__list-item">
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="feedback-form__input" 
                  required
                  ref={phoneInputRef}
                  disabled={isSubmitting}
                />
                <label htmlFor="phone" className="visually-hidden">Телефон</label>
              </li>
              <li className="feedback-form__list-item">
                <textarea 
                  id="comment" 
                  name="comment" 
                  className="feedback-form__textarea" 
                  placeholder="Комментарий"
                  value={formData.comment}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                ></textarea>
                <label htmlFor="comment" className="visually-hidden">Комментарий</label>
              </li>
            </ul>
            <button 
              className="feedback-form__submit" 
              type="submit" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Отправка...' : 'Хочу подобрать тур'}
            </button>
          </form>
        </div>
      );
    }
  };

  return (
    <>
      <button className="booking__button" onClick={handleOpenModal}>
        {buttonText}
      </button>
      {isModalOpen && (
        <section className="modal modal-feedback">
          <div className="modal__wrapper">
            {renderModalContent()}
          </div>
        </section>
      )}
    </>
  );
};

const bookingContainer = ReactDOM.createRoot(
  document.getElementById('booking-container')
);

const dreamContainer = ReactDOM.createRoot(
  document.getElementById('dream-container')
);

bookingContainer.render(<BookingButtonModal buttonText="Подобрать тур" modalTitle="Найдем идеальный тур для вас!" />);
dreamContainer.render(<BookingButtonModal buttonText="Осуществить мечту" modalTitle="Давайте воплотим вашу мечту в реальность!" />);