import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import starwars from "../../img/star-wars-logo.jpg";


export const DetailsCharacters = () => {
	const { store, actions } = useContext(Context);
	const { uid } = useParams();
	return (
		<>
			{/* {
				store.charactersDetails.result.map()
			} */}
			<div className="container border-0">
				<div className="card mb-3 border-0">
					<div className="row g-0">
						<div className="col-md-4">
							<img src={starwars} className="img-fluid" alt="..." />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">name</h5>
								<p className="card-text col-md-8">Height:</p>
								<p className="card-text col-md-8">mass:</p>
								<p className="card-text col-md-8">hair_color:</p>
								<p className="card-text col-md-8">skin_color:</p>
								<p className="card-text col-md-8">eye_color:</p>
								<p className="card-text col-md-8">birth_year:</p>
								<p className="card-text col-md-8">gender:</p>
								<p className="card-text col-md-8">created:</p>
								<p className="card-text col-md-8">edited:</p>
								<p className="card-text col-md-8">description:</p>
								{/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Link to="/">			
			<button className="btn btn-primary d-grid gap-2 col-1 mx-auto">
				Back to Home
			</button>
			</Link>
			{/* <div className="card-footer bg-black border-danger text-white text-center">
				<a src="aquivalinks" />aquivalinks
			</div> */}
		</>
	);
};
