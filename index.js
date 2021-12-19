const popup = document.querySelector('.popup');
const popupImage = popup.querySelector('.popup-image img');
const container = document.querySelector('.works__content');

container.addEventListener('click', ({target}) => {
    if (target.tagName === 'IMG') {
        popup.classList.add('popup-open');
        popupImage.src = target.getAttribute('src');
        popup.addEventListener('click', (evt) => {
            if (evt.target !== popupImage) {
                popup.classList.remove('popup-open');
                popup.removeEventListener('click', this)
            }
        });
    }
})


document.querySelector('.contacts__form').onsubmit = function submit(e) {
    e.preventDefault();
    document.querySelectorAll('input')
        .forEach((input) => console.log(input.name, ': ', input.value));
};

