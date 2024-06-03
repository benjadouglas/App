// src/components/CourseDetail.js
import React from 'react';

const CourseDetail = ({ course, onEnroll }) => {
  if (!course) {
    return <div>Course not found</div>;
  }

  const { title, description, instructor, duration, requirements, material } = course;

  return (
    <div className="course-detail">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="course-info">
        <p><b>Instructor:</b> {instructor}</p>
        <p><b>Duration:</b> {duration}</p>
        <p><b>Requirements:</b> {requirements}</p>
        <p><b>Material:</b> {material}</p>
      </div>
      <button onClick={() => onEnroll(course.id)}>Enroll</button>
    </div>
  );
};

export default CourseDetail;
