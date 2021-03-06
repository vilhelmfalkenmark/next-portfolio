import { view, lensPath, map, path } from 'ramda';

/**
 * @function pluckImageUrl
 */
export const pluckImageUrl = imageObject =>
  view(lensPath(['fields', 'file', 'url']), imageObject);

/**
 * @function cleanProject
 */
const cleanProject = item => ({
  id: path(['sys', 'id'], item),
  createdAt: path(['sys', 'createdAt'], item),
  title: path(['fields', 'title'], item),
  content: path(['fields', 'content'], item),
  link: path(['fields', 'link'], item),
  imageUrl: path(['fields', 'image', 'fields', 'file', 'url'], item),
  imageAlt: path(['fields', 'imageAlt'], item),
  slug: path(['fields', 'slug'], item),
  stack: path(['fields', 'skills'], item)
    ? map(
        s => ({
          title: path(['fields', 'title'], s),
          level: path(['fields', 'level'], s)
        }),
        path(['fields', 'skills'], item)
      )
    : null
});

/**
 * @function projectsApiResponse
 */
export const projectsApiResponse = entry => {
  return map(item => cleanProject(item), path(['items'], entry));
};

export default pluckImageUrl;
