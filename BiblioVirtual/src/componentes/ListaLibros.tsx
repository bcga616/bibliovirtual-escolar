import { useState, useEffect } from 'react'
import librosTotales from './libros'
import NuevoPrestamo from './NuevoPrestamo'
import Prestamos from './ListaPrestamos'

function Listalibro() {
  const [libros, setLibros] = useState<any[]>([])
  const [busqueda, setBusqueda] = useState('')

  const [prestamos, setPrestamos] = useState<any[]>([])

  useEffect(() => {
    const guardados = localStorage.getItem('libros')
    if (guardados) {
      setLibros(JSON.parse(guardados))
    } else {
      setLibros(librosTotales)
      localStorage.setItem('libros', JSON.stringify(librosTotales))
    }
  }, [])

  const librosFiltrados = libros.filter(
    (libro) =>
      libro.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      libro.autor.toLowerCase().includes(busqueda.toLowerCase())
  )

  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario)
  }

  const [mostrarPrestamo, setMostrarPrestamo] = useState(false)
  const togglePrestamo = () => {
    setMostrarPrestamo(!mostrarPrestamo)
  }

  const agregarPrestamo = (nuevo: any) => {
    setPrestamos([...prestamos, nuevo])
  }

  return (
    <>
      <header>
        <h1>Biblioteca Virtual</h1>
      </header>

      <div className="container">
        <input
          type="text"
          placeholder="Buscar por título o autor..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button onClick={toggleFormulario}>
          {mostrarFormulario ? 'Cerrar Formulario' : 'Nuevo Préstamo'}
        </button>
        <button onClick={togglePrestamo}>
          {mostrarPrestamo ? 'Cerrar Préstamos' : 'Préstamos'}
        </button>

        <div className="listalibros">
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

        <div>
          {mostrarFormulario && <NuevoPrestamo onGuardar={agregarPrestamo} />}
          {mostrarPrestamo && <Prestamos prestamos={prestamos} />}
        </div>
      </div>
    </>
  )
}

export default Listalibro