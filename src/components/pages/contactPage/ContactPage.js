import React from "react";
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    CardHeader,
    Avatar,
} from "@material-ui/core";
import "./contact.css";
import { FaLinkedin, FaGithub, FaAddressCard } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";
import avatarPic from "../../../assets/images/profileRoundFinal.png";

const ContactPage = () => {
    return (
        <main className="mainCont">
            <Card variant="outlined" className="contactCard">
                <CardContent>
                    <Typography variant="h5" className="cardHeader">
                        Contact Information
                    </Typography>
                    <CardHeader
                        avatar={<Avatar alt="Andrew Morrow" src={avatarPic} />}
                        className="cardHeader"
                        title="Feel free to contact me!"
                        subheader="Andrew Morrow"
                    />

                    <Typography className="contactItems">
                        <FaGithub style={{ marginRight: "4px" }} />
                        Github:
                        <a
                            style={{ marginLeft: "4px" }}
                            href="https://github.com/AndrewMorrow"
                            target="_blank"
                        >
                            https://github.com/AndrewMorrow <FiExternalLink />
                        </a>
                    </Typography>
                    <Typography className="contactItems">
                        <FaLinkedin style={{ marginRight: "4px" }} />
                        Linkedin:
                        <a
                            style={{ marginLeft: "4px" }}
                            href="www.linkedin.com/in/andrew-s-morrow"
                            target="_blank"
                        >
                            www.linkedin.com/in/andrew-s-morrow{" "}
                            <FiExternalLink />
                        </a>
                    </Typography>
                    <Typography className="contactItems">
                        <AiTwotoneMail style={{ marginRight: "4px" }} />
                        Email:
                        <a
                            style={{ marginLeft: "4px" }}
                            href="mailto:beardedmongo@gmail.com"
                        >
                            beardedmongo@gmail.com
                        </a>
                    </Typography>
                </CardContent>
            </Card>
        </main>
    );
};

export default ContactPage;
