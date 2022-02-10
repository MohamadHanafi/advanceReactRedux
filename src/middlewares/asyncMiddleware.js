export default ({ dispatch }) =>
  (next) =>
  (action) => {
    // check to see if the action has payload or the payload is a promise
    if (!action.payload || !action.payload.then) return next(action);
    // if there is a promise, wait for the response
    // and then dispatch the new action
    action.payload.then((response) => {
      const newAction = { ...action, payload: response };
      dispatch(newAction);
    });
  };
