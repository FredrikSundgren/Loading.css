const loadingBar1 = document.querySelector('.loadingBar1')
const loadingBar2 = document.querySelector('.loadingBar2')
const loadingBar3 = document.querySelector('.loadingBar3')
const loadingBar4 = document.querySelector('.loadingBar4')
const loadingBtn = document.querySelector('#loadingBtn');
const loadingText = document.querySelector('.loadingText')


loadingBtn.addEventListener('click', function fadein() {
    loadingBar1.style.animation = '3s ease 3s normal forwards 1 fadein';
    loadingBar2.style.animation = '3s ease 10s normal forwards 1 fadein';
    loadingBar3.style.animation = '3s ease 20s normal forwards 1 fadein';
    loadingBar4.style.animation = '3s ease 30s normal forwards 1 fadein';
    loadingText.style.animation = 'fadeloop 5s infinite';
    loadingText.classList.add('show')
})