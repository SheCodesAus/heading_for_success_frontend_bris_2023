
import "./HomePage.css";
import HeroLogo from '../../components/HeroLogo/HeroLogo';
import homeCartoon from '../../Images/HomePage-1-Cartoon.svg'
import { Link } from "react-router-dom";
import UpdatedCartoon from '../../Images/UpdatedCartoon.svg'
import Header from '../../components/Header/header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import OpenProgramsList from "../../components/OpenProgramsList/OpenProgamsList";


function HomePage() {
    return (
        <div className="homepage-container">
            <OpenProgramsList />
            <Header />
            <img src={UpdatedCartoon} class="homeCartoon"></img>
            <Footer/>
        </div>
    );
}
export default HomePage;