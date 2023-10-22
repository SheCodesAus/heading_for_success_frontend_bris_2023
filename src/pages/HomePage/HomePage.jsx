import "../../main.css"
import "./HomePage.css";
import HeroLogo from '../../components/HeroLogo/HeroLogo';
import UpdatedCartoon from '../../Images/UpdatedCartoon.svg'
import { Link } from "react-router-dom";
import Header from '../../components/Header/header.jsx';
import  Footer  from '../../components/Footer/Footer.jsx';
//react functions go here

function HomePage() {
    return (
        <div className="homepage-container">
            <Header/>
            {/* <h1> My homepage</h1> */}
            {/* <div class="mainThings">
                <HeroLogo /> 
                <Link to='/programOpen'>
                    <div class="applyBox"><p>Browse open programs</p></div>
                </Link>
            </div> */}
            <img src={UpdatedCartoon} class="homeCartoon"></img>
            <Footer/>
        </div>
    );
}
export default HomePage;