import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { saveComment, fetchComment } from "../actions/commentActions";

import requireAuth from "./requireAuth";

const CommentBox = () => {
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(saveComment(comment));
          setComment("");
        }}
      >
        <h4>Add a comment</h4>
        <textarea
          name="comment"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <button type="submit">Add Comment</button>
        </div>
      </form>
      <button
        className="fetch-comments"
        onClick={() => dispatch(fetchComment())}
      >
        Fetch comments
      </button>
    </div>
  );
};

export default requireAuth(CommentBox);
