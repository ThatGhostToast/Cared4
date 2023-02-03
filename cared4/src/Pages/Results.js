import React from "react";
import NavBar from "../Components/NavBar";
import ProbableResults from "../Components/ProbableResults";
import PossibleResults from "../Components/PossibleResults";

const Results = () => {
    return (
        <div>
            <section className="section">
                <NavBar />
            </section>
            <section className="section">
                <ProbableResults />
            </section>
            <section className="section">
                <PossibleResults />
            </section>
        </div>
    );
};

export default Results;