import { useState, useEffect } from 'react'
import librosTotales from './libros'
import NuevoPrestamo from './NuevoPrestamo'
import Prestamos from './ListaPrestamos'

function Listalibro() {
  const [libros, setLibros] = useState<any[]>([])
  const [busqueda, setBusqueda] = useState('')

  const [prestamos, setPrestamos] = useState<any[]>([])



  const librosFiltrados = libros.filter(
    (libro) =>
      libro.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      libro.autor.toLowerCase().includes(busqueda.toLowerCase())
  )




useEffect(() => {
  const guardados = localStorage.getItem('libros')
  if (guardados) {
    setLibros(JSON.parse(guardados))
  } else {
    setLibros(librosTotales)
    localStorage.setItem('libros', JSON.stringify(librosTotales))
  }

  const prestamosGuardados = localStorage.getItem('prestamos')
  if (prestamosGuardados) {
    setPrestamos(JSON.parse(prestamosGuardados))
  }
}, [])

useEffect(() => {
  localStorage.setItem('prestamos', JSON.stringify(prestamos))
}, [prestamos])





  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario)
  }

  const [mostrarPrestamo, setMostrarPrestamo] = useState(false)
  const togglePrestamo = () => {
    setMostrarPrestamo(!mostrarPrestamo)
  }




const agregarPrestamo = (nuevo: any) => {
  const libroIndex = libros.findIndex((libro) => libro.titulo === nuevo.titulo)

  if (libroIndex === -1) {
    alert("Libro no encontrado")
    return
  }

  const cantidadPrestada = parseInt(nuevo.cantidad)
  if (isNaN(cantidadPrestada) || cantidadPrestada <= 0) {
    alert("Cantidad inválida")
    return
  }

  if (libros[libroIndex].unidadesDisponibles < cantidadPrestada) {
    alert("No hay suficientes unidades disponibles")
    return
  }

  const nuevosLibros = [...libros]
  nuevosLibros[libroIndex].unidadesDisponibles -= cantidadPrestada

  setLibros(nuevosLibros)
  localStorage.setItem("libros", JSON.stringify(nuevosLibros))

  const nuevosPrestamos = [...prestamos, nuevo]
  setPrestamos(nuevosPrestamos)
  localStorage.setItem("prestamos", JSON.stringify(nuevosPrestamos))
}




const eliminarPrestamo = (index: number) => {
  const prestamo = prestamos[index]
  const libroIndex = libros.findIndex((libro) => libro.titulo === prestamo.titulo)

  if (libroIndex !== -1) {
    const nuevosLibros = [...libros]
    nuevosLibros[libroIndex].unidadesDisponibles += parseInt(prestamo.cantidad)
    setLibros(nuevosLibros)
    localStorage.setItem("libros", JSON.stringify(nuevosLibros))
  }

  const nuevosPrestamos = [...prestamos]
  nuevosPrestamos.splice(index, 1)
  setPrestamos(nuevosPrestamos)
  localStorage.setItem("prestamos", JSON.stringify(nuevosPrestamos))
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
          {mostrarPrestamo && (
          <Prestamos prestamos={prestamos} onDevuelto={eliminarPrestamo} />
)}
        </div>
      </div>
    </>
  )
}

export default Listalibro