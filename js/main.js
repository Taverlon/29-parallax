let moon = document.getElementById('moon');
let text = document.getElementById('text');
let train = document.getElementById('train');
let man = document.getElementById('man');
let desert_moon = document.getElementById('desert-moon');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    moon.style.top = value * 0.9 + 'px';
    text.style.top = 80 + value * -0.05 + '%';
    train.style.left = value * 1.5 + 'px';
    man.style.left = value * 1 + 'px';
    desert_moon.style.top = value * 0.3 + 'px';
})