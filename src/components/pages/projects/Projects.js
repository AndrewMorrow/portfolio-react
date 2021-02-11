import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import { Container, Grid } from "@material-ui/core";
import "./projects.css";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    const getData = async () => {
        const res = await fetch("db.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const data = await res.json();
        setProjects(data);
        // console.log(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Grid
            container
            justify="center"
            alignContent="center"
            alignItems="center"
            className="container"
        >
            {projects &&
                projects.length > 0 &&
                projects.map((project) => (
                    <Grid
                        item
                        key={project.id}
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        style={{ marginBottom: "2rem" }}
                    >
                        <ProjectItem project={project} />
                    </Grid>
                ))}
        </Grid>
    );
};

export default Projects;
