import React from "react";
import '../../StyleSheets/NavBar.css'

function NavBar(){

    const gato=['hola', 'como', 'estas']
        return (
            <section>
            <h3>Filters</h3>
            <div>
                {gato.map((gato, index) => (
                   <div key={index}>
                        <input type="checkbox" id={`filterCategory${index}`} />
                        <label htmlFor={`filterCategory${index}`}>
                            {gato}
                       </label>
                    </div>
                ))}
            </div>
        </section>
    );
    
}

export default NavBar;
