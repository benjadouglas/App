import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import MyCoursesPage from './pages/MyCourses';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/main.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-courses" element={<MyCoursesPage />} />
        {/* Otras rutas */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
