import React from "react";
import PropTypes from "prop-types";
import WidgetSample from "./WidgetSample";

export default function Weather({ widgets }) {
  return (
    <div className="container">
      <div className="row">
        <WidgetSample title={widgets[0]} />
      </div>
      <div className="row">
        <div className="col-sm-2" style={{ padding: "0" }}></div>
        <div className="col-sm-4" style={{ padding: "0" }}>
          <img
            style={{ width: "65px" }}
            src="https://png.pngtree.com/png-vector/20190413/ourlarge/pngtree-vector-cloud-icon-png-image_939423.jpg"
            alt="cloud"
          />
        </div>
        <div class="col-sm-4" style={{ fontSize: "1.8rem", padding: "0" }}>
          +18 C
        </div>
      </div>
    </div>
  );
}

Weather.propTypes = {
  widgets: PropTypes.array,
};

Weather.defaultProps = {
  widgets: [],
};
