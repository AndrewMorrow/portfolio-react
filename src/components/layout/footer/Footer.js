import React from "react";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { Fab, Tooltip } from "@material-ui/core";

const Footer = () => {
    return (
        <a href="mailto:beardedmongo@gmail.com">
            <Tooltip placement="left" title="Contact Me">
                <Fab className="contactFab" size="large">
                    <ContactMailIcon fontSize="default" />
                </Fab>
            </Tooltip>
        </a>
    );
};

export default Footer;
