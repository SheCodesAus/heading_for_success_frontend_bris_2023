import { Link } from 'react-router-dom'
import "../OpenPrograms/OpenPrograms.css"

function OpenPrograms({ programOpen }) {

    const programPath = `programOpen/${programOpen.id}`;


    return (
        <div className='openprogramcard'>
            <Link to={programPath} >
                {/* <img src={programOpen.image} alt={programOpen.program_name} /> */}
                <h2>{programOpen.program_name}</h2>
                <p>{programOpen.location}</p>
            </Link>
        </div>
    );
}

export default OpenPrograms