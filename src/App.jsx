import React from "react";
import Navbar from "./Components/Navbar.jsx"; // Navbar Component
import Sidebar from "./Components/Sidebar.jsx"
import NoticeForm from "./Components/NoticeForm.jsx"; // Placement Notice Form Component
import "./App.css"; // Add overall styles

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <NoticeForm />
    </>

  );
};

export default App;
