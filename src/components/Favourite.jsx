import React from "react";

import { useQueryClient, useMutation } from "@tanstack/react-query";

import { delFavourite } from "../services/FavouriteService";

import PropTypes from "prop-types";

const Favourite = (props) => {
  const queryClient = useQueryClient();

  const doDelete = useMutation({
    mutationFn: (name) => delFavourite(name),
    onSuccess: () => {
      queryClient.invalidateQueries(["favourites"]);
    },
  });

  Favourite.propTypes = {
    flight: PropTypes.object,
  };

  const depSchedArr = props.flight.fields.DepartureScheduled.split(/[T+]/);
  const arrSchedArr = props.flight.fields.ArrivalScheduled.split(/[T+]/);
  return (
    <>
      <div className="col-md-1">
        <button
          className="btn btn-danger"
          onClick={() => doDelete.mutate(props.flight.id)}
        >
          Delete
        </button>
      </div>
      <div className="col-md-1">{props.flight.fields.FlightNumber}</div>
      <div className="col-md-1">{props.flight.fields.Status}</div>
      <div className="col-md-1">{props.flight.fields.DepartureAirport}</div>
      <div className="col-md-1">{props.flight.fields.DepartureTerminal}</div>
      <div className="col-md-1">{props.flight.fields.DepartureGate}</div>
      <div className="col-md-1">{depSchedArr[0] + " " + depSchedArr[1]}</div>
      <div className="col-md-1">{props.flight.fields.ArrivalAirport}</div>
      <div className="col-md-1">{props.flight.fields.ArrivalTerminal}</div>
      <div className="col-md-1">{props.flight.fields.ArrivalGate}</div>
      <div className="col-md-1">{arrSchedArr[0] + " " + arrSchedArr[1]}</div>
    </>
  );
};

export default Favourite;
