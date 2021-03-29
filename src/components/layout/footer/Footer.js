import React from "react";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { Fab, Tooltip } from "@material-ui/core";
import resume from "../../../assets/files/Andrew_Morrow_Resume-2021.pdf";
import DescriptionIcon from "@material-ui/icons/Description";

const Footer = () => {
    return (
        <footer>
            <a href="mailto:beardedmongo@gmail.com">
                <Tooltip placement="left" title="Contact Me">
                    <Fab size="small" className="contactFab">
                        <ContactMailIcon fontSize="default" />
                    </Fab>
                </Tooltip>
            </a>
            <a href={resume} target="_blank">
                <Tooltip placement="left" title="View Resume">
                    <Fab size="small" className="resumeFab">
                        <DescriptionIcon fontSize="default" />
                    </Fab>
                </Tooltip>
            </a>
        </footer>
    );
};

export default Footer;
