import { useContext, useEffect, useState } from 'react'; // Importación de useContext, useEffect y useState desde React para manejar el estado y el contexto
import { Context } from '../../pages/SearchPage'; // Importación del contexto desde la aplicación principal
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
        setGenres(genresResponse); // Actualizar estado de géneros con el array de objetos resultante
        console.log(genres)
      } catch (err) {
        console.log(err); // Manejar errores si ocurren al obtener géneros
      }
    };
    fetchGenres(); // Llamada a la función de obtener géneros al cargar el componente
  }, []); // Dependencia vacía para asegurar que se ejecute solo una vez al montar el componente

  // Función para manejar la selección de categorías mediante checkboxes
  const selectFilter = (e) => {
    const selectedCategory = genres.find(genre => genre.id === parseInt(e.target.value)); // Obtener el objeto de género seleccionado
    if (e.target.checked) { // Verificación si el checkbox está marcado
      setSelectCategories((prevCategories) => {
        const updatedCategories = [...prevCategories, selectedCategory.id];
        return updatedCategories;
      });
    } else {
      setSelectCategories((prevCategories) => {
        const updatedCategories = prevCategories.filter(category => category !== selectedCategory.id);
        console.log(updatedCategories);
        return updatedCategories;
      });
    }
  };

  // Renderizado del componente CategoryBar
  return (
    <section className='container-filter-category'>
      <h3>Filters</h3> {/* Título de la sección de filtros */}
      <div>
        {genres.map((filter) => ( // Mapeo de los géneros de películas para mostrar cada categoría como un checkbox
          <div className='filter-content' key={filter.id}>{/* Contenedor para cada checkbox */}
            <input
              type="checkbox"
              id={`filter-category${filter.id}`}
              onChange={selectFilter} // Manejador de cambio para la selección de categorías
              value={filter.id} // Valor del checkbox es el id del género de película
            />
            <label htmlFor={`filter-category${filter.id}`}>{/* Etiqueta para el checkbox */}
              <p className='categories'>{filter.name}</p>{/* Nombre del género de película como categoría */}
            </label>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryBar; // Exportación del componente CategoryBar para su uso en la aplicación
