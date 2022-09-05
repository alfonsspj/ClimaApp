import Formulario from './Formulario'
import Resultado from './Resultado'
import Loading from './Loading'
import useClima from '../hooks/useClima'

const AppClima = () => {

  // es un objeto que esta vacio
  const { resultado, cargando, noResultado } = useClima()
  console.log(cargando);

  return (
    <>
        <main className="dos-columnas">
            <Formulario />

             {/* optional change - cuando tienes un objeto vacio y despues va a tener algo */}
            {/* {resultado?.name && <Resultado />} */}

            { 
              cargando ? <Loading /> :
              resultado?.name ? <Resultado /> :
              noResultado ? <p>{noResultado}</p> :
              <p>El clima se va a mostrar aquí</p>
            }
        </main>
    </>
  )
}

export default AppClima