// src/pages/CourseDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import useCourses from '../hooks/useCourses';
import CourseDetail from '../components/CourseDetail';
import useUser from '../hooks/useUser';

const CourseDetailPage = () => {
  const { id } = useParams();
  const { courses, loading, error } = useCourses();
  const { enrollInCourse } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const course = courses.find(course => course.id === parseInt(id, 10));

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleEnroll = (courseId) => {
    enrollInCourse(courseId);
  };

  return <CourseDetail course={course} onEnroll={handleEnroll} />;
};

export default CourseDetailPage;
