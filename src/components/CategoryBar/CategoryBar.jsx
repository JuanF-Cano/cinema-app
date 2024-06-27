import { useContext} from 'react';
const gato = ['hola', 'como'];
import { Context } from '../../App'

function CategoryBar() {

  const [selectCategories, setSelectCategories] = useContext(Context);

  const selectFilter = e => {
    if (e.target.checked) {
      e.target.checked=true;  

      // Si se marca el checkbox, agrega el género al estado  [... se]
      setSelectCategories([...selectCategories, e.target.value]);
    } else {
      e.target.checked=false; 
      // Si se desmarca el checkbox, elimina el género del estado

      setSelectCategories(() =>
        selectCategories.filter(deleteCategory => deleteCategory !== (e.target.value)))
    }
  };

  return (
    <section>
      <h3>Filters</h3>
      <div>
        {gato.map((filter, index) => (
          <div key={index}>
              <input  type="checkbox" id={`filterCategory${filter}`} onChange={selectFilter} value={filter} />
              <label htmlFor={`filterCategory${filter}`}>
                {filter}
              </label>
          </div>
        ))}
      </div>
    </section>
  );

}

export default CategoryBar;