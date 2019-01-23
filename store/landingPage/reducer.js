// import {
//   LANDINGPAGE_FETCHING,
//   LANDINGPAGE_FULFILLED,
//   LANDINGPAGE_REJECTED
// } from "store/actionTypes";

const iS = {
  fulfilled: false,
  fetching: false,
  error: false,
  data: []
};

const landingPage = (state = iS, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default landingPage;
