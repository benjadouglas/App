// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import MyCoursesPage from './pages/MyCourses';
import CourseDetailPage from './pages/CourseDetailPage';
import Login from './components/Login';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-courses" element={<MyCoursesPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/courses/:id" element={<CourseDetailPage />} /> {/* Nueva ruta para detalles del curso */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
