import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import "./nav.css";
import { GiThorHammer } from "react-icons/gi";
import { GrContactInfo } from "react-icons/gr";
import { FaLinkedin, FaGithub, FaAddressCard } from "react-icons/fa";
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
                        startIcon={<FaAddressCard />}
                        className="navBtn"
                    >
                        Contact
                    </Button>
                </Link>
            </ButtonGroup>

            <a
                href="https://www.linkedin.com/in/andrew-morrow-65a37b1a9/"
                target="_blank"
                style={{
                    marginLeft: "auto",
                    marginRight: "10px",
                    color: "whitesmoke",
                }}
            >
                <FaLinkedin />
            </a>
            <a
                href="https://github.com/AndrewMorrow"
                target="_blank"
                style={{ marginRight: "1rem", color: "whitesmoke" }}
            >
                <FaGithub />
            </a>
        </nav>
    );
};

export default Navigation;
