import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItem = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image"
    src = "${item.preview}"
    data-source = "${item.original}"
    alt = "${item.description}"/>
    </a></div>`
  )
  .join("");

gallery.innerHTML = galleryItem;

gallery.addEventListener("click", (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  const selectedImg = e.target.getAttribute("data-source");

  const instance = basicLightbox.create(
    `
    <img src="${selectedImg}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") instance.close();
        });
      },
    }
  );

  instance.show();
});
