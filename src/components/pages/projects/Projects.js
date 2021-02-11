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
        <div>
            <Container>
                <Grid container direction="row" spacing={6}>
                    {projects &&
                        projects.length > 0 &&
                        projects.map((project) => (
                            <Grid
                                container
                                item
                                zeroMinWidhth
                                xs={12}
                                sm={12}
                                md={6}
                                lg={6}
                                justify="center"
                                alignItems="center"
                                alignContent="center"
                            >
                                <ProjectItem
                                    key={project.id}
                                    project={project}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Projects;
