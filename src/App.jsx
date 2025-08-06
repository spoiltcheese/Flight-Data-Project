import React, { Suspense, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import LatestFlights from "./components/LatestFlights";
import NavBar from "./components/NavBar";
import AllFavourites from "./components/AllFavourites";
import AllLists from "./components/AllLists";
import PropTypes from "prop-types";
import { useParams } from "react-router";

function App() {
  const [currentList, setCurrentList] = useState(
    import.meta.env.VITE_AIRTABLE_DEFAULT_LIST_ID
  );

  console.log("Current List ID:", currentList);

  function FavouritesWithParams({ setCurrentList }) {
    const { listID } = useParams();
    return <AllFavourites id={listID} setCurrentList={setCurrentList} />;
  }

  FavouritesWithParams.propTypes = {
    setCurrentList: PropTypes.func.isRequired,
  };

  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/flights" />} />
          <Route path="/flights" element={<LatestFlights />} />
          <Route
            path="/favourites"
            element={
              <AllFavourites
                id={import.meta.env.VITE_AIRTABLE_DEFAULT_LIST_ID}
              />
            }
          />
          <Route
            path="/favourites/:listID"
            element={<FavouritesWithParams setCurrentList={setCurrentList} />}
          />
          {/* <Route path="/favourites" element={<AllFavourites />} /> */}
          <Route
            path="/lists"
            element={<AllLists setCurrentList={(id) => setCurrentList(id)} />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
