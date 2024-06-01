import React, { useState, useEffect } from 'react';
import { useCourses } from '../hooks/useCourses';
import SearchBar from './SearchBar';
import CourseCard from './CourseCard';



const CourseList = () => {
  const { courses, loading, error } = useCourses();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter((course) => {
    if (!searchTerm) return true;

    const searchText = searchTerm.toLowerCase();
    return (
      course.title.toLowerCase().includes(searchText) ||
      course.description.toLowerCase().includes(searchText)
    );
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!filteredCourses.length) {
    return <div>No courses found.</div>;
  }

  return (
    <div className="course-list">
      <h2>Available Courses</h2>
      <SearchBar onSearch={setSearchTerm} />
      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;