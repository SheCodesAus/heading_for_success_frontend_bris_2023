import { useState, useEffect } from 'react';
import { getOpenPrograms} from '../api/get-open-programs';

export function useOpenProgram() {
    const [program, setProgram] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        getOpenPrograms()
            .then((program) => {
                setProgram(program);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []);
    return { program, isLoading, error, setProgram };
}
