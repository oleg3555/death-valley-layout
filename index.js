const images = document.querySelectorAll(".section-works-content a");
const popup = document.querySelector('.popup');
const popupImage = popup.querySelector('.popup-image');
const worksContent = document.querySelector('.section-works-content');

for (let i = 0; i < images.length; i++) {
    const element = images[i];
    element.addEventListener('click', function () {
        popupImage.appendChild(element);
        popup.classList.add('popup-open');
        popup.addEventListener('click', function () {
            popup.classList.remove('popup-open');
            for (let j = 0; j < images.length; j++) {
                worksContent.appendChild(images[j]);
            }
        });
    })
}
