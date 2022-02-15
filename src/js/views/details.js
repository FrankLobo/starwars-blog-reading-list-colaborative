import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
// import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";


export const Details = props => {
	// const { store, actions } = useContext(Context);
	// const params = useParams();
	return (
		<>
		
		<div className="container border-0">
			<div className="card mb-3 border-0">
				<div className="row g-0">
    				<div className="col-md-4">
     			 		<img src="" className="img-fluid rounded-start" alt="..." />
    				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{props.title}</h5>
						<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
					</div>
				</div>
				</div>
			</div>
		</div>
			<div className="card-footer bg-white border-danger text-center">
			<a src="aquivalinks"/>aquivalinks
	 		 </div>
			  </>
	);
};

// DetailsCard.propTypes = {
// 	imageUrl: PropTypes.object,
// 	title: PropTypes.string,
// 	text: PropTypes.string,

// };
			// <h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>
			{/* <Link to="/">
				<span className="btn btn-secondary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link> */}



			// <Link to="/">
			// 	<button className="btn btn-primary">Back home</button>
			// </Link>
