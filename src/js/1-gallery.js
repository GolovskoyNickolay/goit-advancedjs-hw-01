import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems as images } from './gallery-items';

const gallery = document.querySelector('.gallery');

const galleryItems = images.map(({ preview, original, description }) => {
  return `
		<li class="gallery__item">
			<a class="gallery__link" href="${original}">
			  <img
				class="gallery__image"
				src="${preview}"
				data-source="${original}"
				alt="${description}"
			  />
			</a>
		</li>
	`;
});

gallery.innerHTML = galleryItems.join('');

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
