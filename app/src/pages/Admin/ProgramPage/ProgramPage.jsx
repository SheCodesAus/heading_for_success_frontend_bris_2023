import { Link, useParams } from "react-router-dom";
import useProgram from "../../../hooks/use-program";
import useAuth from "../../../hooks/use-auth";
import useMyPrograms from "../../../hooks/use-myprograms";
//import isMyProgram from "../../../components/functions/isMyProgram";
//import "./ProgramPage.css";
//import "../../main.css";
import { useState } from "react";

function ProgramPage() {
    const { auth } = useAuth();
    const { id } = useParams();
    const [program, isLoading, error] = useProgram(id);
    const [myPrograms, myProgramsAreLoading, myProgramsError] = useMyPrograms();
    const [viewAll, setViewAll] = useState(false);

    if (isLoading || myProgramsAreLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    if (myProgramsError) {
        return <p>{myProgramsError.message}</p>;
    }

    const dateCreated = new Date(program.date_created).toLocaleDateString();
    const updateLink = `/update/program/${program.id}`;

    return (
        <div className="program-page">
            <h2>{program.title}</h2>
            <section className="first-colummn">
                <img
                    className="program-image centre-block-object"
                    src={program.image}
                />
            </section>
            <Link
                to={updateLink}
                id="update-link"
                className={
                    auth.token && isMyProgram(myPrograms, program.id)
                        ? "update-link button"
                        : "hidden"
                }>
                UPDATE PROJECT
            </Link>
            <article className="program-blurb">
                <small className="program-owner">by {program.owner}</small>
                <main id="program-description">
                    <p>{program.description}</p>
                </main>
                <small className="small status">
                    Status: {`${program.is_open ? "Open" : "Closed"}`}
                </small>
                <small className="small created">Created at: {dateCreated}</small>
            </article>
        </div>
    );
}

export default ProgramPage;
