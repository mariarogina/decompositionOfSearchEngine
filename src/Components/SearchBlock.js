import React from "react";
import NavBar from "./NavBar";
import PropTypes from "prop-types";

//Содержит панель навигации (со ссылками на разные разделы сайта), 
//ниже: логотип, строку поиска (поле ввода) и кнопку "найти". 
//Ниже:слоган "найдётся всё" + ссылка "Например..."


export default function SearchBlock({ navLinks }) {
  return (
    <div>
      <div
        className="container"
        style={{
          border: "solid grey 1px",
          borderBottom: "none",
          paddingBottom: "10px",
          fontSize:'0.9rem'
        }}
      >
        <div className="row">
          <div className="col-md-3"></div>
          <div
            className="col-md-9"
            style={{ textAlign: "left", marginTop: "15px" }}
          >
            <NavBar list={navLinks} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <img
              style={{ width: "170px" }}
              src="https://media.tumblr.com/d1882c631fe517b4bb0bd3868022cd53/tumblr_inline_mk89bd0ND91qz4rgp.jpg"
            />
          </div>
          <div className="col-md-9 container" style={{ padding: "15px 7px" }}>
            <form className="row">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Введите здесь ключевое слово"
                className="col-md-8"
                style={{ margin: "5px" }}
              ></input>
              <button
                className="btn btn-warning col-md-2"
                style={{ margin: "5px" }}
              >
                Найти
              </button>
            </form>
            <p style={{ textAlign: "left" }}>
              Найдётся всё, например,{" "}
              <b>
                {" "}
                <a href="https://zen.yandex.ru/media/jobless_father/razvedenie-meinkunov-kak-biznes-60130b0f5f624a023d4a5c9d">
                  Разведение мэйнкунов{" "}
                </a>
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

SearchBlock.propTypes = {
  navLinks: PropTypes.array,
};

SearchBlock.defaultProps = {
  navLinks: [],
};
