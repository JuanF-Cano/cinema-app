import React from "react";
import "./ViewDetails.css";


function ViewDetails(props) {
  const { title, year, director, description, img } = props;
  return (
    <div className="view-details-container">
      <div className="view-details">
        <img src={img} alt={title} />
        <div className="details">
          <h2>{title}</h2>
          <p>{year}</p>
          <p>{director}</p>
          <p>{description}</p>
        </div>
      </div>
      <div className="more-description">
        <h2>More Description</h2>
    </div>
        <div className="related-content">
          <h2>Related Content</h2>
        </div>
    </div>
  );
}


export default ViewDetails;