// src/hooks/useCourses.js
import { useState, useEffect } from 'react';
import { mockCourses } from '../mockData'; // Importa los datos ficticios

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setCourses(mockCourses);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, loading, error };
};

export default useCourses;
