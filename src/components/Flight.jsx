import React from "react";
import { storeFavourites } from "../services/FavouriteService";

import {
  useQuery,
  useQueryClient,
  useMutation,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const Flight = (props) => {
  const doGetName = useMutation({
    mutationFn: (name) => storeFavourites(name),
    onSuccess: () => {
      queryClient.invalidateQueries(["favourites"]);
    },
  });
  return (
    <>
      <button
        className="col-md-1 btn btn-primary"
        onClick={() => doGetName.mutate(props.flight)}
      >
        Add Favourite
      </button>
      <div className="col-md-1">{props.flight.flight.iata}</div>
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
