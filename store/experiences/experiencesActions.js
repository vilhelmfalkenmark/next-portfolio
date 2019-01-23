import asyncRequest from 'utils/network/asyncRequest';

import {
  EXPERIENCES_FULFILLED,
  EXPERIENCES_REJECTED
} from 'store/reduxActionTypes';

/**
 * @function fetchExperiences
 */
export function fetchExperiences() {
  return dispatch =>
    asyncRequest
      .get('/experiences')
      .then(({ data }) =>
        dispatch({ type: EXPERIENCES_FULFILLED, payload: data.data })
      )
      .catch(({ data }) => {
        dispatch({ type: EXPERIENCES_REJECTED, payload: data });
      });
}

export default fetchExperiences;
