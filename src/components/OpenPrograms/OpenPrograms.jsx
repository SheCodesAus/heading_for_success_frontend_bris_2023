import { Link } from 'react-router-dom'
import "../OpenPrograms/OpenPrograms.css"

function OpenPrograms({ programOpen }) {
    const programPath = `get-open-programs/${programOpen.id}`;

    return (
        <div className='openprogramcard'>
            <Link to={programPath} >
                <img src={programOpen.image} alt={programOpen.program_name} />
                <h2>{programOpen.program_name}</h2>
                <h3>{programOpen.location}</h3>
            </Link>
        </div>
    );
}

export default OpenPrograms