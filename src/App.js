import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";

import { Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { changeAuth } from "./actions/authActions";

function App() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const renderSignInButton = () => {
    return (
      <button onClick={() => dispatch(changeAuth(!auth))}>
        {!auth ? "sign In" : "Sign Out"}
      </button>
    );
  };

  const renderHeader = () => (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">Post a Comment</Link>
      </li>
      <li>{renderSignInButton()}</li>
    </ul>
  );

  return (
    <>
      {renderHeader()}
      <Routes>
        <Route path="/" element={<CommentList />}></Route>
        <Route path="/post" element={<CommentBox />}></Route>
      </Routes>
    </>
  );
}

export default App;
