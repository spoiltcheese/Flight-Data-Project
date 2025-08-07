import React from "react";
import { storeFavourites } from "../services/FavouriteService";

import { useQueryClient, useMutation } from "@tanstack/react-query";

import PropTypes from "prop-types";

const Flight = (props) => {
  const queryClient = useQueryClient();

  const doGetName = useMutation({
    mutationFn: ({ name, id }) => {
      storeFavourites(name, id);
      props.setProcessing(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["favourites"]);
      props.setName(props.flight.flight.iata);
      props.setProcessing(false);
    },
  });

  Flight.propTypes = {
    flight: PropTypes.object,
    setName: PropTypes.func,
    setProcessing: PropTypes.func,
    id: PropTypes.string.isRequired,
  };

  const depSchedArr = props.flight.departure.scheduled.split(/[T+]/);
  const arrSchedArr = props.flight.arrival.scheduled.split(/[T+]/);
  return (
    <>
      <div className="col-md-1">
        <button
          className="btn btn-primary me-2"
          onClick={() => doGetName.mutate({ name: props.flight, id: props.id })}
        >
          Add Favourite
        </button>
      </div>
      <div className="col-md-1">{props.flight.flight.iata}</div>
      <div className="col-md-1">{props.flight.flight_status}</div>
      <div className="col-md-1">{props.flight.departure.airport}</div>
      <div className="col-md-1">{props.flight.departure.terminal}</div>
      <div className="col-md-1">{props.flight.departure.gate}</div>
      <div className="col-md-1">{depSchedArr[0] + " " + depSchedArr[1]}</div>
      <div className="col-md-1">{props.flight.arrival.airport}</div>
      <div className="col-md-1">{props.flight.arrival.terminal}</div>
      <div className="col-md-1">{props.flight.arrival.gate}</div>
      <div className="col-md-1">{arrSchedArr[0] + " " + arrSchedArr[1]}</div>
    </>
  );
};

export default Flight;
