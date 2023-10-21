import "./HomePage.css";
import HeroLogo from '../../components/HeroLogo/HeroLogo';
import homeCartoon from '../../Images/HomePage-1-Cartoon.svg'
import { Link } from "react-router-dom";

//react functions go here

function HomePage() {
    return (
        <div className="homepage-container">
            {/* <h1> My homepage</h1> */}
            <div class="mainThings">
                <HeroLogo /> 
                <Link to='/programOpen'>
                    <div class="applyBox"><p>Browse open programs</p></div>
                </Link>
            </div>
            <img src={homeCartoon} class="homeCartoon"></img>
        </div>
    );
}


export default HomePage;