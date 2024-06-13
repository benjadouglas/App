import React, { useState } from "react";
import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar";
import "./Home.css"; // Estilos específicos para la cuadrícula

const Home = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) => {
    if (!searchTerm) return true;
    const searchText = searchTerm.toLowerCase();
    return (
      course.title.toLowerCase().includes(searchText) ||
      course.description.toLowerCase().includes(searchText)
    );
  });

  return (
    <div>
      <h2>All Courses</h2>
      <div className="course-grid">
        {courses.length ? (
          courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p>No courses available</p>
        )}
      </div>
    </div>
  );
};

export default Home;

//   <h1>Welcome to the Course Management System</h1>
//   <SearchBar onSearch={setSearchTerm} />
//   <h2>Search Results</h2>
//   <div className="course-grid">
//     {filteredCourses.length ? (
//       filteredCourses.map((course) => (
//         <CourseCard key={course.id} course={course} />
//       ))
//     ) : (
//       <p>No courses found</p>
//     )}
//   </div>
