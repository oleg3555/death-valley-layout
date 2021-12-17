const images = document.querySelectorAll(".section-works-content img");
const popup = document.querySelector('.popup');
const popupImage = popup.querySelector('.popup-image img');

for (let i = 0; i < images.length; i++) {
    const element = images[i];
    element.addEventListener('click', function () {
        popup.classList.add('popup-open');
        popupImage.src=element.getAttribute('src');
        popup.addEventListener('click', function (evt) {
            if(evt.target!==popupImage) {
                popup.classList.remove('popup-open');
                popup.removeEventListener('click',this)
            }
        });
    })
}
