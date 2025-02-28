export const createGalleryImagesTemplate = picturesArr => {
    return picturesArr.reduce((acc, imageInfo) => {
        return (
            acc + 
            `
            <li class="gallery-item">
	          <a class="gallery-link" href="${imageInfo.original}">
		        <img
			      class="gallery-image"
			      src="${imageInfo.preview}"
			      alt="${imageInfo.description}"
			    />
	          </a>
            </li> 
            `
        );
    }, '');
}