import React from "react";
import WidgetSample from "./WidgetSample";
import PropTypes from "prop-types";

export default function TeleProgram({ widgets, programs }) {
  return (
    <div className="container">
      <div className="row" style={{ textAlign: "center" }}>
        <WidgetSample title={widgets[4]} />
      </div>
      <div className="row">
        <ul>
          {programs.map((item) => {
            return (
              <li key={item.time}>
                <div className="row" style={{ fontSize: "0.8rem" }}>
                  <div className="col-md-2" style={{ color: "black" }}>
                    {item.time}
                  </div>
                  <div className="col-md-4" style={{ color: "blue" }}>
                    {item.title}
                  </div>
                  <div className="col-md-4" style={{ color: "blue" }}>
                    {item.channel}
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

TeleProgram.propTypes = {
  widgets: PropTypes.array,
  programs: PropTypes.array,
};

TeleProgram.defaultProps = {
  widgets: [],
  programs: [],
};
