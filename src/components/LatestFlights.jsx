import React, { useState, useEffect, useRef } from "react";

import {
  useQuery,
  useQueryClient,
  useMutation,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { getLatestFlights } from "../services/GetLatestFlights";
import Flight from "./Flight";

import PropTypes from "prop-types";

const LatestFlights = (props) => {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [processing, setProcessing] = useState(false);

  const nameRef = useRef();

  const flightQuery = useQuery({
    queryKey: ["latestFlights"],
    queryFn: getLatestFlights,
  });

  LatestFlights.propTypes = {
    id: PropTypes.string.isRequired,
  };

  return (
    <div className="container-fluid">
      {processing ? (
        <div className="favourite-message" style={{ textAlign: "center" }}>
          Processing...
        </div>
      ) : null}

      {name ? (
        <div
          className="favourite-message"
          style={{ textAlign: "center" }}
        >{`${name} added to favourites`}</div>
      ) : null}

      <div className="row">
        <div className="col-md-3 border text-center">Flight</div>
        <div className="col-md-4 border text-center">Departure</div>
        <div className="col-md-4 border text-center">Arrival</div>
      </div>

      <div className="row mb-3">
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

      {flightQuery.isSuccess &&
        Array.isArray(flightQuery.data?.data) &&
        flightQuery.data.data.map((flight, index) => {
          return (
            <div className="row" key={index}>
              <Flight
                flight={flight}
                id={props.id}
                setName={(name) => setName(name)}
                setProcessing={(state) => setProcessing(state)}
              />
            </div>
          );
        })}
    </div>
  );
};

export default LatestFlights;
