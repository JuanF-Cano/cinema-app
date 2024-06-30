import React from "react";
import axios from "axios";



const ACCES_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2JlYjkxMDYxOWFmODcwZWE0MzAxNmMxYTcyZTMxMSIsIm5iZiI6MTcxOTU3MTU5OS45MDg1MTksInN1YiI6IjY2NzcyYThjZjRhNTI5ZjBkOWVkMzAzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2NDxX0pDLnqHvoDK2o8WL27YiyAe6U8EHAiNVB30mBA";

async function searchAPI(endpoint, params) {
  try {
    //instanciando la clase URL en la variable url con el endpoint
    const url = new URL(`https://api.themoviedb.org/3/${endpoint}`);
    //con la interfaz URLSearchParams creamos los queryStrings
    const searchParams = new URLSearchParams(params);
    //agregando la queryString a la URL
    url.search = searchParams;

    //Obteniendo la respuesta de la API
    const response = await axios.get(url.toString(), {
      headers: {
        Authorization: `Bearer ${ACCES_TOKEN}`,
      },
      params: {
        languaje: "es-ES",
      },
    });

    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export default searchAPI;
