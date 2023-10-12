import "AdminLogin.css";
import CreateAccountForm from "../components/CreateAdminForm";
import Purplelogo from /images/PurpleLogo.png;



function CreateAdmin() {
    return (
        <div>
            <img src={Purplelogo} className="purple-logo" />
            <div className="create-admin-container"> 
                <CreateAccountForm />
            </div>
        </div>
    );
}

export default CreateAdmin;
