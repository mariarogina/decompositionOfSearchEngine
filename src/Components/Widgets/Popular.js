import React from "react";
import WidgetSample from "./WidgetSample";
import PropTypes from "prop-types";

export default function Popular({ widgets, popular }) {
  return (
    <div>
      <WidgetSample title={widgets[3]} />

      <div className="row">
        <ul>
          {popular.map((item) => {
            return (
              <li>
                <div className="row" style={{ fontSize: "0.8rem" }}>
                  <div className="col-md-4" style={{ color: "black" }}>
                    {item.title}
                  </div>
                  <div className="col-md-6" style={{ color: "blue" }}>
                    {item.about}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

Popular.propTypes = {
  widgets: PropTypes.array,
  popular: PropTypes.array,
};

Popular.defaultProps = {
  widgets: [],
  popular: [],
};
