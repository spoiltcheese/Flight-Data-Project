import React, { useState, useEffect } from "react";

import {
  useQuery,
  useQueryClient,
  useMutation,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { getLatestFlights } from "../services/GetLatestFlights";

const LatestFlights = () => {
  const queryClient = useQueryClient();
  const [flightData, setFlightData] = useState({});

  const flightQuery = useQuery({
    queryKey: ["latestFlights"],
    queryFn: getLatestFlights,
  });

  return (
    <>
      "jaksljas"
      {flightQuery.isSuccess &&
        Array.isArray(flightQuery.data?.data) &&
        flightQuery.data.data.map((flight, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-md-1">q 7682362761q3</div>
              <div className="col-md-1">{flight.flight_status}</div>
              <div className="col-md-1">{flight.departure?.airport}</div>
              <div className="col-md-1">{flight.departure?.terminal}</div>
              <div className="col-md-1">{flight.departure?.gate}</div>
              <div className="col-md-1">{flight.departure?.scheduled}</div>
              <div className="col-md-1">{flight.departure?.actual}</div>
              <div className="col-md-1">{flight.arrival?.airport}</div>
              <div className="col-md-1">{flight.arrival?.terminal}</div>
              <div className="col-md-1">{flight.arrival?.gate}</div>
              <div className="col-md-1">{flight.arrival?.scheduled}</div>
              <div className="col-md-1">{flight.arrival?.actual}</div>
            </div>
          );
        })}
    </>
  );
};

export default LatestFlights;
