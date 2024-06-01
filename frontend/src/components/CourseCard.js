import React from 'react';

const CourseCard = ({ title, image, description, buttonText, onClick }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} />
      <div className="course-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default CourseCard;