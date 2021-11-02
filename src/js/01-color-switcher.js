const startButton = document.querySelector('button[data-start]');
const endButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

startButton.addEventListener('click', () => {
    timerId = setInterval(() => {
        onStartBtnClick();
    }, 1000);
});


// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });


function onStartBtnClick() {
    body.style.backgroundColor = getRandomHexColor();
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// console.log(body);


// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона <body> 
// на случайное значение используя инлайн стиль.
//  При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.