import './Table.css';

const TableRow=({person})=>{
    return (
        <tr>
            <td>{person.name}</td>
            <td>{person.email}</td>
            <td>{person.url && <img className="avatar" src={person.url} alt="avatar" />}</td>
        </tr>
    );
}

export default TableRow;