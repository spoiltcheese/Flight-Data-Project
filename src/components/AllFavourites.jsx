import React from "react";

import { useQuery } from "@tanstack/react-query";

import { getFavourites } from "../services/FavouriteService";
import Favourite from "./Favourite";
import PropTypes from "prop-types";

const AllFavourites = (props) => {
  AllFavourites.propTypes = {
    id: PropTypes.string.isRequired,
  };

  const favQuery = useQuery({
    queryKey: ["favourites", props.id],
    queryFn: () => getFavourites(props.id),
  });

  return (
    <div>
      <div className="row centerText ">
        <div className="col-md-3 border text-center">Flight</div>
        <div className="col-md-4 border text-center">Departure</div>
        <div className="col-md-4 border text-center">Arrival</div>
      </div>

      <div className="row centerText mb-3">
        <div className="col-md-1 border text-center">&nbsp;</div>
        <div className="col-md-1 border text-center">Number</div>
        <div className="col-md-1 border text-center">Status</div>
        <div className="col-md-1 border text-center">Airport</div>
        <div className="col-md-1 border text-center">Terminal</div>
        <div className="col-md-1 border text-center">Gate</div>
        <div className="col-md-1 border text-center">Scheduled</div>

        <div className="col-md-1 border text-center">Airport</div>
        <div className="col-md-1 border text-center">Terminal</div>
        <div className="col-md-1 border text-center">Gate</div>
        <div className="col-md-1 border text-center">Scheduled</div>
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
