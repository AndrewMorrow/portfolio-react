import React from "react";
import {
    Container,
    Box,
    Button,
    Fab,
    Typography,
    Grid,
} from "@material-ui/core";
import "./homepage.css";
import RoundPic from "../../../assets/images/profileRoundFinal.png";

const Homepage = () => {
    return (
        <main className="mainContainer">
            <Container className="muiContainer">
                <Typography variant="h4" className="headingText">
                    Andrew Morrow
                </Typography>
                <Typography variant="h4" className="headingText">
                    Web Developer
                </Typography>
                <div className="centered mt-sm">
                    <img src={RoundPic} alt="" style={{ height: "70px" }} />
                </div>
                <Grid container justify="center">
                    <Grid item md={8} sm={10} xs={12}>
                        <article>
                            <p className="centered bioStyle">
                                Web developer looking to leverage development
                                skills gained through a certificate in full
                                stack web development from University of Central
                                Florida. Experiences with a vast array of
                                technologies diversifies my expertise
                                encompassing back-end and end-user experience.
                                Highly motivated to build life changing apps
                                with a mission-driven company by fulfilling a
                                need or solving a problem. I want to see your
                                project come to life by bring my unique
                                experiences to work collaboratively with
                                companies or clients. Do you have something to
                                build?
                            </p>
                        </article>
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
};

export default Homepage;
