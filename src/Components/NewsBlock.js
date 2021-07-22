import React from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar";

//Содержит 2 колонки:
// 1)слева сверху A)ссылки (Новости мир, Новоти Страна, рекомендации)
//B)список новостей с логотипами новостных агентств,
//C) ниже курсы валют и стоимость нефти
//2) справа виджет рекламы (текст + картинка)

export default function NewsBlock({ news, newsMenu, currencyAndOil }) {
  console.log(newsMenu);
  return (
    <div
      className="container"
      style={{
        border: "solid grey 1px",
        borderBottom: "none",
        paddingBottom: "10px",
        fontSize: "0.9rem",
      }}
    >
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <div className="container" style={{ padding: "0" }}>
            <div className="row">
              <div
                className="col-md-8"
                style={{ textAlign: "left", marginTop: "25px" }}
              >
                <NavBar list={newsMenu} />
              </div>
              <div className="col-md-4"></div>

              <div className="col-md-8" style={{ textAlign: "left" }}>
                <ul style={{ padding: "0" }}>
                  {news.map((item) => {
                    return (
                      <li style={{ listStyle: "none", display: "block" }}>
                        <img
                          src={item.logo}
                          style={{ width: "40px", marginRight: "5px" }}
                        />
                        <span style={{ marginRight: "5px" }}>{item.news}</span>
                        <a href={item.link}>Ещё...</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-md-4" style={{ display: "inline-block" }}>
                <h3>Наше сообщество про кошек</h3>

                <img
                  src="https://www.clipartkey.com/mpngs/m/44-441499_transparent-cat-paw-png-kawaii-cat-paw-transparent.png"
                  alt="paw"
                  style={{ height: "100px" }}
                />
                <br />
                <a href="https://zen.yandex.ru/catkis">По ссылке </a>
              </div>

              <div className="col-md-8">
                <div
                  className="container"
                  style={{ textAlign: "left", padding: "0" }}
                >
                  <div className="col-md-9 row">
                    {currencyAndOil.map((item) => {
                      return (
                        <div
                          className="col-md-3 container"
                          style={{ padding: "0" }}
                          key={item.id}
                        >
                          <div className="row">
                            <div
                              className="col-md-3"
                              style={{ color: "black" }}
                            >
                              {item.currency}
                            </div>
                            <div className="col-md-3" style={{ color: "blue" }}>
                              {item.rate}
                            </div>
                            <div className="col-md-3" style={{ color: "grey" }}>
                              {item.changed}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

NewsBlock.propTypes = {
  news: PropTypes.array,
  newsMenu: PropTypes.array,
  currencyAndOil: PropTypes.array,
};

NewsBlock.defaultProps = {
  news: [],
  newsMenu: [],
  currencyAndOil: [],
};
