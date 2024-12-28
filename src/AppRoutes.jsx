import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx"; // Navbar Component
import Sidebar from "./Components/Sidebar.jsx";
import NoticeForm from "./Components/NoticeForm.jsx"; // Placement Notice Form Component
import Table from "./Components/Table.jsx";
import Top from "./Components/Top.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Default Home Route */}
        <Route path="/" element={<h1>Home</h1>} />

        {/* NoticeForm Route */}
        <Route
          path="/NoticeForm"
          element={
            <>
              <Navbar />
              <Sidebar />
              <NoticeForm />
            </>
          }
        />

        {/* Verification Route */}
        <Route
          path="/Verification"
          element={
            <>
              <Top />
              <Table />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
