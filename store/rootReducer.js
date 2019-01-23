import { combineReducers } from 'redux';

import projects from 'store/projects/projectsReducer';
import experiences from 'store/experiences/experiencesReducer';
import skills from 'store/skills/skillsReducer';

const reducer = combineReducers({
  projects,
  experiences,
  skills
});

export default reducer;
