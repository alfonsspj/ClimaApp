import { useState, createContext } from 'react'
import axios from 'axios'

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {
    
    // console.log(import.meta.env.VITE_API_KEY)

    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const [resultado, setResultado] = useState({})

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    // conexion a la api
    const consultarClima = async datos => {
        try {
            const { ciudad, pais } = datos

            const appId = import.meta.env.VITE_API_KEY

            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`
            // console.log(url);

            // extraer latitud y longitud
            const { data } = await axios(url)
            // console.log(data[0])
            const { lat, lon } = data[0]

            // consulta el clima
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            // renombrar variable
            const { data: clima } = await axios(urlClima)
            setResultado(clima)

        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                consultarClima,
                resultado
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export {
    ClimaProvider
}

export default ClimaContext




