import tv4 from "tv4";
import stateSchema from "../schemas/stateSchem";

export default ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    next(action);

    if (!tv4.validate(getState(), stateSchema))
      console.warn("detecting invalid input in the state");
  };
