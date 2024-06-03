// src/hooks/useUser.js
import { useState } from "react";

const useUser = () => {
  const [user, setUser] = useState({
    enrolledCourses: [], // Cursos en los que el usuario está inscrito
  });

  const enrollInCourse = (courseId) => {
    if (!user.enrolledCourses.includes(courseId)) {
      setUser((prevUser) => ({
        ...prevUser,
        enrolledCourses: [...prevUser.enrolledCourses, courseId],
      }));
    }
  };

  return { user, enrollInCourse };
};

export default useUser;
