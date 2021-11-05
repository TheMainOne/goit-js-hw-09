import { reject, set } from 'lodash';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onSubmitHandler);

function onSubmitHandler(event) {
  event.preventDefault();

  const {
    elements: { delay, step, amount}
  } = event.currentTarget;
  let firstDelay = Number(delay.value);
  let delayStep = Number(step.value);
  let selectedAmount = Number(amount.value);

  for (let i = 1; i <= selectedAmount; i += 1) {
      createPromise(i, firstDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
      firstDelay += delayStep;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
}

