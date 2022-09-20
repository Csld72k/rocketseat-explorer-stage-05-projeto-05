export default function Sound({
  checkboxForest,
  checkboxRain,
  checkboxCoffeeShop,
  checkboxFireplace,
  buttonPlay
}) {

  const forestSound = new Audio('https://github.com/Csld72k/claudiney/blob/master/cursos/rocketseat/programa-explorer/stage-05/04-focus-timer-2/sounds/Floresta.wav?raw=true');
  const rainSound = new Audio('https://drive.google.com/u/0/uc?id=1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2&export=download');
  const coffeeShopSound = new Audio('https://github.com/Csld72k/claudiney/blob/master/cursos/rocketseat/programa-explorer/stage-05/04-focus-timer-2/sounds/Cafeteria.wav?raw=true');
  const fireplaceSound = new Audio('https://github.com/Csld72k/claudiney/blob/master/cursos/rocketseat/programa-explorer/stage-05/04-focus-timer-2/sounds/Lareira.wav?raw=true');
  const finishTimerSound = new Audio('https://github.com/Csld72k/claudiney/blob/master/cursos/rocketseat/programa-explorer/stage-05/04-focus-timer-2/sounds/audios_kichen-timer.mp3?raw=true');

  forestSound.loop = true;
  rainSound.loop = true;
  coffeeShopSound.loop = true;
  fireplaceSound.loop = true;
  forestSound.volume = .5;
  rainSound.volume = .5;
  coffeeShopSound.volume = .5;
  fireplaceSound.volume = .5;

  function onOffForestSound(elementId) {

    let inputCheckbox = document.querySelector(elementId);

    inputCheckbox.checked === true ? forestSound.play() : forestSound.pause();

  }

  function onOffRainSound(elementId) {

    let inputCheckbox = document.querySelector(elementId);

    inputCheckbox.checked === true ? rainSound.play() : rainSound.pause();

  }

  function onOffCoffeeShopSound(elementId) {

    let inputCheckbox = document.querySelector(elementId);

    inputCheckbox.checked === true ? coffeeShopSound.play() : coffeeShopSound.pause();

  }

  function onOffFireplaceSound(elementId) {

    let inputCheckbox = document.querySelector(elementId);

    inputCheckbox.checked === true ? fireplaceSound.play() : fireplaceSound.pause();

  }

  function finishSound() {

    if (buttonPlay.classList.contains('hide')) {

      finishTimerSound.volume = .1;
      finishTimerSound.play();

    }

  }

  function pauseAllSounds() {

    if (buttonPlay.classList.contains('hide')) {

      checkboxForest.checked = false;
      checkboxRain.checked = false;
      checkboxCoffeeShop.checked = false;
      checkboxFireplace.checked = false;
      rainSound.pause();
      coffeeShopSound.pause();
      fireplaceSound.pause();
      forestSound.pause();

    }

  }

  function changeVolume(id, value) {

    if (id == 'forestVolume') {
      forestSound.volume = value / 10;
      console.log(forestSound)
      console.log(forestSound.volume)
    }

    if (id == 'rainVolume') {
      rainSound.volume = value / 10;
      console.log()
    }

    if (id == 'coffeeShopVolume') {
      coffeeShopSound.volume = value / 10;
      console.log()
    }

    if (id == 'fireplaceVolume') {
      fireplaceSound.volume = value / 10;
      console.log()
    }

    // forestSound.volume = 1;
    // rainSound.volume = 1;
    // coffeeShopSound.volume = 1;
    // fireplaceSound.volume = 1;

  }

  return {
    onOffForestSound,
    onOffRainSound,
    onOffCoffeeShopSound,
    onOffFireplaceSound,
    finishSound,
    pauseAllSounds,
    changeVolume
  }
}
