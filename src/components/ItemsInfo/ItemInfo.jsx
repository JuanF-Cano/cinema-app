import React, { useState, useEffect } from "react";
import "./ItemInfo.css";
import {
  getMovieDetails,
  getTVShowDetails,
  getPersonDetails,
} from "../../controllers/APIcalls";

function ItemInfo(props) {
  let type = props.type;
  type = type.toLowerCase();
  console.log(type);
  const [infoDetails, setInfoDetails] = useState({});

  useEffect(() => {
    async function fetchData() {
      let response;
      if (type == "movie") {
        response = await getMovieDetails(props.id);
        console.log(response);
        let imgPATH = response.poster_path;
        let imgURL = `https://image.tmdb.org/t/p/w500/${imgPATH}`;
        setInfoDetails({
          img: imgURL,
          title: response.title,
          year: response.release_date,
          director: response.director,
          description: response.overview,
        });
      }
      if (type == "tvshow") {
        response = await getTVShowDetails(props.id);
        console.log(response);
        let imgPATH = response.poster_path;
        let imgURL = `https://image.tmdb.org/t/p/w500/${imgPATH}`;
        setInfoDetails({
          img: imgURL,
          title: response.name,
          year: response.first_air_date,
          director: response.created_by[0].name,
          description: response.overview,
        });
      }
      if (type == "person") {
        response = await getPersonDetails(props.id);
        console.log(response);
        let imgPATH = response.profile_path;
        let imgURL = `https://image.tmdb.org/t/p/w500/${imgPATH}`;
        setInfoDetails({
          img: imgURL,
          name: response.name,
          biography: response.biography,
          birthaday: response.birthday,
        });
        console.log(infoDetails.name);
      }
    }
    fetchData();
  }, [props.id, props.type]);

  return (
    <div className="view-details-container">
      <div className="view-details">
        {infoDetails.img && (
          <img src={infoDetails.img} alt={infoDetails.title} />
        )}
        <div className="details">
          <h2>{type == "person" ? infoDetails.name : infoDetails.title}</h2>
          <p>{type == "person" ? infoDetails.biography : infoDetails.year}</p>
          <p>
            {type == "person" ? infoDetails.birthaday : infoDetails.director}
          </p>
          <p>{type == "person" ? "" : infoDetails.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemInfo;
