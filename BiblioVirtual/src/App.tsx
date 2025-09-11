import { useState, useEffect } from 'react'
import librosTotales from './componentes/libros'
import './App.css'


function App() {
  const [libros, setLibros] = useState([])

  useEffect(() => {
    const guardados = localStorage.getItem('libros')
    if (guardados) {
      setLibros(JSON.parse(guardados))
    } else {
      setLibros(librosTotales)
      localStorage.setItem('libros', JSON.stringify(librosTotales))
    }
  }, [])

  return (
    <>
    <div className='container'>
      <h1>Biblioteca</h1>
      
      <div className='listalibros'>
        <table>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Genero</th>
          <th>Disponibles</th>
          <th>Total</th>
          
          {libros.map((libro) => (
            <tr key={libro.id}>
              <td>{libro.titulo}</td>
              <td>{libro.autor}</td>
              <td>{libro.categoria}</td>
              <td>{libro.unidadesDisponibles}</td>
              <td>{libro.totalUnidades}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
    </>
  )
}

export default App
