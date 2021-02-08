import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import "./nav.css";
import { GiThorHammer } from "react-icons/gi";
import { GrContactInfo } from "react-icons/gr";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ButtonGroup
                orientation="horizontal"
                color="primary"
                aria-label="vertical text button group"
                variant="outlined"
                className="buttonGroup"
            >
                <Link to="/projects" className="navBtn">
                    <Button
                        variant="outlined"
                        startIcon={<GiThorHammer />}
                        className="navBtn"
                    >
                        Projects
                    </Button>
                </Link>
                <Link to="/contact" className="navBtn">
                    <Button
                        variant="outlined"
                        startIcon={<GrContactInfo />}
                        className="navBtn"
                    >
                        Contact
                    </Button>
                </Link>
            </ButtonGroup>

            <FaLinkedin style={{ marginLeft: "auto", marginRight: "10px" }} />
            <FaGithub style={{ marginRight: "1rem" }} />
        </nav>
    );
};

export default Navigation;
