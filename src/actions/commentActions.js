import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS } from "../constants/commentConstants";

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

export const fetchComment = () => {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");
  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
};
