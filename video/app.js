const video = document.getElementById('myVideo');

const preloader = document.querySelector('.preloader');

const btn = document.querySelector('[data-button]');


window.addEventListener('load', () => {
        preloader.classList.add('hide-preloader');
});


btn.addEventListener('click', () => {
    if(btn.classList.contains('switch')) {
        btn.classList.remove('switch');
        video.play();
    }
    else {
        btn.classList.add('switch');
        video.pause();
    }
});