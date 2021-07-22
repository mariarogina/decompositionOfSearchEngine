import React from "react";
import PropTypes from "prop-types";

export default function WidgetSample(props) {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.children}</div>
    </div>
  );
}
