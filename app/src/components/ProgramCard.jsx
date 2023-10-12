import { Link } from "react-router-dom";
//import "./.css"

function ProgramCard(props) {
    const { programData } = props;
    const programLink = `/program/${programData.id}`;

    return (
    <div className="program-card">
        <Link to={programLink}>
        <img src={programData.image} />
        <h3>{programData.title}</h3>
        </Link>
    </div>
    );
}

export default ProgramCard;