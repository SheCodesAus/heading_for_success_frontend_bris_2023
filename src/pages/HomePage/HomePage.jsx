// import "../../main.css"
import "./HomePage.css";
import UpdatedCartoon from '../../Images/UpdatedCartoon.svg'
import Header from '../../components/Header/header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import OpenProgramsList from "../../components/OpenProgramsList/OpenProgamsList";

function HomePage() {
    return (
        <div className="homepage-container">
            <Header />
            <OpenProgramsList />
            <img src={UpdatedCartoon} class="homeCartoon"></img>
            <Footer/>
        </div>
    );
}
export default HomePage;