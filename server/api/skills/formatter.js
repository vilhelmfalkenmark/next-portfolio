import { map, path } from 'ramda';

/**
 * @function cleanSkill
 */
const cleanSkill = item => ({
  id: path(['sys', 'id'], item),
  title: path(['fields', 'title'], item),
  level: path(['fields', 'level'], item)
});

/**
 * @function skillsApiResponse
 * @param {Object} entry contentful service response
 * @returns {Array}
 */
export const skillsApiResponse = entry => {
  return map(item => cleanSkill(item), path(['items'], entry));
};

export default skillsApiResponse;
