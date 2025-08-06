import React, { useState, useEffect, useRef } from "react";

import {
  useQuery,
  useQueryClient,
  useMutation,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

//import { getLatestFlights } from "../services/GetLatestFlights";
import testData from "../services/testData";
import Flight from "./Flight";

const LatestFlights = () => {
  const [name, setName] = useState("");

  const nameRef = useRef();

  // const flightQuery = useQuery({
  //   queryKey: ["latestFlights"],
  //   queryFn: getLatestFlights,
  // });

  // const getName = (name) => {
  //   setName(name);
  // };

  return (
    <>
      {/*flightQuery.isSuccess &&
        Array.isArray(flightQuery.data?.data) &&
        flightQuery.data.data.map((flight, index) => {
          return (
            <div className="row" key={index}>
            <Flight flight={flight} />
            </div>
          );
        })} */}

      {name ? (
        <div
          className="favourite-message"
          style={{ textAlign: "center" }}
        >{`${name} added to favourites`}</div>
      ) : null}

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

      {testData.data.map((flight, index) => {
        return (
          <div className={`row ${index % 2 === 0 ? " even" : ""}`} key={index}>
            <Flight flight={flight} setName={(name) => setName(name)} />
          </div>
        );
      })}
    </>
  );
};

export default LatestFlights;
