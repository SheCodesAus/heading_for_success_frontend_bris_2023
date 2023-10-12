import { useState, useEffect } from "react";
// import { useContext } from "react";
// import useAuth from "./use-auth";

import getMyProjects from "../api/get-programs";

export default function useMyProjects() {
  // const { auth } = useAuth();
  const [programs, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getMyProjects()
    .then((programs) => {
      setProjects(programs);
      setIsLoading(false);
    })
    .catch((error) => {
      setError(error);
      setIsLoading(false);
    });
  }, []);

  return [programs, isLoading, error ];
} 