import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import { Container, Grid } from "@material-ui/core";
import data from "../../../assets/db.json";

const Projects = () => {
    const [projects, setProjects] = useState(data);

    return (
        <div>
            <Container>
                <Grid container>
                    <Grid item>
                        {projects.map((project) => (
                            <ProjectItem key={project.id} item={project} />
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Projects;
