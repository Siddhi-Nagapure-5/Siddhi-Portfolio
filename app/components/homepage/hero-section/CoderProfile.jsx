import React from "react";
import "./CoderProfile.css";

const CoderProfile = () => {
    const coder = {
        name: "Siddhi Nagapure",
        skills: ["React", "NextJS", "Redux", "Express", "NestJS", "MySQL", "MongoDB", "Docker", "AWS"],
        hardWorker: true,
        quickLearner: true,
        problemSolver: true,
        hireable: function () {
            return this.hardWorker && this.problemSolver && this.skills.length >= 5;
        },
    };

    return (
        <div className="coder-profile">
            <h1 id="handle"><b><span className="text-pink-500  uppercase">{coder.name}</span></b></h1>
            <div className="coder-section">
                <span>Skills:</span>
                 <span className="label">{" { "}</span>
                <span className="text-green-500">{coder.skills.join(", ")}</span>
                <span className="label">{" }"}</span>
            </div>
            <div className="coder-section">
                <span className="label">Hard Worker:</span>
                <span className="text-white-500"> <span className="label">{" { "}</span>{coder.hardWorker ? "Yes" : "No"}</span> <span className="label">{" }"}</span>
            </div>
            <div className="coder-section">
                <span>Quick Learner:</span>
                <span className="label">{" { "}</span>
                <span className="text-green-500">{coder.quickLearner ? "Yes" : "No"}</span><span className="label">{" }"}</span>
            </div>
            <div className="coder-section">
                <span className="label">Problem Solver:</span>
                <span className="label">{" { "}</span>
                <span>{coder.problemSolver ? "Yes" : "No"}</span><span className="label">{" }"}</span>
            </div>
            <div className="coder-section">
                <span>Hireable:</span>
                <span className="label">{" { "}</span>
                <span className="text-green-500">{coder.hireable() ? "Yes" : "No"}</span><span className="label">{" }"}</span>
            </div>
        </div>
    );
};

export default CoderProfile;
