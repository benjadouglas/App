import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import MyCourses from './pages/MyCourses';
import Login from './components/Login'; // Cambio en la importación
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/login" element={<Login />} /> {/* Cambio en la ruta */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


