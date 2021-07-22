import React from "react";

//Содержит баннер (ссылка в картинке)

export default function BannerBlock() {
  return (
    <div>
      <div
        className="container"
        style={{
          border: "solid grey 1px",
          borderBottom: "none",
          textAlign: "left",
          maxHeight: "200px",
        }}
      >
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <a href="https://en.wikipedia.org/wiki/Cats_(musical)">
              <img
                style={{ width: "560px", height: "60%", padding: "10px 10px" }}
                src="https://cfrycentrestage.files.wordpress.com/2019/12/cats-poster.png"
                alt="мюзикл"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
