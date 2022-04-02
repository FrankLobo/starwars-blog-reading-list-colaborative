import React, { useContext } from "react";
import { AiFillHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPlanets = () => {
  const { store } = useContext(Context);
  return (
    <>
      <div className="col d-grid gap-5">
        {
          store.planets !== null &&
          store.planets.results.length > 1 &&
          store.planets.results.map((result) => {
            return (
              <div className="card animate__animated animate__zoomIn" key={result.uid}>
                <img src="https://cdna.artstation.com/p/assets/images/images/017/390/192/large/brian-hagan-pla-ossus-final.jpg?1555781865" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{result.name}</h5>
                  <Link to="/detailsplanets" className="btn btn-outline-primary">
                    Read More
                  </Link>
                  <div className="d-grid gap-2 d-flex justify-content-md-end">
                    <button
                      className="btn btn-outline-warning me-md-2"
                      type=""
                    ><AiFillHeart /></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default CardPlanets;
