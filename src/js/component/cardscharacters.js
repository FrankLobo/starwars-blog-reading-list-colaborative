import React, { useContext } from "react";
import { AiFillHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardCharacters = (props) => {
  const { store } = useContext(Context);
  const id = props.id;
  return (
    <>
      <div className="col d-grid gap-5">
        {
          store.characters !== null &&
          store.characters.results.length > 1 &&
          store.characters.results.map((result, index) => {
            return (
              <div className="card animate__animated animate__zoomIn" key={index}>
                <img src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/01/The-Mandalorian-portada-scaled.jpeg?resize=1536%2C864&quality=50&strip=all&ssl=1" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1 className="card-title">{result.name}</h1>
                  <p className="card-title"><strong>Birth_year:</strong> {result.birth_year}</p>
                  <p className="card-title"><strong>Height:</strong> {result.height}</p>
                  <p className="card-title"><strong>Gender:</strong> {result.gender}</p>
                  <Link to={`/detailscharacters/${id}`} className="btn btn-outline-primary">
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

export default CardCharacters;
