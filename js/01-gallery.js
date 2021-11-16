import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryElements = document.querySelector(".gallery");
let galleryMarkup = createMarkup(galleryItems);
galleryElements.insertAdjacentHTML("beforeend", galleryMarkup);
let instance;

function createMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}"alt="${description}"/>
        </a>
    </div>
    `;
    }).join('');
};

galleryElements.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    createBasicLightbox(event.target);
    openModal(instance);
};

function createBasicLightbox(img) {
    instance = basicLightbox.create(`
    <img src="${img.getAttribute('data-source')}" width="800" height="600">`);
};

function openModal() {
    instance.show();

    window.addEventListener('keydown', closeModalEsc)
};

function closeModalEsc(event) {
    if (event.code !== 'Escape') {
        return;
    }
    instance.close();

    window.removeEventListener('keydown', closeModalEsc);
};