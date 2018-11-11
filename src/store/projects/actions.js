import axios from 'axios';

import asyncRequest from 'utils/network/asyncRequest';

import {
  PROJECTS_FETCHING,
  PROJECTS_FULFILLED,
  PROJECTS_REJECTED,
  PROJECT_DETAILS_FETCHING,
  PROJECT_DETAILS_FULFILLED,
  PROJECT_DETAILS_REJECTED
} from 'store/actionTypes';

// import { PROJECTS_ROUTE } from 'router/routes';

//////////////////////////////////////////////////
/**
 * ALL PROJECTS
 */
//////////////////////////////////////////////////

export function fetchProjects() {
  return dispatch =>
    asyncRequest
      .get('/projects')
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
// export const fetchProjectDetails = ({ store = {}, isServer, slug }) => {
//   return function(dispatch) {
//     if (!isServer) {
//       dispatch({ type: PROJECT_DETAILS_FETCHING });
//     }
//     return asyncRequest
//       .get(`${PROJECTS_ROUTE.apiPath}/${slug}/`)
//       .then(({ data }) => {
//         if (!isServer) {
//           dispatch({ type: PROJECT_DETAILS_FULFILLED, payload: data.data });
//         } else {
//           store.dispatch({
//             type: PROJECT_DETAILS_FULFILLED,
//             payload: data.data
//           });
//           return store;
//         }
//       })
//       .catch(err => {
//         if (!isServer) {
//           dispatch({ type: PROJECT_DETAILS_REJECTED, payload: err });
//         } else {
//           store.dispatch({ type: PROJECT_DETAILS_REJECTED, payload: err });
//           return store;
//         }
//       });
//   };
// };

// Project is already present in store
export const projectDetailsFromStore = project => ({
  type: PROJECT_DETAILS_FULFILLED,
  payload: project
});

export default fetchProjects;
