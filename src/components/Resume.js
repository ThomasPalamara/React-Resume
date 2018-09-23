import React from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import Skills from "./Skills";
import Projects from "./Projects";

const Resume = (props) => (
    <div>
        <Header />
        <Introduction />
        <Skills />
        <Projects />
    </div>
);

export default Resume;