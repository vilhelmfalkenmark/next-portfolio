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
  description: view(
    lensPath(['fields', 'description', 'content', 0, 'content', 0, 'value']),
    item
  ),
  startDate: path(['fields', 'startDate'], item),
  endDate: path(['fields', 'endDate'], item),
  logoUrl: path(['fields', 'logo', 'fields', 'file', 'url'], item) || 'HEJ!'
});

/**
 * @function experiencesApiResponse
 */
export const experiencesApiResponse = entry => {
  return map(item => cleanExperiences(item), path(['items'], entry)).sort(
    (a, b) => new Date(b.endDate) - new Date(a.endDate)
  );
};

export default pluckImageUrl;
