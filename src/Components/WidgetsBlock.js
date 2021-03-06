import React from "react";
import Weather from "./Widgets/Weather";
import Popular from "./Widgets/Popular";
import CountryMap from "./Widgets/CountryMap";
import TeleProgram from "./Widgets/TeleProgram";
import CurrentShows from "./Widgets/CurrentShows";
import PropTypes from "prop-types";

//Содержит различные виджеты: прогноз погоды, ссылки на посещаемые сайты, карту страны, телепрограмму, список передач в эфире сейчас

export default function WidgetsBlock({ widgets, shows, popular, programs }) {
  return (
    <div>
      <div className="container" style={{ border: "solid grey 1px" }}>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9 container">
            <div className="row" style={{ padding: "10px" }}>
              <div className="col-sm">
                <Weather widgets={widgets} />
              </div>
              <div className="col-sm">
                <CountryMap widgets={widgets} />
              </div>
              <div className="col-sm">
                <CurrentShows widgets={widgets} shows={shows} />
              </div>
            </div>

            <div className="row" style={{ padding: "10px" }}>
              <div className="col-sm-4" style={{ margin: "20px" }}>
                <Popular widgets={widgets} popular={popular} />
              </div>

              <div className="col-sm-6" style={{ margin: "20px" }}>
                <TeleProgram widgets={widgets} programs={programs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

WidgetsBlock.propTypes = {
  widgets: PropTypes.array,
  shows: PropTypes.array,
  popular: PropTypes.array,
  programs: PropTypes.array,
};

WidgetsBlock.defaultProps = {
  widgets: [],
  shows: [],
  popular: [],
  programs: [],
};
