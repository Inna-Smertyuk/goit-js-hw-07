import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryElements = document.querySelector(".gallery");
let galleryMarkup = createMarkup(galleryItems);
galleryElements.insertAdjacentHTML("beforeend", galleryMarkup);

function createMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}" 
    />
  </a> `;
    }).join('');
};

const lightbox = new SimpleLightbox('.gallery a', { captions: true, captionsData: 'alt', captionDelay: 250 });