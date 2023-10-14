import "./HeroLogo.css"
import heroLogo from '../../Images/PurpleLogo.png'
// Test

const HeroLogo = () =>{
    return(
        <div>
            <h1> My Hero Logo</h1>
            <img src={heroLogo} alt='Hero Cupcake Logo'></img>
        </div> );

}

export default HeroLogo