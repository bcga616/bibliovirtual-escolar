import { useState, useEffect } from 'react'
import librosTotales from './componentes/libros'
import './App.css'


function App() {

  const [libros, setLibros] = useState([])  
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    const guardados = localStorage.getItem('libros')
    if (guardados) {
      setLibros(JSON.parse(guardados))
    } else {
      setLibros(librosTotales)
      localStorage.setItem('libros', JSON.stringify(librosTotales))
    }
  }, [])

    const librosFiltrados = libros.filter((libro) =>
    libro.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    libro.autor.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <>
    <div className='container'>
      <h1>Biblioteca</h1>
      <input
          type="text"
          placeholder='Buscar por título o autor...'
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <div className='listalibros'>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Género</th>
                <th>Disponibles</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {librosFiltrados.map((libro) => (
                <tr key={libro.id}>
                  <td>{libro.titulo}</td>
                  <td>{libro.autor}</td>
                  <td>{libro.categoria}</td>
                  <td>{libro.unidadesDisponibles}</td>
                  <td>{libro.totalUnidades}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
    </>
  )
}

export default App
