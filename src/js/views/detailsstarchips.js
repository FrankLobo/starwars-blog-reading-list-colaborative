import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/star-wars-logo.jpg";


export const DetailsStarchips = props => {
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
								<p className="card-text col-md-8">model:</p>
								<p className="card-text col-md-8">mass:</p>
								<p className="card-text col-md-8">starship_class:</p>
								<p className="card-text col-md-8">manufacturer:</p>
								<p className="card-text col-md-8">cost_in_credits:</p>
								<p className="card-text col-md-8">length:</p>
								<p className="card-text col-md-8">crew:</p>
								<p className="card-text col-md-8">passengers:</p>
								<p className="card-text col-md-8">MGLT:</p>
								<p className="card-text col-md-8">cargo_capacity:</p>
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
