import React from "react";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { Fab } from "@material-ui/core";

const Footer = () => {
    return (
        <a href="mailto:beardedmongo@gmail.com">
            <Fab className="contactFab" size="large">
                <ContactMailIcon fontSize="default" />
            </Fab>
        </a>
    );
};

export default Footer;
