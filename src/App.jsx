import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import LatestFlights from "./components/LatestFlights";
import NavBar from "./components/NavBar";
import AllFavourites from "./components/AllFavourites";
import AllLists from "./components/AllLists";
import PropTypes from "prop-types";
import { useParams } from "react-router";

function App() {
  const [currentList, setCurrentList] = useState(() => {
    const savedData = sessionStorage.getItem("currentList");
    return savedData
      ? JSON.parse(savedData)
      : import.meta.env.VITE_AIRTABLE_DEFAULT_LIST_ID;
  });

  useEffect(() => {
    sessionStorage.setItem("currentList", JSON.stringify(currentList));
  }, [currentList]);

  const [currentListName, setCurrentListName] = useState(() => {
    const savedData = sessionStorage.getItem("currentListName");
    return savedData ? JSON.parse(savedData) : "DefaultList";
  });

  useEffect(() => {
    sessionStorage.setItem("currentListName", JSON.stringify(currentListName));
  }, [currentListName]);

  console.log("Current List ID:", currentList);

  function FavouritesWithParams() {
    const { listID } = useParams();
    return <AllFavourites id={listID} />;
  }

  FavouritesWithParams.propTypes = {
    setCurrentList: PropTypes.func.isRequired,
  };

  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <NavBar listName={currentListName} />
        <Routes>
          <Route path="/" element={<Navigate replace to="/flights" />} />
          <Route path="/flights" element={<LatestFlights id={currentList} />} />
          <Route
            path="/favourites"
            element={<AllFavourites id={currentList} />}
          />
          <Route
            path="/favourites/:listID"
            element={<FavouritesWithParams />}
          />
          {/* <Route path="/favourites" element={<AllFavourites />} /> */}
          <Route
            path="/lists"
            element={
              <AllLists
                setCurrentList={(id) => setCurrentList(id)}
                setName={(name) => setCurrentListName(name)}
              />
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
