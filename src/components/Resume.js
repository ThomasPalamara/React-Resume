import React from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import Skills from "./Skills";
import Projects from "./Projects";
import Language from "./Language";
import { ResumeContext, resume } from 'context/Resume';

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'en'
        };
    }

    languageHandler(language){
        this.setState({ language })
    }

    render() {
        return (
            <ResumeContext.Provider value={resume[this.state.language]} className="App">
                <Language languageHandler={this.languageHandler}/>
                <Header />
                <Introduction />
                <Skills />
                <Projects />
            </ResumeContext.Provider>
        )
    }
};

export default Resume;