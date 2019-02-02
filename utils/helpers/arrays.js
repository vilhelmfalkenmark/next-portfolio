import { is, isEmpty } from 'ramda';

/**
 * Helper function to verify that passed argument is a valid
 * array with content. Used both as a truthty value and as a plucker
 * @function isArrayWithContent
 * @param {Array} array
 * @returns {Array} if array has content then return it.
 */
export const isArrayWithContent = array => {
  if (is(Array, array) && !isEmpty(array)) {
    return array;
  }
  return null;
};

export default isArrayWithContent;
