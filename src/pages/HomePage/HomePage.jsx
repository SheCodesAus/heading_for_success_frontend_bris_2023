import "./HomePage.css";
import HeroLogo from '../../components/HeroLogo/HeroLogo';
//react functions go here

function HomePage() {
    return (
        <div className="homepage-container">
            <h1> My homepage</h1>
            <p>this is my homepage</p>
            <HeroLogo />
            {/* {console.log("hello world")} */}
        </div>
    );
}


export default HomePage;