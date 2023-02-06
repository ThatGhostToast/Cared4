import React from "react";
import NavBar from "../Components/Navbars/NavBar";
import ProbableResults from "../Components/Diagnosis/ProbableResults";
import PossibleResults from "../Components/Diagnosis/PossibleResults";

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