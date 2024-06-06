import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import LoginUsername from "./components/LoginUsername";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./context/AuthContext";
import CourseDetailPage from "./pages/CourseDetailPage";
import Home from "./pages/Home";
import MyCourses from "./pages/MyCourses";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/login" element={<Login />} /> */}
              <Route path="/signup" element={<SignUp />} />
              <Route path="/loginu" element={<LoginUsername />} />
              <Route
                path="/my-courses"
                element={
                  <ProtectedRoute>
                    <MyCourses />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/courses/:id"
                element={
                  <ProtectedRoute>
                    <CourseDetailPage />
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
