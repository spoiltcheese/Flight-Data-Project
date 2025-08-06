import React from "react";
import { useState, useRef, useEffect } from "react";

import { getList } from "../services/ListService";

import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import PropTypes from "prop-types";

import { createNewList } from "../services/ListService";

const AllLists = (props) => {
  const queryClient = useQueryClient();
  const nameRef = useRef();
  const [errMsg, setErrMsg] = useState(true);

  const listQuery = useQuery({
    queryKey: ["lists"],
    queryFn: getList,
  });

  const doAddList = useMutation({
    mutationFn: createNewList,
    onSuccess: () => {
      queryClient.invalidateQueries(["lists"]);
      if (nameRef.current) nameRef.current.value = "";
    },
  });

  AllLists.propTypes = {
    setCurrentList: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
  };

  useEffect(() => {
    if (doAddList.isSuccess) {
      setErrMsg(true);
    }
  }, [doAddList.isSuccess]);

  const handleInputChange = (e) => {
    setErrMsg(e.target.value.trim() === "");
  };

  const handleListClick = (id, name) => {
    props.setCurrentList(id);
    props.setName(name);
  };

  return (
    <>
      <div className="row">
        <input
          type="text"
          ref={nameRef}
          placeholder="add list name"
          className="col-md-3"
          onChange={handleInputChange}
        />
        <button
          className="col-md-3 btn btn-primary"
          onClick={() => doAddList.mutate(nameRef.current.value)}
          disabled={errMsg}
        >
          Add List
        </button>
        {errMsg && <span>List name cannot be blank</span>}
      </div>

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
