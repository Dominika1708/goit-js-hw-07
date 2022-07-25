import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItem = galleryItems
  .map(
    (item) =>
      `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image"
    src = "${item.preview}"
    alt = "${item.description}"
    title = "${item.description}"/>
    </a>`
  )
  .join("");

gallery.innerHTML = galleryItem;

(function () {
    var lightbox = new SimpleLightbox(".gallery a", {});
})();
