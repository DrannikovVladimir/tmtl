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

const setDisabledFields = (form) => {
  const nameField = form.querySelector('[name="name"]');
  const phoneField = form.querySelector('[name="phone"]');
  const commentField = form.querySelector('[name="comment"]');
  const buttonSubmit = form.querySelector('.feedback-form__submit');

  nameField.setAttribute('disabled', true);
  phoneField.setAttribute('disabled', true);
  commentField.setAttribute('disabled', true);
  buttonSubmit.setAttribute('disabled', true);
};

formFeedback.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = serializeData(e.target);
  // setDisabledFields(e.target);
  console.log(data);
});

formSubs.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = serializeData(e.target);
  console.log(data);
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