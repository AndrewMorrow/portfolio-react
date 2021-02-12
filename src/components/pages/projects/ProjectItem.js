import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Container } from "@material-ui/core";
import {
    FaGithub,
    FaExternalLinkSquareAlt,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaReact,
} from "react-icons/fa";
import { SiMysql, SiJavascript } from "react-icons/si";
import { DiMaterializecss, DiMongodb } from "react-icons/di";
import { Icon, InlineIcon } from "@iconify/react";
import handlebarsIcon from "@iconify-icons/logos/handlebars";
import expressIcon from "@iconify-icons/logos/express";
import sequelizeIcon from "@iconify-icons/logos/sequelize";
import lodashIcon from "@iconify-icons/logos/lodash";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 350,
        maxHeight: "100%",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
}));

const imageAssets = require.context("../../../assets/images", true, /.png$/);

const ProjectItem = ({ project }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [techIcons, setTechIcons] = useState([]);
    const {
        name,
        description,
        technologies,
        image,
        subtitle,
        repo,
        deploy,
    } = project;

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const checkIcons = () => {
        technologies.map((tech) => {
            switch (tech) {
                case "html":
                    return setTechIcons((state) => [
                        ...state,
                        <FaHtml5
                            style={{ marginLeft: "1rem", marginBottom: "1rem" }}
                            size={30}
                        />,
                    ]);
                case "css":
                    return setTechIcons((state) => [
                        ...state,
                        <FaCss3Alt
                            style={{ marginLeft: "1rem", marginBottom: "1rem" }}
                            size={30}
                        />,
                    ]);
                case "javascript":
                    return setTechIcons((state) => [
                        ...state,
                        <SiJavascript
                            style={{ marginLeft: "1rem", marginBottom: "1rem" }}
                            size={30}
                        />,
                    ]);
                case "react":
                    return setTechIcons((state) => [
                        ...state,
                        <FaReact
                            style={{ marginLeft: "1rem", marginBottom: "1rem" }}
                            size={30}
                        />,
                    ]);
                case "materialize":
                    return setTechIcons((state) => [
                        ...state,
                        <DiMaterializecss
                            style={{ marginLeft: "1rem", marginBottom: "1rem" }}
                            size={40}
                        />,
                    ]);
                case "node":
                    return setTechIcons((state) => [
                        ...state,
                        <FaNodeJs
                            style={{ marginLeft: "1rem", marginBottom: "1rem" }}
                            size={30}
                        />,
                    ]);
                case "express":
                    return setTechIcons((state) => [
                        ...state,
                        <Icon
                            icon={expressIcon}
                            style={{ marginLeft: "1rem", marginBottom: "1rem" }}
                        />,
                    ]);
                case "mysql":
                    return setTechIcons((state) => [
                        ...state,
                        <SiMysql
                            style={{ marginLeft: "1rem", marginBottom: "1rem" }}
                            size={30}
                        />,
                    ]);
                case "sequelize":
                    return setTechIcons((state) => [
                        ...state,
                        <Icon
                            icon={sequelizeIcon}
                            style={{ marginLeft: "1rem", marginBottom: "1rem" }}
                            height="25px"
                        />,
                    ]);
                case "mongodb":
                    return setTechIcons((state) => [
                        ...state,
                        <DiMongodb
                            style={{ marginLeft: "1rem", marginBottom: "1rem" }}
                            size={30}
                        />,
                    ]);
                case "handlebars":
                    return setTechIcons((state) => [
                        ...state,
                        <Icon
                            style={{ marginLeft: "1rem", marginBottom: "1rem" }}
                            icon={handlebarsIcon}
                            height="10px"
                        />,
                    ]);
                case "lodash":
                    return setTechIcons((state) => [
                        ...state,
                        <Icon
                            style={{ marginLeft: "1rem", marginBottom: "1rem" }}
                            icon={lodashIcon}
                            height="25px"
                        />,
                    ]);
                default:
                    return;
            }
        });
    };

    useEffect(() => {
        checkIcons();
    }, []);

    return (
        <Card raised className={classes.root}>
            <CardHeader title={name} subheader={subtitle} />
            <CardMedia
                className={classes.media}
                image={imageAssets(image).default}
                title="Merriment Quest"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <a href={repo} target="_blank">
                    <IconButton aria-label="add to favorites">
                        <FaGithub />
                    </IconButton>
                </a>
                <a href={deploy} target="_blank">
                    <IconButton aria-label="share">
                        <FaExternalLinkSquareAlt />
                    </IconButton>
                </a>

                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Technologies:</Typography>
                    {techIcons && techIcons.map((icon) => icon)}
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default ProjectItem;
