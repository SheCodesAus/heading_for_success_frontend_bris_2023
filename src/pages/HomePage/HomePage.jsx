
import "./HomePage.css";
import HeroLogo from '../../components/HeroLogo/HeroLogo';
// import homeCartoon from '../../Images/HomePage-1-Cartoon.svg'
import { Link } from "react-router-dom";
import UpdatedCartoon from '../../Images/UpdatedCartoon.svg'
import Header from '../../components/Header/header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import OpenProgramsList from "../../components/OpenProgramsList/OpenProgamsList";


function HomePage() {
    return (
        <div className="homepage-container">
            <div className="program-list-container">
                <OpenProgramsList />
            </div>
            <Header />
            <img src="src/assets/Humaaans - Standing (3).svg"  class="homeCartoon"></img>
            <Footer/>
        </div>
    );
}
export default HomePage;