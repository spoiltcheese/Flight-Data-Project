import React from "react";

import { getList } from "../services/ListService";

import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";

const AllLists = (props) => {
  const listQuery = useQuery({
    queryKey: ["favourites"],
    queryFn: getList,
  });

  AllLists.propTypes = {
    setCurrentList: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
  };
  const handleListClick = (id, name) => {
    props.setCurrentList(id);
    props.setName(name);
  };

  return (
    <>
      {listQuery.isSuccess &&
        Array.isArray(listQuery.data.records) &&
        listQuery.data.records.map((list, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-md-2">
                <a
                  href={`../favourites/${list.fields.ListID}`}
                  onClick={() =>
                    handleListClick(list.fields.ListID, list.fields.ListName)
                  }
                >
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
