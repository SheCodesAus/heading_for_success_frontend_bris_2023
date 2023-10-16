import { useState, useEffect } from 'react'
import {getProgram} from '../api/get-open-programs'

export function useProgram() {
    const [program, setProgram] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    
    useEffect(() => {
        getProgram()
            .then((program) => {
                setProgram(program);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []);
    return {program, isLoading, error, setProgram};
}
