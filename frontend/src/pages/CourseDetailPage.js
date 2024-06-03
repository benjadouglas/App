// src/pages/CourseDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import useCourses from '../hooks/useCourses';
import CourseDetail from '../components/CourseDetail';

const CourseDetailPage = () => {
  const { id } = useParams();
  const { courses, loading, error } = useCourses();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const course = courses.find(course => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return <CourseDetail course={course} />;
};

export default CourseDetailPage;
