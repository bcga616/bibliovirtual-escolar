function ListaPrestamos({   prestamos,
  onDevuelto
}: {
  prestamos: any[]
  onDevuelto: (index: number) => void
}) {


    return (
<div>
    <h2>Lista de Préstamos</h2>
    {prestamos.length === 0 ? (
        <p>No hay préstamos registrados.</p>
    ) : (
    <table>
        <thead>
            <tr>
            <th>Título</th>
            <th>Cantidad</th>
            <th>Curso</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {prestamos.map((p, i) => (
            <tr key={i}>
                <td>{p.titulo}</td>
                <td>{p.cantidad}</td>
                <td>{p.curso}</td>
                <td>{p.fecha}</td>
                <td>{p.hora}</td>
                <td><button onClick={() => onDevuelto(i)}>Devuelto</button></td>
            </tr>
            ))}
        </tbody>
    </table>
    )}
</div>
)
}

export default ListaPrestamos