import asyncRequest from 'utils/network/asyncRequest';

import {
  SKILLS_FETCHING,
  SKILLS_FULFILLED,
  SKILLS_REJECTED
} from 'store/reduxActionTypes';

/**
 * @function fetchSkills
 */
export function fetchSkills() {
  return dispatch => {
    dispatch({ type: SKILLS_FETCHING });
    return asyncRequest
      .get('/skills')
      .then(({ data }) =>
        dispatch({ type: SKILLS_FULFILLED, payload: data.data })
      )
      .catch(({ data }) => {
        dispatch({ type: SKILLS_REJECTED, payload: data });
      });
  };
}

export default fetchSkills;
