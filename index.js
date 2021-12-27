const popup = document.querySelector('.popup');
const popupImage = popup.querySelector('.popup__image img');
const gallery = document.querySelector('.works__content');

gallery.addEventListener('click', ({target}) => {
    if (target.tagName === 'IMG') {
        popup.classList.add('popup_open');
        popupImage.src = target.getAttribute('src');
        popup.addEventListener('click', (event) => {
            if (event.target !== popupImage) {
                popup.classList.remove('popup_open');
                popup.removeEventListener('click', this)
                popupImage.removeAttribute('src');
            }
        });
    }
})

const form=document.querySelector('.contacts__form');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    form.querySelectorAll('input')
        .forEach((input) =>{
            console.log(`${input.name}: ${input.value}`);
            input.value='';
        });
})

