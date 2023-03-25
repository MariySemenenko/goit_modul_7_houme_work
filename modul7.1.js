//опрацьовуємо аналог ховера mauseover event
//змінити координати кнопки
//змінити координати рандомно
//кнопки не мають виходити за межі екрану
//має бути делегування подій

//опрацьовуємо аналог ховера mauseover event
// const container = document.querySelector('.container');


// container.addEventListener('mouseover', function(event) {
//     // console.log('its works'); //отримуємо доступ до фокуса події
//     console.log('event.target', event.target); //доступ до самої події btn
//     console.log('event.currentTarget',event.currentTarget ); //доступ до елемента на яку навішали подію container
//     console.log('this', this); //якщо функція без => this то попадає в target(containar)
// });
 
//змінити координати кнопки
// const focusListener = (event) => { //достукуємось до eventa
// // console.log('event.target', event.target);
// const {target: button} = event; //деструкторизація target і переназвали на button
// // button.style.top = '300px'; //міняємо координати кнопок фіксованим значенням
// // button.style.left = '400px'; //міняємо координати кнопок фіксованим значенням
// console.log('button', button);

// //або рандомні координати кнопок
// button.style.top = `${Math.floor(Math.random * 1000)}px`;
// button.style.left = `${Math.floor(Math.random * 1000)}px`;
// }
// container.addEventListener('mouseover', focusListener);