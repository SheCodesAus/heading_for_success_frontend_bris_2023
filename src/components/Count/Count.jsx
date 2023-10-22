import './Count.css';
import React, { useEffect, useState } from 'react';

const Count = (props) => {
    // console.log(props);
    // console.log(props.number, props.duration)
    const { number, duration, increment } = props;
    // console.log(number, duration);
    // const number = props.number;
    // const duration = props.duration;

    const [count, setCount] = useState('0');
    
    useEffect(() => {
        let start = 0;
        // first three numbers from props
        // const end = parseInt(number.substring(0,3))
        const end = parseInt(number);
        // if zero, return
        if (start === end) return;
    
        // find duration per increment
        let totalMilSecDur = parseInt(duration);
        let incrementTime = (totalMilSecDur / end) * 1000;
    
        // timer increments start counter 
        // then updates count
        // ends if start reaches end
        let timer = setInterval(() => {
            start += parseInt(increment);
            // setCount(String(start) + parseInt(number).substring(3))
            setCount(String(start));
            if (start === end) {
                clearInterval(timer);
            }
        }, incrementTime);

        // dependency array
      }, [number, duration]);

    return (
        <div className='scholarship-statistics-group-number'>
            <h3> 
                <i>{count}</i>
            </h3>
        </div>
    );
}

export default Count;