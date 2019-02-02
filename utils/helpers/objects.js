import { is, isEmpty } from 'ramda';

/**
 * Helper function to verify that passed argument is a valid
 * object with content. Used both as a truthty value and as a plucker
 * @function isObjectWithContent
 * @param {Array} array
 * @returns {Array} if array has content then return it.
 */
export const isObjectWithContent = object => {
  if (is(Object, object) && !isEmpty(object)) {
    return object;
  }
  return null;
};

export default isObjectWithContent;
