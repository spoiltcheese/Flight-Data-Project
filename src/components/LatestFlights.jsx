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
      {/* {flightQuery.isSuccess &&
        Array.isArray(flightQuery.data?.data) &&
        flightQuery.data.data.map((flight, index) => {
          return (
            <div className="row" key={index}>
            <Flight flight={flight} />
            </div>
          );
        })} */}

      {name ? (
        <div className="favourite-message">{`${name} added to favourites`}</div>
      ) : null}

      {testData.data.map((flight, index) => {
        return (
          <div className="row" key={index}>
            <Flight flight={flight} setName={(name) => setName(name)} />
          </div>
        );
      })}
    </>
  );
};

export default LatestFlights;
