import { SAVE_COMMENT } from "../../constants/commentConstants";
import { commentReducer } from "../commentReducers";

it("handles action type 'SAVE_COMMENT'", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment",
  };

  const newState = commentReducer([], action);
  expect(newState).toEqual(["New Comment"]);
});

it("handles actions with unknown types", () => {
  expect(commentReducer([], {})).toEqual([]);
});
