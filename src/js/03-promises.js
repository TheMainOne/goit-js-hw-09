import { reject, set } from 'lodash';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onSubmitHandler);

function onSubmitHandler(event) {
  event.preventDefault();

  const { delay, step, amount } = Object.fromEntries(new FormData(refs.form));

  for (let i = 1; i < amount - 1; i += 1) {
    const firstDelay = Number(delay);
    let ourStep = firstDelay;

    createPromise(i, ourStep).then(value => Notify.success(value)).catch(error => Notify.failure(error));
    ourStep += Number(step);
    console.log(ourStep);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
