//throttle


// const scrollHandler = () => { //створюю функцію scrollHandler яка має подію scroll
//     console.log('scroll');
// };
// //вішаємо подію на window
// addEventListener('scroll', _.throttle(scrollHandler, 300));   //   1000/3=3.3 scroll
// //by one second scroll do two times
///////////////////////////////////////////////////////////

//перевіряємо наявність event на клавіатурі
//навішаємо обробник події  на кнопку Escape 
// addEventListener('keydown', (event) => {
// if (event.key === 'Escape'); {
// }
// console.log(event);
// })


/////////////////////////////////////
//дебажимо код
// const name = 'Bob';
// debugger;
// const age = 12;
// debugger;
// const user = {
//     name: 'jack',
// }

// for (let i = 0; i < 5; i ++) {
//     debugger;
//     console.log(i);
// }
///////////////////////////////////////

//DEBOUNCE
//TODO
//СТВОРИМО СПИСОК на основі готового масиву
//додамо форму на екран і будемо доповнювати масив новими елементами
const productList = [
    {
        id: 1,
        text: 'milk',
    },
    {
        id: 2,
        text: 'meat',
    },
    {
        id: 3,
        text: 'bread',
    },
    {
        id: 4,
        text: 'lamon',
    },
    {
        id: 5,
        text: 'apple',
    },
]
// створюємо li використовуючи шаблонні рядки
//в результаті має бути шаблонний рядок з с=усіма лішками відразу
// const renderList = (products) => {
// const result = products.map((product) => `<li id="${product.id}">${product.text}></li>`
// ).join("");
// return result;

// };

// console.log(renderList(productList));
//або так 

// const renderList = (products) => products
// .map(({id, text}) => `<li id="${id}">${text}></li>`)
// .join(""); 
//     console.log(renderList(productList));

//або переписуємо метод на  reduce
const form = document.querySelector('.form');
const input = document.querySelector('.input');

const renderList = (products) => products
 .reduce((acc, {id, text}) => acc + `<li id="${id}">${text}</li>`,'');

 const insertListItem = (string) => {
    const ul = document.querySelector('.list');//стукаю до li class .list
    ul.insertAdjacentHTML('beforeend', string); //вставляємо розмітку на екран
 }
 
    console.log(renderList(productList));
    insertListItem(renderList(productList));
    //тепер ми динамічно вставляємо нові елементи в розмітку

    const submitHendler = (event) => {
        event.preventDefault();  //зупиняю перезавантаження сторінки

        const li = `<li id="${input.value}">${input.value}</li>`; //зчитую дані з імпута в консоль та вставляю в li

        insertListItem(li); // передаю дані не в консоль а на екран
    }

    form.addEventListener('submit', submitHendler); 


 