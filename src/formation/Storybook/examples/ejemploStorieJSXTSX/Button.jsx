
import PropTypes from 'prop-types';

/**
 * Toda la configuracion que podemos apreciar en este componente y las descripciones vienen explicadas en los documentos de este apartado, siguiendo todo el documento llegaremos a tener un documente como el que podemos observar.
 */
export const Button = ({setState,label="Cambiar a"})=>{
    const nombres = ["guille","pau"]

return(
    <>
    <span>
      <button onClick={()=>setState(nombres[0])}>{label} Guille</button>
      <button onClick={()=>setState(nombres[1])}>{label} Paula</button>
    </span>
    </>
)}


Button.propTypes = {
  /** Funcionalidad del setState asociado al componente */
  setState: PropTypes.func.isRequired,
  /** Label modifica el texto que sale en el boton */
  label: PropTypes.string,
};

