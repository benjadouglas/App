import React, { useEffect, useState } from "react";
import { useAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import { validateUser } from "./api/Users";

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const result = await validateUser();
      setIsValid(result);
      setLoading(false);
    };
    checkUser();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (isValid === false) {
    return <Navigate to="/loginu" />;
  }

  return children;
};

export default ProtectedRoute;
