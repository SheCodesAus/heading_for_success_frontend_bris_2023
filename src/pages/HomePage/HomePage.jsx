// import "../../main.css"
import "./HomePage.css";
import UpdatedCartoon from '../../Images/UpdatedCartoon.svg'
import Header from '../../components/Header/header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import OpenProgramsList from "../../components/OpenProgramsList/OpenProgamsList";
//react functions go here

function HomePage() {
    return (
        <div className="homepage-container">
            <Header />
            <div class="programs">
                <div class="column">
                <OpenProgramsList />
                </div>
                </div>
            <img src={UpdatedCartoon} class="homeCartoon"></img>
            <Footer/>
        </div>
    );
}
export default HomePage;