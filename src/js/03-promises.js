const form = document.querySelector('form');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
return promise;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let delay = Number(event.currentTarget.delay.value);
  let step = Number(event.currentTarget.step.value);
  let amount = Number(event.currentTarget.amount.value);
  let position = 0;
  setInterval(() => {
    if(position >= amount){
      return;
    }
    position += 1;
    setTimeout(() => {
      delay += step;
    });
    createPromise(position, delay).then(({position, delay}) =>{
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({position, delay}) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }, step);
}); 




