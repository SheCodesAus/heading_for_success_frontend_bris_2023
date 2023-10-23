import React, { useEffect, useState } from 'react';

const Count = (props) => {
    const { number, duration, increment } = props;


    const [count, setCount] = useState('0');
    
    useEffect(() => {
        let start = 0;
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
            
            if ((start === end) || (start > end)) {
                start = end;
                clearInterval(timer);
            }
            
            setCount(String(start));

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