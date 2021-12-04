const body = document.getElementsByTagName('body');
// console.log(body[0].innerHTML);
body[0].style.height=window.innerHeight.toString() + 'px';
console.log(window.innerHeight);
const button = document.querySelector('.helikopter-button');
const musiq = document.querySelector('.musique');
const topFan = document.querySelector('.blade-rotator');
const tailFan = document.querySelector('.tail-fan-container');

const bladeAttRot = document.querySelector('.blade-attachment');

let helikopterOn = false;

function toggleFxn()
{
    if (helikopterOn) {
        musiq.pause();
        topFan.style.animationPlayState = 'paused';
        tailFan.style.animationPlayState = 'paused';
        helikopterOn = false;
        // console.log(helikopterOn);
    } else {
        musiq.play();
        topFan.style.animationPlayState = 'running';
        tailFan.style.animationPlayState = 'running';
        helikopterOn = true;
        // console.log(helikopterOn);
    }
}

button.addEventListener('click', toggleFxn);