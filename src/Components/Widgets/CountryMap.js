import React from "react";
import WidgetSample from "./WidgetSample";
import PropTypes from "prop-types";

export default function CountryMap({ widgets }) {
  return (
    <div>
      <WidgetSample title={widgets[1]} />
      <a href="https://static1-repo.aif.ru/1/6b/1227182/95d3943dccf2048e7e68906570ee6a26.jpg">
        Карта:"кот" на языках Европы{" "}
      </a>
    </div>
  );
}
