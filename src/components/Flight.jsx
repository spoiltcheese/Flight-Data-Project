import React from "react";
import { storeFavourites } from "../services/FavouriteService";

import { useQueryClient, useMutation } from "@tanstack/react-query";

import PropTypes from "prop-types";

const Flight = (props) => {
  const queryClient = useQueryClient();

  const doGetName = useMutation({
    mutationFn: (name) => storeFavourites(name),
    onSuccess: () => {
      queryClient.invalidateQueries(["favourites"]);
    },
  });

  Flight.propTypes = {
    flight: PropTypes.object,
  };
  return (
    <>
      <div className="col-md-1">
        <button
          className="btn btn-primary"
          onClick={() => doGetName.mutate(props.flight)}
        >
          Add Favourite
        </button>
        {props.flight.flight.iata}
      </div>
      <div className="col-md-1">{props.flight.flight_status}</div>
      <div className="col-md-1">{props.flight.departure.airport}</div>
      <div className="col-md-1">{props.flight.departure.terminal}</div>
      <div className="col-md-1">{props.flight.departure.gate}</div>
      <div className="col-md-1">{props.flight.departure.scheduled}</div>
      <div className="col-md-1">{props.flight.departure.actual}</div>
      <div className="col-md-1">{props.flight.arrival.airport}</div>
      <div className="col-md-1">{props.flight.arrival.terminal}</div>
      <div className="col-md-1">{props.flight.arrival.gate}</div>
      <div className="col-md-1">{props.flight.arrival.scheduled}</div>
      <div className="col-md-1">{props.flight.arrival.actual}</div>
    </>
  );
};

export default Flight;
