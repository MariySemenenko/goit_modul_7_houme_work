//throttle
//debounce

const scrollHandler = () => { //створюю функцію scrollHandler яка має подію scroll
    console.log('scroll');
};
//вішаємо подію на window
addEventListener('scroll', _.throttle(scrollHandler, 300)); //   1000/3=3.3 scroll
