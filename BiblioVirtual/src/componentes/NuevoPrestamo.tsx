import { useState, useEffect } from 'react'
import librosTotales from './libros'

function NuevoPrestamo(){

const [values, setValues] = useState({
    titulo: '',
    cantidad: '',
    fecha: '',
    hora: '',
})

const handleChanges = (e) => {
    setValues({...values, [e.target.name]:[e.target.value]})
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
}
    return(

        <>
        
        <form onSubmit={handleSubmit} className='nuevoPrestamo'>
            <label htmlFor="libro">Titulo del libro</label>
            <select name="" id="">
        <option onChange={(e) => handleChanges(e)} >Elegi un libro</option>
            {librosTotales.map((libro, i) => (
        <option key={i}>
            {libro.titulo}
        </option>
        ))}</select><br />
            <label htmlFor="">Cantidad</label>
            <input type="number" onChange={(e) => handleChanges(e)} /> <br />

            <label htmlFor="curso">Curso:</label>
            <select name="curso" id="curso" onChange={(e) => handleChanges(e)}>
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
            </select>  <br />

            <label htmlFor="fecha">Fecha:</label>
            <input type="date" name="fecha" id="fecha" onChange={(e) => handleChanges(e)} /> <br />

            <label htmlFor="hora">Hora:</label>
            <input type="time" onChange={(e) => handleChanges(e)} /> <br />

            <button type="submit">Guardar</button>
            <button>Cancelar</button>

        </form>

        </>
    )

}

export default NuevoPrestamo