import asyncRequest from 'utils/network/asyncRequest';

import {
  PROJECTS_FETCHING,
  PROJECTS_FULFILLED,
  PROJECTS_REJECTED,
  PROJECT_BY_ID_FETCHING,
  PROJECT_BY_ID_FULFILLED,
  PROJECT_BY_ID_REJECTED
} from 'store/actionTypes';

//////////////////////////////////////////////////
/**
 * ALL PROJECTS
 */
//////////////////////////////////////////////////

export function fetchProjects() {
  return dispatch =>
    asyncRequest
      .get('/projekt')
      .then(({ data }) =>
        dispatch({ type: PROJECTS_FULFILLED, payload: data.data })
      )
      .catch(err => {
        dispatch({ type: PROJECTS_REJECTED, payload: err });
      });
}

//////////////////////////////////////////////////
/**
 * SINGLE PROJECT
 */
//////////////////////////////////////////////////
export function fetchProjectById(url) {
  return dispatch =>
    asyncRequest
      .get(url)
      .then(({ data }) =>
        dispatch({ type: PROJECT_BY_ID_FULFILLED, payload: data.data })
      )
      .catch(err => {
        dispatch({ type: PROJECT_BY_ID_REJECTED, payload: err });
      });
}

// Project is already present in store
export const projectByIdAlreadyInStore = project => ({
  type: PROJECT_BY_ID_FULFILLED,
  payload: project
});

export default fetchProjects;
