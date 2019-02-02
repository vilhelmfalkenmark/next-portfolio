import { view, lensPath, map, path } from 'ramda';

/**
 * @function pluckImageUrl
 */
export const pluckImageUrl = imageObject =>
  view(lensPath(['fields', 'file', 'url']), imageObject);

/**
 * @function cleanExperiences
 */
const cleanExperiences = item => ({
  id: path(['sys', 'id'], item),
  title: path(['fields', 'title'], item),
  description: path(['fields', 'content'], item),
  startDate: path(['fields', 'content'], item),
  endDate: path(['fields', 'content'], item),
  imageUrl: path(['fields', 'image', 'fields', 'file', 'url'], item)
});

/**
 * @function experiencesApiResponse
 */
export const experiencesApiResponse = entry => {
  // return entry;

  return map(item => cleanExperiences(item), path(['items'], entry));
};

export default pluckImageUrl;
