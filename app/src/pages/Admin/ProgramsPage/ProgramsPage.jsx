import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import usePrograms from "../../../hooks/use-program";
import useMyPrograms from "../../../hooks/use-myprograms";
import useAuth from "../../../hooks/use-auth";
import ProgramCard from "../../../components/ProgramCard";
//import "./ProgramsPage.css"

function ProgramsPage() {
    const { programs, isLoading, error } = usePrograms();
   // const { auth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation(); // Add this line to access location
    const searchParams = new URLSearchParams(location.search).get("programs")
    const [myPrograms, myProgramsAreLoading, myProgramsError] = useMyPrograms();

    useEffect(() => {
    if (searchParams=="our-programs" && !auth.token) {
        navigate(`/programs/`);
    }
    }, []);

    if (isLoading || myProgramsAreLoading) {
    return <p>Loading...</p>;
    }

    if (error) {
    return <p>{error.message}</p>;
    }

    if (myProgramsError) {
    return <p>{myProgramsError.message}</p>;
    }

    if (searchParams=="our-programs" && auth.token) {
    return (
        <main>
        <article id="our-programs" className={myPrograms.length !== 0 ? "" : "hidden"}>
        <h2>My Causes</h2>
        <section id="program-list" >
            {myPrograms.sort((a, b) => (b.id > a.id ? 1 : -1)).map((programData, key) => {
            return <ProgramCard key={key} programData={programData} />;
            })}
        </section>
        <section className="desktop-inline-buttons">
            <Link to="/new-program" className="button centre-block-object">
            CREATE NEW PROGRAM
            </Link>
            <Link to="/programs" className="button centre-block-object">
            VIEW ALL PROGRAMS
            </Link>
        </section>
        </article>
        </main>
    );
    }
    return (
    <article id="all-programs">
        <section className="desktop-inline-buttons">
        {auth.token ? (
        <Link to="/new-program" className="button centre-block-object">
            CREATE NEW PROGRAM
        </Link>
        ) : (
        ""
        )}
        </section>
        <section id="program-list">
        {programs.sort((a, b) => (b.id > a.id ? 1 : -1)).map((programData, key) => {
            return <ProgramCard key={key} programData={programData} />;
        })}
        </section>
    </article>
    );
}

export default ProgramsPage;
