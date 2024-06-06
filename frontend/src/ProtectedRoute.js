import React, { useEffect, useState } from "react";
import { useAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import { validateUser } from "./api/Users";

const ProtectedRoute = ({ children }) => {
  // const [name, setName] = useState("");
  // const { user } = useAuth();
  // if (!user) {
  //   return <Navigate to="/loginu" />;
  // }
  const { ok } = validateUser();
  if (ok === false) {
    return <Navigate to="/loginu" />;
  } else if (ok === true) {
    return children;
  }
};

export default ProtectedRoute;
