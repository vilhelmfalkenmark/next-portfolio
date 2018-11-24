/**
 * @function addParamsToImage
 * @param {String} imageUrl e.g https://myimage.se/testImage.jpg
 * @param {Object} imageParams the params to be replaced in the string. Contains keys:
	@return {String} returns a URI encoded string with the passed paramas replaced.
 */

export const addParamsToImage = ({ imageUrl, imageParams }) => {
  if (!imageUrl) {
    return '';
  }
  return `${imageUrl}?w=${imageParams.w}`;
};

/**
 * @function getLazyImages
 * @param {String} imageRoot,
 * @param {Object} imageSizes config object with keys defaultSize and responsiveSizes. 
 * Can e.g look like: 
 * 	imageSizes: {
                defaultParams: { w: '2000' },
                responsiveSizes: [
                  { viewPort: '480px', imageParams: { w: '480' } },
                  { viewPort: '768px', imageParams: { w: '768' } },
                  { viewPort: '1000px', imageParams: { w: '1000' } }
                ],
                maxWidth: true
              }
 * @param {Object} imageSizes.defaultParams what the defaultParams should be to
 * the image outside the media queries conditionals.
 * @param {Array} imageSizes.responsiveSizes The different sizes we want to be able to 
 * lazyload depending on viewport. Think of these as media-queries.
 * @param {Boolean} imageSizes.maxWidth if we want the "media-queries" to be based on max-width or min-width
 * If this bool is true then max-width otherwise min-width
 * @return {String} 
 */

export const getLazyImages = ({
  imageUrl,
  imageSizes = { defaultParams: {}, responsiveSizes: [], maxWidth: true }
}) => {
  const responsiveSizes = imageSizes.responsiveSizes
    .reduce(
      (acc, { imageParams = {}, viewPort = '' }) =>
        `${acc} ${addParamsToImage({
          imageUrl,
          imageParams: {
            w: imageParams.w
          }
        })} [(${
          imageSizes.maxWidth ? 'max-width:' : 'min-width:'
        } ${viewPort})] |`,
      ''
    )
    .trim();

  return `${responsiveSizes} ${addParamsToImage({
    imageUrl,
    imageParams: {
      w: imageSizes.defaultParams.w
      // h: imageParams.h
    }
  })}`.trim();
};

export default getLazyImages;
