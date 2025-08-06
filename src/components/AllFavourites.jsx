import React, { useState, useEffect, useRef } from "react";

import {
  useQuery,
  useQueryClient,
  useMutation,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { getFavourites } from "../services/FavouriteService";
import Favourite from "./Favourite";

const AllFavourites = () => {
  const favQuery = useQuery({
    queryKey: ["favourites"],
    queryFn: getFavourites,
  });

  return (
    <div>
      <div className="row centerText">
        <div className="col-md-3">Flight</div>
        <div className="col-md-4">Departure</div>
        <div className="col-md-4">Arrival</div>
        <div className="col-md-1">&nbsp;</div>
      </div>

      <div className="row centerText">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-1">Number</div>
        <div className="col-md-1">Status</div>
        <div className="col-md-1">Airport</div>
        <div className="col-md-1">Terminal</div>
        <div className="col-md-1">Gate</div>
        <div className="col-md-1">Scheduled</div>
        {/* <div className="col-md-1">Actual</div> */}
        <div className="col-md-1">Airport</div>
        <div className="col-md-1">Terminal</div>
        <div className="col-md-1">Gate</div>
        <div className="col-md-1">Scheduled</div>
        {/* <div className="col-md-1">Actual</div> */}
      </div>
      {favQuery.isSuccess &&
        Array.isArray(favQuery.data.records) &&
        favQuery.data.records.map((flight, index) => {
          return (
            <div
              className={`row ${index % 2 === 0 ? " even" : ""}`}
              key={index}
            >
              <Favourite flight={flight} />
            </div>
          );
        })}
    </div>
  );
};

export default AllFavourites;
