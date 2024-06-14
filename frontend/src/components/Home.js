import React, { useState } from "react";
import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar";
import "./Home.css"; // Estilos específicos para la cuadrícula

const Home = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) => {
    const title = course.nombre_curso ? course.nombre_curso.toLowerCase() : "";
    const description = course.descripcion ? course.descripcion.toLowerCase() : "";
    const searchText = searchTerm.toLowerCase();

    return (
      title.includes(searchText) ||
      description.includes(searchText)
    );
  });

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div>
      <h1>Welcome to the Course Management System</h1>
      <SearchBar onSearch={handleSearch} />
      <h2>Search Results</h2>
      <div className="course-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p>No courses found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
