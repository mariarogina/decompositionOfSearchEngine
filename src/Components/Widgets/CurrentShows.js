import React from "react";
import WidgetSample from "./WidgetSample";
import PropTypes from "prop-types";

export default function CurrentShows({ widgets, shows }) {
  return (
    <div>
      <WidgetSample title={widgets[2]} />

      <div className="row">
        <ul>
          {shows.map((item) => {
            return (
              <li>
                <div className="row" style={{ fontSize: "0.8rem" }}>
                  <div className="col-md-6" style={{ color: "black" }}>
                    {item.title}
                  </div>
                  <div className="col-md-6" style={{ color: "grey" }}>
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

CurrentShows.propTypes = {
  widgets: PropTypes.array,
  shows: PropTypes.array,
};

CurrentShows.defaultProps = {
  widgets: [],
  shows: [],
};
