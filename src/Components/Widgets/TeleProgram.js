import React from "react";
import WidgetSample from "./WidgetSample";
import PropTypes from "prop-types";

export default function TeleProgram({ widgets, programs }) {
  return (
    <div>
      <WidgetSample title={widgets[4]} />
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
