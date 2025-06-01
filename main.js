const backgroundColor = document.querySelector('.background');
const allBoxs = document.querySelectorAll('.box');
const colorName = document.querySelector('.color-name')
backgroundColor.addEventListener('click', function (e) {
    if (e.target.classList.contains('box')) {
        const color = e.target.dataset.color;
        backgroundColor.style.backgroundColor = color;
        colorName.textContent = color;
        allBoxs.forEach(box => box.classList.remove('active'))
        e.target.classList.add('active')
    };
});
