import React from "react";
import PropTypes from "prop-types";

export default function NavBar(props) {
  return (
    <div>
        {props.list.map((item,index) => {
          return (
            <a key={index} href="#" style={{ margin: "5px" }}>
              {item}
            </a>
          );
        })}
   <p>{props.children}</p>
    </div>
  );
}

NavBar.propTypes = {
  list: PropTypes.array,
};

NavBar.defaultProps = {
  list: [],
};
