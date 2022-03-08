import { skills } from "../data/skills-data";

const INITIAL_STATE = skills;

const skillsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default skillsReducer;
