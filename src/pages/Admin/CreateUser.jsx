import AddUser from '../../components/AddUser/AddUser'
import { Link } from 'react-router-dom';


function CreateUser() {
    return(
        <div><AddUser />
         <div className="program-buttons">
                    <Link to="/user" className="program-button">
                        New User/Admin
                    </Link>
                    <Link to="/Programs" className="program-button">
                        Programs
                    </Link>
                    <Link to="/newProgram" className="program-button">
                        New Program
                    </Link>
                    <Link to="/applicants" className="program-button">
                        Applicants
                    </Link>
                    <Link to="/scholarships" className="program-button">
                        Scholarships
                    </Link>
                </div>
                </div>
    )
}

export default CreateUser