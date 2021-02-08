import React from "react";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { Fab } from "@material-ui/core";

const Footer = () => {
    return (
        <Fab className="contactFab">
            <ContactMailIcon />
        </Fab>
    );
};

export default Footer;
