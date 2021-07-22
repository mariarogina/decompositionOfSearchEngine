import React from "react";
import PropTypes from "prop-types";

export default function WidgetSample(props) {
  return (
    <div>
      <div style={{ color: "orange", marginBottom: "15px" }}>
        <b>{props.title}</b>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

WidgetSample.propTypes = {
  title: PropTypes.string,
};

WidgetSample.defaultProps = {
  title: "",
};
