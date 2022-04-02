import React, { useContext } from "react";
import { AiFillHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardStarchips = () => {
  const { store } = useContext(Context);
  return (
    <>
      <div className="col d-grid gap-5">
        {
          store.starships !== null &&
          store.starships.results.length > 1 &&
          store.starships.results.map((result) => {
            return (
              <div className="card animate__animated animate__zoomIn" key={result.uid}>
                <img src="https://www.denofgeek.com/wp-content/uploads/2016/01/millennium-falcon.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{result.name}</h5>
                  <Link to="/detailsstarchips" className="btn btn-outline-primary">
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


export default CardStarchips;
