  //1 Натискання на кнопку має виводити значення з поля введення
//   const input = document.getElementById('alertInput');
// const btn = document.getElementById('alertButton');
// btn.addEventListener('click', ()=>{ //вішаємо слухач на кнопку btn
//     console.log(input.value)

// });
//////////////////////////////////
//2 Після натискання на кнопку здійснюється обмін вмістом між двома інпутами
// const btn = document.querySelector('#swapButton');
// const leftSwap = document.querySelector('#leftSwapInput');
// const rightSwap = document.querySelector('#rightSwapInput');
// btn.addEventListener('click', () => {  //вішаємо слухач на кнопку btn
//     const changes = leftSwap.value;//витягуємо властивість value з поля
//     leftSwap.value = rightSwap.value;//порівнюємо
//     rightSwap.value = changes;

// })
///////////////////////////////////
//3 Кнопка hidden ховає текст input на **** і міняє свою назву на appear
// у разі повторного натискання текст набуває початкового вигляду
//1. міняю тукст в кнопці 
// const passwordInput = document.querySelector('#passwordInput');
// const passwordButton = document.querySelector('#passwordButton');
// passwordButton.addEventListener('click', toggle);//вішаємо слухач на кнопку btn
// function toggle (event) {
//     event.target.textContent =
//      event.target.textContent === 'hide' ? 'appear' : 'hide';
//     //міняємо інпут на type password
//     passwordInput.type = 
//     passwordInput.type === "text" ? 'password' : "text"; 
// }
//////////////////////////////////////////
// 4 є дві кнопки 
//кнопка decrease зменшити зробить квадрат меншим на 10пікс
//кнопка  increase збільшити зробить квадрат більшим на 10 пікс
// щоб змінити ширину елемента потрібно достукатись через style до width
const btnDecrease = document.querySelector('#decrease');
const btnIncrease = document.querySelector("#increase");
const divBox = document.querySelector("#box");
//робимо два обробники подій на btn
// btnIncrease.addEventListener('click', increaseListener);
// btnDecrease.addEventListener('click', decreaseListener);
// //на зменшення
// function decreaseListener () {
//   const compitedSize = divBox.getBoundingClientRect().width;//getBoundingClientRect()метод щоб знайти ширину елемента
// divBox.style.width = divBox.style.height = `${compitedSize - 10}px`;
// }
// //на збільшення
// function increaseListener () {
//   const compitedSize = divBox.getBoundingClientRect().width;
// divBox.style.width = divBox.style.height = `${compitedSize + 10}px`;
// }
/////////////////// або  робимо делегування події
// document.querySelector('.task task-4 hidden')
// addEventListener('click', increaseDelegetionsListener);
// function increaseDelegetionsListener (event) {
//   if(event.target.nodeName !== 'BUTTON') {
//     return
//   }
//   console.log(event.currentTarget, event.target);
//   if (event.target.id === 'increase') increaseListener();
//   if(event.target.id === 'decrease') decreaseListener();
// }
// //на зменшення
// function decreaseListener () {
//   const compitedSize = divBox.getBoundingClientRect().width;//getBoundingClientRect()метод щоб знайти ширину елемента
// divBox.style.width = divBox.style.height = `${compitedSize - 10}px`;
// }
// // //на збільшення
// function increaseListener () {
//   const compitedSize = divBox.getBoundingClientRect().width;
// divBox.style.width = divBox.style.height = `${compitedSize + 10}px`;
// }
//////////////////////////////////////

//5 навісити слухач за кліком і визначити коли клік відбувається
//в середині а коли поза зоною елемента

// метод через event.target.id
// const place = document.getElementById("place");
// window.addEventListener('click', check);
// function check (event) {
//   console.log(event.target);
//   if(event.target.id === 'place') {
//     console.log('insude'); 
//   } else {
//     console.log('outsude');
//   }
// }

//скористатись методом  contains
// const place = document.getElementById("place");
// window.addEventListener('click', check);
// function check (event) {
//   // console.log(event.target.contains(place)); //тільки для перевірки
//   const res = place === event.target ? event.target.contains(place) : false;
//   console.log(res);
// };

/////////////////////////////////////
//5 по кліку на кнопку подвоїти значення кругом у два рази
const list = document.querySelector('.list');
const btn = document.getElementById('double');

btn.addEventListener('click', double);
function double () { //якщо з кнопкою не працюємо то параметр не потрібен
// console.log(Array.from(list.children));//тільки подивитись
// console.log(...list.children)
[...list.children].forEach (elm => {
  console.log(elm)
  elm.textContent *= 2;
})
}
