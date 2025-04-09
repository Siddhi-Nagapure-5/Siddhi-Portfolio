import React from "react";
import "./CodeStyleProfile.css";

const CodeStyleProfile = () => {
    const coderProfile = {
        name: "Sanika Chavan",
        skills: ["React", "NextJS", "Redux", "Express", "NestJS", "MySQL", "MongoDB", "Docker", "AWS"],
        hardWorker: true,
        quickLearner: true,
        problemSolver: true,
        hireable: function () {
            return this.hardWorker && this.problemSolver && this.skills.length >= 5;
        },
    };

    return (
        <div className="code-style-profile">
            <pre>
                {`
                name: Siddhi Nagapure,
                hardWorker:true,

`}
            </pre>
        </div>
    );
};

export default CodeStyleProfile;
