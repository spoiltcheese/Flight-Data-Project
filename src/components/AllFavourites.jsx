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
      {favQuery.isSuccess &&
        Array.isArray(favQuery.data.records) &&
        favQuery.data.records.map((flight, index) => {
          return (
            <div className="row" key={index}>
              <Favourite flight={flight} />
            </div>
          );
        })}
    </div>
  );
};

export default AllFavourites;
