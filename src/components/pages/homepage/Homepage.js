import React from "react";
import { Container, Box, Button, Fab } from "@material-ui/core";
import "./homepage.css";
import ContactMailIcon from "@material-ui/icons/ContactMail";

const Homepage = () => {
    return (
        <main className="mainContainer">
            <Container>
                <div>Content</div>
            </Container>
            <Fab className="contactFab">
                <ContactMailIcon />
            </Fab>
        </main>
    );
};

export default Homepage;
