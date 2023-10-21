import spinner from '../../assets/spinner.gif';
import './Spinner.css';

const Spinner = () => {
    return (
        <div> 
            <img src={spinner} alt='spinner' className='spinner-img'/>
        </div>
    );
}

export default Spinner;