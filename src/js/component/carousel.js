import React from "react";
import PropTypes from "prop-types";
import Starwars from "../../img/starwars1.jpg";
import Starwars2 from "../../img/starwars2.jpg";
import Starwars3 from "../../img/starwars3.jpg";


const Carousel = (props) => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide py-3"
        className="carousel slide py-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Starwars2} className="d-block w-100 rounded-3" alt="..." />
            <div className="carousel-caption d-none d-md-block text-light">
              <h5>{props.title}</h5>
              <p>{props.description}</p>
              <a href={props.buttonURL} className="btn btn-outline-secondary">
                {props.buttonLabel}
              </a>
            </div>
          </div>
          <div className="carousel-item ">
            <img src={Starwars} className="d-block w-100 rounded-3" alt="..." />
            <div className="carousel-caption d-none d-md-block text-light">
              <h5>{props.title}</h5>
              <p>{props.description}</p>
              <a href={props.buttonURL} className="btn btn-outline-secondary">
                {props.buttonLabel}
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Starwars3} className="d-block w-100 rounded-3" alt="..." />
            <div className="carousel-caption d-none d-md-block text-light">
              <h5>{props.title}</h5>
              <p>{props.description}</p>
              <a href={props.buttonURL} className="btn btn-outline-secondary">
                {props.buttonLabel}
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

Carousel.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonLabel2: PropTypes.string,
  buttonURL: PropTypes.string,
};

export default Carousel;
