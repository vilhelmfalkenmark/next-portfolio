import {
  SKILLS_FETCHING,
  SKILLS_FULFILLED,
  SKILLS_REJECTED
} from 'store/reduxActionTypes';

const iS = {
  fulfilled: false,
  fetching: false,
  rejected: false,
  errorMessage: null,
  data: []
};

const skills = (state = iS, action) => {
  switch (action.type) {
    case SKILLS_FETCHING: {
      return { ...state, fetching: true };
    }
    case SKILLS_FULFILLED: {
      return {
        ...state,
        fulfilled: true,
        fetching: false,
        data: action.payload
      };
    }
    case SKILLS_REJECTED: {
      return {
        ...state,
        fulfilled: false,
        fetching: false,
        rejected: true,
        errorMessage: action.payload
      };
    }

    default:
      return state;
  }
};

export default skills;
