import React from "react";

import { getList } from "../services/ListService";

import { useQuery } from "@tanstack/react-query";

const AllLists = () => {
  const listQuery = useQuery({
    queryKey: ["favourites"],
    queryFn: getList,
  });

  return (
    <>
      {listQuery.isSuccess &&
        Array.isArray(listQuery.data.records) &&
        listQuery.data.records.map((list, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-md-2">
                <a href={`../list/${list.fields.ListID}`}>
                  {list.fields.ListName}
                </a>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default AllLists;
