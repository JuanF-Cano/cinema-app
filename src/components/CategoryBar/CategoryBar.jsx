import { useContext, useEffect, useState } from 'react'; // Importación de useContext, useEffect y useState desde React para manejar el estado y el contexto
import { Context } from '../../App'; // Importación del contexto desde la aplicación principal
import './CategoryBar.css'; // Estilos CSS para el componente CategoryBar
import { getMovieGenres } from '../../controllers/APIcalls'; // Función para obtener géneros de películas desde API

function CategoryBar() {
  const [genres, setGenres] = useState([]); // Estado para almacenar los géneros de películas
  const [selectCategories, setSelectCategories] = useContext(Context); // Estado para almacenar las categorías seleccionadas desde el contexto global

  // Efecto para obtener los géneros de películas al cargar el componente
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genresResponse = await getMovieGenres(); // Obtener respuesta de géneros desde la API
        const genresArray = genresResponse.map(genre => genre.name); // Convertir objeto de géneros en un array de valores
        setGenres(genresArray); // Actualizar estado de géneros con el array resultante
      } catch (err) {
        console.log(err); // Manejar errores si ocurren al obtener géneros
      }
    };
    fetchGenres(); // Llamada a la función de obtener géneros al cargar el componente
  }, []); // Dependencia vacía para asegurar que se ejecute solo una vez al montar el componente

  // Función para manejar la selección de categorías mediante checkboxes
  const selectFilter = (e) => {
    const selectedCategory = e.target.value; // Obtención del valor de la categoría seleccionada
    if (e.target.checked) { // Verificación si el checkbox está marcado
      setSelectCategories([...selectCategories, selectedCategory]); // Agregar la categoría seleccionada al estado de categorías seleccionadas
    } else {
      setSelectCategories(selectCategories.filter(category => category !== selectedCategory)); // Filtrar y quitar la categoría seleccionada del estado de categorías
    }
  };

  // Renderizado del componente CategoryBar
  return (
    <section className='container-filter-category'>
      <h3>Filters</h3> {/* Título de la sección de filtros */}
      <div>
        {genres.map((filter, index) => ( // Mapeo de los géneros de películas para mostrar cada categoría como un checkbox
          <div className='filter-content' key={index}>{/* Contenedor para cada checkbox */}
            <input
              type="checkbox"
              id={`filter-category${filter}`}
              onChange={selectFilter} // Manejador de cambio para la selección de categorías
              value={filter} // Valor del checkbox es el nombre del género de película
            />
            <label htmlFor={`filter-category${filter}`}>{/* Etiqueta para el checkbox */}
              <p className='categories'>{filter}</p>{/* Nombre del género de película como categoría */}
            </label>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryBar; // Exportación del componente CategoryBar para su uso en la aplicación
