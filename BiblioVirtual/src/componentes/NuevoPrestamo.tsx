import { useState } from "react"
import librosTotales from "./libros"

function NuevoPrestamo({ onGuardar }: { onGuardar: (p: any) => void }) {
const [values, setValues] = useState({
    titulo: "",
    cantidad: "",
    curso: "",
    fecha: "",
    hora: "",
})

const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
    setValues({ ...values, [e.target.name]: e.target.value })
}

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!values.titulo || !values.cantidad || !values.curso) {
    alert("Completa todos los campos obligatorios")
    return
    }
    onGuardar(values)
    setValues({
    titulo: "",
    cantidad: "",
    curso: "",
    fecha: "",
    hora: "",
    })
}

return (
    <form onSubmit={handleSubmit} className="nuevoPrestamo">
    <h2>Nuevo Préstamo</h2>

    <label htmlFor="titulo">Título del libro</label>
    <select
        name="titulo"
        id="titulo"
        onChange={handleChanges}
        value={values.titulo}
    >
        <option value="">Elegí un libro</option>
        {librosTotales.map((libro, i) => (
        <option key={i} value={libro.titulo}>
            {libro.titulo}
        </option>
        ))}
    </select>
    <br />

    <label htmlFor="cantidad">Cantidad</label>
    <input
        type="number"
        name="cantidad"
        id="cantidad"
        value={values.cantidad}
        onChange={handleChanges}
    />
    <br />

    <label htmlFor="curso">Curso</label>
    <select
        name="curso"
        id="curso"
        value={values.curso}
        onChange={handleChanges}
    >
        <option value="">Seleccione curso</option>
        <option value="1ro 1ra">1ro 1ra</option>
        <option value="1ro 2da">1ro 2da</option>
        <option value="1ro 3ra">1ro 3ra</option>
        <option value="2do 1ra">2do 1ra</option>
        <option value="2do 2da">2do 2da</option>
        <option value="2do 3ra">2do 3ra</option>
        <option value="3ro 1ra">3ro 1ra</option>
        <option value="3ro 2da">3ro 2da</option>
        <option value="3ro 3ra">3ro 3ra</option>
        <option value="4to INFO">4to INFO</option>
        <option value="4to ELECTRO">4to ELECTRO</option>
        <option value="4to MMO">4to MMO</option>
        <option value="5to INFO">5to INFO</option>
        <option value="5to ELECTRO">5to ELECTRO</option>
        <option value="5to MMO">5to MMO</option>
        <option value="6to INFO">6to INFO</option>
        <option value="6to ELECTRO">6to ELECTRO</option>
        <option value="6to MMO">6to MMO</option>
        <option value="7mo INFO">7mo INFO</option>
        <option value="7mo ELECTRO">7mo ELECTRO</option>
        <option value="7mo MMO">7mo MMO</option>
    </select>
    <br />

    <label htmlFor="fecha">Fecha</label>
    <input
        type="date"
        name="fecha"
        id="fecha"
        value={values.fecha}
        onChange={handleChanges}
    />
    <br />

    <label htmlFor="hora">Hora</label>
    <input
        type="time"
        name="hora"
        id="hora"
        value={values.hora}
        onChange={handleChanges}
    />
    <br />

    <button type="submit">Guardar</button>
    <button type="button" onClick={() => setValues({
        titulo: "",
        cantidad: "",
        curso: "",
        fecha: "",
        hora: "",
    })}>
        Cancelar
    </button>
    </form>
)
}

export default NuevoPrestamo