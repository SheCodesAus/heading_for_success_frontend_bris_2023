import { Link } from "react-router-dom";


function OpenPrograms(props) {
    const { programOpen } = props;
    const programPath = `get-open-programs/${programOpen.id}`;

    return (
        <div className='openprogram'>
            <Link to={programPath} >
                <img src={programOpen.image} />
                <h2>{programOpen.program_name}</h2>
                <h3>{programOpen.location}</h3>
            </Link>
        </div>
    );
}

export default OpenPrograms