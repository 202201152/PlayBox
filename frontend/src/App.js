import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AdminDeshboard from "./pages/AdminDeshboard";

import Formpage from "./pages/Formpage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin-deshboard" element={<AdminDeshboard />} />
        <Route path="/form" element={<Formpage />} />
      </Routes>

      <div className="App">
      {/* < /> */}
      </div>

    </>
  );
}
