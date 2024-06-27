import { useContext } from 'react';//Se importa useContext para 
import { Context } from '../../App'//Se importa el contexto
import './CategoryBar.css';//Se importa el css
import {getMovieGenres} from '../../controllers/APIcalls'

const gato = ['hola', 'como'];//array de simulacion, luego se cambia con el nombre de al categoria

function CategoryBar() {

  const [selectCategories, setSelectCategories] = useContext(Context);//se ejecutan selectCategories y setSelectCategories dentro del useContext
  //lo que permite modificarlos de forma global dentro del contexto

  const selectFilter = e => {//Funcion flecha para que filtre y modifique el array de selectCategories
    if (e.target.checked) {//En caso de que presione el checkbox
      e.target.checked=true;//Activa el checked

      setSelectCategories([...selectCategories, e.target.value]);//Agrega el valor del muevo elemento checkeado
    } else {//Si no se toca el checkbox
      e.target.checked=false;//Mantiene el checked desactivado

      setSelectCategories(() =>//quita el valor del checked del array de  selectCategories
        selectCategories.filter(deleteCategory => deleteCategory !== (e.target.value)))
    }//Filter recibe una funcion de condicion, y devuelve un array que cumple con la condicion de adentro
  };

  return (
    <section className='container-filter-category'>
      <h3>Filters</h3>
      <div>
        {gato.map((filter, index) => (//imprime cada elemento
          <div className='filter-content' key={index}>{/*separamos cada checkbox con divs unicos con la key para cada categoria*/}
              <input  type="checkbox" id={`filter-category${filter}`} onChange={selectFilter} value={filter} />
              {/* el onchange, se usa para que por cada cambio de estado de los checkbox, se llame a la funcion de filtrado 
              con el valor de el nombre del filtro*/}
              <label htmlFor={`filter-category${filter}`}>{/* labels unicos para checkbox unicos */}
                <p className='categories'>{filter}</p>{/* es el nombre de las categorias */}
              </label>
          </div>
        ))}
      </div>
    </section>
  );

}

export default CategoryBar;//se exporta el componente