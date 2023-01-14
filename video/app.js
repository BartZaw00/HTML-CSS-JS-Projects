const video = document.getElementById('myVideo');

const btn = document.querySelector('[data-button]');


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