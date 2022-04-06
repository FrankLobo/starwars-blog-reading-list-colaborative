import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/star-wars-logo.jpg";


export const DetailsPlanets = props => {
	// const { store, actions } = useContext(Context);
	return (
		<>

			<div className="container border-0">
				<div className="card mb-3 border-0">
					<div className="row g-0">
						<div className="col-md-4">
							<img src={starwars} className="img-fluid" alt="..." />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">name</h5>
								<p className="card-text col-md-8">diameter:</p>
								<p className="card-text col-md-8">rotation_period:</p>
								<p className="card-text col-md-8">orbital_period:</p>
								<p className="card-text col-md-8">gravity:</p>
								<p className="card-text col-md-8">population:</p>
								<p className="card-text col-md-8">climate:</p>
								<p className="card-text col-md-8">terrain:</p>
								<p className="card-text col-md-8">surface_water:</p>
								<p className="card-text col-md-8">created:</p>
								<p className="card-text col-md-8">edited:</p>
								<p className="card-text col-md-8">description:</p>
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
			<div className="card-footer bg-black border-danger text-white text-center">
				<a src="aquivalinks" />aquivalinks
			</div>
		</>
	);
};
