const navs = document.querySelectorAll('.tabs-nav__button');
    const contents = document.querySelectorAll('.tabs-content__item');
    const minPrice = document.querySelector('.article__content-container__min-price');
    const content = document.querySelector('.article__content-container__country');
    const weather = document.querySelector('.article__content-container__min-price__weather');
    const obj = {
      button1: 'content1',
      button2: 'content2',
      button3: 'content3',
      button4: 'content4',
      button5: 'content5',
    };

    navs.forEach((nav) => {
      nav.addEventListener('click', () => {
        const navCurrent = nav.getAttribute('data-toggle');
        console.log(navCurrent);
        if (navCurrent === 'button2') {
          content.classList.add('article__content--full-width');
          minPrice.classList.add('visually-hidden');
        } else {
          content.classList.remove('article__content--full-width');
          minPrice.classList.remove('visually-hidden');
        }

        if (navCurrent !== 'button1') {
          weather.classList.add('visually-hidden');
        } else {
          weather.classList.remove('visually-hidden');
        }
        navs.forEach((el) => {
          el.classList.remove('tabs-nav__button--active')
        });
        contents.forEach((el) => {
          el.classList.remove('tabs-content__item--active');
        });

        nav.classList.add('tabs-nav__button--active');
        
        contents.forEach((content) => {
          const currentContent = content.getAttribute('data-toggle');
          if (currentContent === obj[navCurrent]) {
            content.classList.add('tabs-content__item--active');
          }
        });        
      });
    });