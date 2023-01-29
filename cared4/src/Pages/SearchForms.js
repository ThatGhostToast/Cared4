import React from "react";
import NavBar from "../Components/NavBar";
import SBNForm from "../Components/SBNForm";
import SBSForm from "../Components/SBSForm";

const SearchForms = () => {
    return (
        <div>
            <section className="section">
                <NavBar />
            </section>
            <section className="section">
                <div className="container is-max-desktop columns search-forms">
                    <div className="column">
                        <SBSForm />
                    </div>
                    <div className="column">
                        <SBNForm />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SearchForms;