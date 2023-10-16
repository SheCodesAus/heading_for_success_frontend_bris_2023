import "./HomePage.css";
import HeroLogo from '../../components/HeroLogo/HeroLogo';
import homeCartoon from '../../Images/HomePage-1-Cartoon.svg'

//react functions go here

function HomePage() {
    return (
        <div className="homepage-container">
            {/* <h1> My homepage</h1> */}
            <div class="mainThings">
                <HeroLogo /> 
                <div class="applyBox"><p>Apply</p></div>
            </div>
            <img src={homeCartoon} class="homeCartoon"></img>
        </div>
    );
}


export default HomePage;