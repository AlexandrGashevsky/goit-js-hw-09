function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const btnStart = document.querySelector("[data-start]");
  const btnStop = document.querySelector("[data-stop]");
  const bodyElement = document.querySelector('body');
  
  function update() {
      bodyElement.style.backgroundColor = getRandomHexColor();
  }
  var intervalId;
  btnStart.addEventListener('click', () => {
    intervalId = setInterval(update, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
  });

  btnStop.addEventListener('click', () => {
    clearInterval(intervalId);
    btnStop.disabled = true;
    btnStart.disabled = false;
  });