import images from './imagesData.json';
import { createGalleryImagesTemplate } from './render-functions';
import SimpleLightbox from "simplelightbox";

const galleryList = document.querySelector(".gallery")
galleryList.innerHTML = createGalleryImagesTemplate(images);

galleryList.style.listStyleType = "none";
galleryList.style.width = "1128px";
galleryList.style.height = "648px";
galleryList.style.padding = "24px 156px";
galleryList.style.display = "grid";
galleryList.style.gridTemplateColumns = "repeat(3, 1fr)";
galleryList.style.gap = "24px";
galleryList.style.background = "#FFF";
galleryList.style.position = "relative";

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
})

const galleryItems = document.querySelectorAll(".gallery-item")
galleryItems.forEach(galleryItem => {
    galleryItem.style.width = "360px";
    galleryItem.style.height = "200px";

    const img = galleryItem.querySelector("img");
    if (img) {
        img.style.width = "360px";
        img.style.height = "200px";
    }
})