const bookingItems = document.querySelectorAll('.booking-list__item');
const bookingButtons = document.querySelectorAll('.booking-list__button');
const bookingTexts = document.querySelectorAll('.booking-list__text');

bookingButtons.forEach((button) => {
  button.addEventListener('click', (e) => {

    bookingTexts.forEach((text) => {
      text.classList.remove('booking-list__text--show');
    });

    bookingItems.forEach((item) => {
      item.classList.remove('booking-list__item--active');
    })

    button.nextElementSibling.classList.add('booking-list__text--show');
    button.parentElement.classList.add('booking-list__item--active');
  });
});