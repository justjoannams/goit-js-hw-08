// import SimpleLightbox from "../node_modules/simplelightbox/src/simple-lightbox.js";
// import "../node_modules/simplelightbox/dist/simple-lightbox.min.js";
// import "../node_modules/simplelightbox/dist/simple-lightbox.js";
// Add imports above this line
import { galleryItems } from "./gallery-items.js";
// Change code below this line
const createItemsMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}"> <img class="gallery__image" src="${preview}" alt="${description}"/></a>`;
  })
  .join("");

const galleryContainerEl = document.querySelector(".gallery");
galleryContainerEl.insertAdjacentHTML("beforeend", createItemsMarkup);
let lightbox = new SimpleLightbox(".gallery a", {
  scrollZoom: false,
  captionDelay: 250,
  captionData: "alt",
  doubleTapZoom: 1,
});

galleryContainerEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
});
console.log(galleryItems);
