import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";
import LatestFlights from "./components/LatestFlights";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/flights" />} />
          <Route path="/flights" element={<LatestFlights />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
