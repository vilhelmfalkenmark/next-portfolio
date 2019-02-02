import {
  EXPERIENCES_FETCHING,
  EXPERIENCES_FULFILLED,
  EXPERIENCES_REJECTED
} from 'store/reduxActionTypes';

const iS = {
  fulfilled: false,
  fetching: false,
  rejected: false,
  errorMessage: null,
  data: []
};

const experiences = (state = iS, action) => {
  switch (action.type) {
    case EXPERIENCES_FETCHING: {
      return { ...state, fetching: true };
    }
    case EXPERIENCES_FULFILLED: {
      return {
        ...state,
        fulfilled: true,
        fetching: false,
        data: action.payload
      };
    }
    case EXPERIENCES_REJECTED: {
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

export default experiences;
