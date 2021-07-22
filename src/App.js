import "./App.css";
import React from "react";
import NewsBlock from "./Components/NewsBlock";
import SearchBlock from "./Components/SearchBlock";
import BannerBlock from "./Components/BannerBlock";
import WidgetsBlock from "./Components/WidgetsBlock";
import {
  news,
  navLinks,
  newsMenu,
  currencyAndOil,
  widgets,
  shows,
  popular,
  programs
} from "./constants";

function App() {
  return (
    <div className="App" style={{ width: "100%" }}>
      <NewsBlock
        news={news}
        newsMenu={newsMenu}
        currencyAndOil={currencyAndOil}
      />
      <SearchBlock navLinks={navLinks} />
      <BannerBlock />
      <WidgetsBlock
        widgets={widgets}
        shows={shows}
        popular={popular}
        programs={programs}
      />
    </div>
  );
}

export default App;
