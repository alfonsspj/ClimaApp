import Formulario from './Formulario'
import Resultado from './Resultado'
import useClima from '../hooks/useClima'

const AppClima = () => {

  // es un objeto que esta vacio
  const { resultado } = useClima()

  return (
    <>
        <main className="dos-columnas">
            <Formulario />

             {/* optional change - cuando tienes un objeto vacio y despues va a tener algo */}
            {resultado?.name && <Resultado />}
        </main>
    </>
  )
}

export default AppClima