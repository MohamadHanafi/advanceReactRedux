import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const requireAuth = (Component) => {
  const ComposedComponent = (props) => {
    const { auth } = useSelector((state) => state);
    const navigate = useNavigate();
    useEffect(() => {
      if (!auth) {
        navigate("/");
      }
    }, [navigate, auth]);
    return <Component {...props} />;
  };

  return ComposedComponent;
};

export default requireAuth;
