import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";
import LatestFlights from "./components/LatestFlights";
import NavBar from "./components/NavBar";
import AllFavourites from "./components/AllFavourites";
import AllLists from "./components/AllLists";

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/flights" />} />
          <Route path="/flights" element={<LatestFlights />} />
          {/* <Route path="/favourites/:listID" element={<AllFavourites />} /> */}
          <Route path="/favourites" element={<AllFavourites />} />
          <Route path="/lists" element={<AllLists />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
