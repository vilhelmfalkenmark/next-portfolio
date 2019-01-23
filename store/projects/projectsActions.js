import asyncRequest from 'utils/network/asyncRequest';

import {
  PROJECTS_FETCHING,
  PROJECTS_FULFILLED,
  PROJECTS_REJECTED,
  OPEN_PROJECT_DETAIL_MODAL,
  CLOSE_PROJECT_DETAIL_MODAL
} from 'store/reduxActionTypes';

/**
 * @function fetchProjects
 */
export function fetchProjects() {
  return dispatch => {
    dispatch({ type: PROJECTS_FETCHING });
    return asyncRequest
      .get('/projects')
      .then(({ data }) =>
        dispatch({ type: PROJECTS_FULFILLED, payload: data.data })
      )
      .catch(({ data }) => {
        dispatch({ type: PROJECTS_REJECTED, payload: data });
      });
  };
}

/**
 * @function openProjectModal
 */
export const openProjectModal = project => ({
  type: OPEN_PROJECT_DETAIL_MODAL,
  payload: project
});

/**
 * @function closeProjectModal
 */
export const closeProjectModal = () => ({
  type: CLOSE_PROJECT_DETAIL_MODAL
});

export default fetchProjects;
