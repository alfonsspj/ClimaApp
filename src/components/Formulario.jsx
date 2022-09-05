
const Formulario = () => {
  return (
    <div className="contenedor">
        <form>
            <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input
                    type="text"
                    id="ciudad"
                    name="ciudad"
                />                
            </div>
            <div className="campo">
                <label htmlFor="pais">Pais</label>
                <select
                    id="pais"
                    name="pais"
                >
                    <option value="">Seleccione un País</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">España</option>
                    <option value="PE">Perú</option>
                </select>                
            </div>

            <input 
                type="submit"
                value='Consultar Clima'
            />
        </form>
    </div>
  )
}

export default Formulario