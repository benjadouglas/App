// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import MyCourses from './pages/MyCourses';
import CourseDetailPage from './pages/CourseDetailPage';
import LoginUsername from './components/LoginUsername';
import SignUp from './components/SignUp';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import CreateCourse from './components/CreateCourse';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/loginu" element={<LoginUsername />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/my-courses"
                element={
                  <ProtectedRoute>
                    <MyCourses />
                  </ProtectedRoute>
                }
              />
              <Route path="/courses/:id" element={<CourseDetailPage />} />
              <Route
                path="/create-course"
                element={
                  <ProtectedRoute>
                    <CreateCourse />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
