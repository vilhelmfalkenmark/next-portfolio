import {
  PROJECTS_FETCHING,
  PROJECTS_FULFILLED,
  PROJECTS_REJECTED,
  OPEN_PROJECT_DETAIL_MODAL,
  CLOSE_PROJECT_DETAIL_MODAL
} from 'store/reduxActionTypes';

const iS = {
  fulfilled: false,
  fetching: false,
  rejected: false,
  errorMessage: null,
  data: [],
  modalIsOpen: false,
  modalProject: {
    id: '1a2b'
  }
};

const projects = (state = iS, action) => {
  switch (action.type) {
    case PROJECTS_FETCHING: {
      return { ...state, fetching: true };
    }
    case PROJECTS_FULFILLED: {
      return {
        ...state,
        fulfilled: true,
        fetching: false,
        data: action.payload
      };
    }
    case PROJECTS_REJECTED: {
      return {
        ...state,
        fulfilled: false,
        fetching: false,
        rejected: true,
        errorMessage: action.payload
      };
    }
    case OPEN_PROJECT_DETAIL_MODAL: {
      return {
        ...state,
        modalIsOpen: true,
        modalProject: action.payload
      };
    }
    case CLOSE_PROJECT_DETAIL_MODAL: {
      return {
        ...state,
        modalIsOpen: false
      };
    }
    default:
      return state;
  }
};

export default projects;
