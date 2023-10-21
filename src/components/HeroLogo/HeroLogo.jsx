import "./HeroLogo.css"
import heroLogo from '../../Images/LogoSheCodes-2V2.svg'
// Test

const HeroLogo = () =>{
    return(
        <div>
            <img src={heroLogo} alt='Hero Cupcake Logo' class="center"></img>
        </div> );

}

export default HeroLogo