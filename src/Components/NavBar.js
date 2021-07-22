import React from "react";
import PropTypes from "prop-types";

export default function NavBar(props) {
  return (
    <div>
      {props.list.map((item) => {
        return (
          <a href="#" style={{ margin: "10px" }}>
            {item}
          </a>
        );
      })}
    </div>
  );
}

NavBar.propTypes = {
  list: PropTypes.array,
};

NavBar.defaultProps = {
  list: [],
};
