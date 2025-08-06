import React from "react";
import PropTypes from "prop-types";

const List = (props) => {
  List.propTypes = {
    name: PropTypes.string,
  };

  return (
    <div className="row">
      <div className="col-md-2">{props.name}</div>
    </div>
  );
};

export default List;
