import TableRow from './TableRow';

import './Table.css';

const Table=({people})=>{
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>Email</th>
                    <th>照片</th>
                </tr>
            </thead>
            <tbody>
                {people && people.map(person=>(
                    <TableRow key={person.id} person={person} />
                ))}
            </tbody>
        </table>
    );
}

export default Table;