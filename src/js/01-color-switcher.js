const refs = {
    startButton: document.querySelector('button[data-start]'),
    endButton: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
};
let timerId = null;

refs.endButton.setAttribute('disabled', 'disabled');

refs.startButton.addEventListener('click', () => {
    timerId = setInterval(() => {
        onStartBtnClick();
    }, 1000);
});

refs.endButton.addEventListener('click', onEndBtnClick)

function onStartBtnClick() {
    refs.endButton.removeAttribute('disabled');
    refs.startButton.setAttribute('disabled', 'disabled');
    refs.body.style.backgroundColor = getRandomHexColor();
    
}

function onEndBtnClick() {
    clearInterval(timerId);
    refs.startButton.removeAttribute('disabled');
    refs.endButton.setAttribute('disabled', 'disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
