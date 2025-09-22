import { useState, useEffect } from 'react'
import librosTotales from './componentes/libros'

function NuevoPrestamo(){



    return(

        <>
        
        <form>
            <label htmlFor="libro">Titulo del libro</label>
        <option value=""> Elegi un libro</option>
              {librosTotales.map((libro, i) => (
    <option key={i}>
      {libro.titulo}
    </option>
  ))}
            <label htmlFor="curso">Curso:</label>
            <select name="" id="">
                <option value="primero">1ro 1ra</option>
                <option value="primero">1ro 2da</option>
                <option value="primero">1ro 3ra</option>
                <option value="primero">2do 1ra</option>
                <option value="primero">2do 2da</option>
                <option value="primero">2do 3ra</option>
                <option value="primero">3ro 1ra</option>
                <option value="primero">3ro 2da</option>
                <option value="primero">3ro 3ra</option>
                <option value="primero">4to INFO</option>
                <option value="primero">4to ELECTRO</option>
                <option value="primero">4to MMO</option>
                <option value="primero">5to INFO</option>
                <option value="primero">5to ELECTRO</option>
                <option value="primero">5to MMO</option>
                <option value="primero">6to INFO</option>
                <option value="primero">6to ELECTRO</option>
                <option value="primero">6to MMO</option>
                <option value="primero">7mo INFO</option>
                <option value="primero">7mo ELECTRO</option>
                <option value="primero">7mo MMO</option>
            </select>
            <label htmlFor="fecha">Fecha:</label>
            <input type="date" name="fecha" id="fecha" />
            <label htmlFor="hora">Hora:</label>
            <input type="time" />
            <input type="button" value="Guardar" />
            <input type="button" value="Cancelar" />

        </form>

        </>
    )

}

export default NuevoPrestamo