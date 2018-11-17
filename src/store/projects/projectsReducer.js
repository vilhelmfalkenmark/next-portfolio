import {
  PROJECTS_FETCHING,
  PROJECTS_FULFILLED,
  PROJECTS_REJECTED,
  PROJECT_BY_ID_FETCHING,
  PROJECT_BY_ID_FULFILLED,
  PROJECT_BY_ID_REJECTED
} from 'store/actionTypes';

const iS = {
  projectsFulfilled: false,
  projectsFetching: false,
  projectsRejected: false,
  pageNotFound: false,
  projectByIdFulfilled: false,
  projectByIdFetching: false,
  projectByIdRejected: false,
  projectById: {},
  data: []
};

const projects = (state = iS, action) => {
  switch (action.type) {
    /**
     * ALL PROJECTS
     */
    case PROJECTS_FETCHING: {
      return Object.assign({}, state, {
        projectsFetching: true
      });
    }
    case PROJECTS_FULFILLED: {
      return Object.assign({}, state, {
        projectsFulfilled: true,
        projectsFetching: false,
        data: action.payload
      });
    }
    case PROJECTS_REJECTED: {
      return Object.assign({}, state, {
        projectsFulfilled: false,
        projectsFetching: false,
        projectsRejected: true
      });
    }
    /**
     * SINGLE PROJECT
     */
    case PROJECT_BY_ID_FETCHING: {
      return Object.assign({}, state, {
        projectByIdFetching: true
      });
    }
    case PROJECT_BY_ID_FULFILLED: {
      return Object.assign({}, state, {
        projectByIdFulfilled: true,
        projectByIdFetching: false,
        projectByIdRejected: false,
        projectById: action.payload
      });
    }
    case PROJECT_BY_ID_REJECTED: {
      return Object.assign({}, state, {
        projectByIdFulfilled: false,
        projectByIdFetching: false,
        projectByIdRejected: true
      });
    }
    default:
      return state;
  }
};

export default projects;
