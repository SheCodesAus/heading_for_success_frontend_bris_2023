import { useState, useEffect } from "react";

import getProgram from "../api/get-program";

export default function useProgram(programId) {
  const [program, setProgram] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // Here we pass the programId to the getProgram function
    getProgram(programId) 
    .then((program) => {
      setProgram(program);
      setIsLoading(false);
    })
    .catch((error) => {
      setError(error);
      setIsLoading(false);
    });

    // This time we pass the programId to the dependency array so that the hook
    //  will re-run if the programId changes
  }, [programId]);
  
  return [ program, isLoading, error ];
}