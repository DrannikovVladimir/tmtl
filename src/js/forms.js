const ERRORS = [400, 401, 402, 403, 404, 500];
const titleBooking = 'Ваша заявка успешно отправлена';
const titleSub = 'Ваша заявка успешно отправлена';
const textBooking = 'Спасибо, что выбрали наше турагентство. Мы свяжемся с вами в течении часа и поможем выбрать лучшее предложения для вашего отдыха.';
const textSub = 'Спасибо, что выбрали наше турагенство. Ваша подписка успешно оформлена.';

const modalFeedback = document.querySelector('.modal-feedback');
const modalSubs = document.querySelector('.modal-subs');

const formFeedback = document.querySelector('.feedback-form');
const formSubs = document.querySelector('.subs-form');

const phoneElement = document.getElementById('phone');
const bookingButton = document.querySelector('.booking__button');
const dreamButton = document.querySelector('.dream__button');
const subsButton = document.querySelector('.subs__button');
const buttonCloseFeedback = document.querySelector('.modal__close--feedback');
const buttonCloseSubs = document.querySelector('.modal__close--subs');

const maskOptions = {
  mask: '+{7}(000)000-00-00',
  lazy: false,
};
const mask = IMask(phoneElement, maskOptions);

const serializeData = (data) => {
  const formData = new FormData(data);
  
  return JSON.stringify(Object.fromEntries(formData));
};

const setDisabledFieldsBooking = (form) => {
  const nameField = form.querySelector('[name="name"]');
  const phoneField = form.querySelector('[name="phone"]');
  const commentField = form.querySelector('[name="comment"]');

  nameField.setAttribute('disabled', true);
  phoneField.setAttribute('disabled', true);
  commentField.setAttribute('disabled', true);
};

const setDisabledFieldsSub = (form) => {
  const emailField = form.querySelector('[name="email"]');

  emailField.setAttribute('disabled', true);
};

const renderError = () => {
  console.log('renderError')
  const container = document.querySelector('.modal__content--booking');
  const title = document.createElement('h2');
  const text = document.createElement('p');
  const button = document.createElement('button');

  title.classList.add('modal__title');
  title.textContent = 'Что то пошло не так';
  button.classList.add('subs-form__submit');
  button.textContent = 'Закрыть';
  text.textContent = 'Ошибка при отправке форме. Мы уже разбираемся с этой проблемой. Пожалуйста перезагрузите страницу или попробуйте позжу.'
  
  console.log(container, title, text, button);
  container.innerHTML = '';
  container.append(title, text, button);

  button.addEventListener('click', (e) => {
    e.preventDefault();
    modalFeedback.classList.add('hidden');
  });
};

const renderSuccess = (titleModal, textModal) => {
  const container = document.querySelector('.modal__content--booking');
  const title = document.createElement('h2');
  const text = document.createElement('p');
  const button = document.createElement('button');

  title.classList.add('modal__title');
  title.textContent = titleModal;
  button.classList.add('subs-form__submit');
  button.textContent = 'Закрыть';
  text.textContent = textModal;
  
  container.innerHTML = '';
  container.append(title, text, button);

  button.addEventListener('click', (e) => {
    e.preventDefault();
    modalFeedback.classList.add('hidden');
  });
};

formFeedback.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = serializeData(e.target);
  setDisabledFieldsBooking(e.target);

  try {
    const res = await fetch('/api/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data,
    });
    if (ERRORS.includes(res.status)) {
      console.log('click')
      renderError();
      return;
    }
    renderSuccess();
  } catch (error) {
    console.log(error);
    renderError();
  }
});

formSubs.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = serializeData(e.target);
  setDisabledFieldsSub(e.target);

  try {
    const res = await fetch('/api/sub', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data,
    });
    if (ERRORS.includes(res.status)) {
      renderError()
      return;
    }
    renderSuccess();
    modalSubs.classList.add('hidden');
  } catch (error) {
    console.log(error);
    console.log(renderError());
  }
});

buttonCloseFeedback.addEventListener('click', (e) => {
  e.preventDefault();
  modalFeedback.classList.add('hidden');
});

buttonCloseSubs.addEventListener('click', (e) => {
  e.preventDefault();
  modalSubs.classList.add('hidden');
});

subsButton.addEventListener('click', (e) => {
  e.preventDefault();
  modalSubs.classList.remove('hidden');
});

bookingButton.addEventListener('click', (e) => {
  e.preventDefault();
  modalFeedback.classList.remove('hidden');
});

dreamButton.addEventListener('click', (e) => {
  e.preventDefault();
  modalFeedback.classList.remove('hidden');
});