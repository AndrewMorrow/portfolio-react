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
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Tooltip,
} from "@material-ui/core";
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
import "./projectItem.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 350,
        maxHeight: "100%",
    },
    media: {
        height: "100%",
        // paddingTop: "56.25%", // 16:9
        paddingTop: "49%", // 16:9
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
    iconBox: {
        display: "inline-block",
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
                        {
                            icon: <FaHtml5 size={30} />,
                            name: "HTML",
                            url: "https://html.spec.whatwg.org/",
                        },
                    ]);
                case "css":
                    return setTechIcons((state) => [
                        ...state,
                        {
                            icon: <FaCss3Alt size={30} />,
                            name: "CSS",
                            url:
                                "https://www.w3.org/Style/CSS/Overview.en.html",
                        },
                    ]);
                case "javascript":
                    return setTechIcons((state) => [
                        ...state,
                        {
                            icon: <SiJavascript size={30} />,
                            name: "Javascript",
                            url:
                                "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                        },
                    ]);
                case "react":
                    return setTechIcons((state) => [
                        ...state,
                        {
                            icon: <FaReact size={30} />,
                            name: "React.js",
                            url: "https://reactjs.org/",
                        },
                    ]);
                case "materialize":
                    return setTechIcons((state) => [
                        ...state,
                        {
                            icon: <DiMaterializecss size={40} />,
                            name: "Materialize",
                            url: "https://materializecss.com/",
                        },
                    ]);
                case "node":
                    return setTechIcons((state) => [
                        ...state,
                        {
                            icon: <FaNodeJs size={30} />,
                            name: "Node.js",
                            url: "https://nodejs.org/en/",
                        },
                    ]);
                case "express":
                    return setTechIcons((state) => [
                        ...state,
                        {
                            icon: <Icon icon={expressIcon} />,
                            name: "Express.js",
                            url: "https://expressjs.com/",
                        },
                    ]);
                case "mysql":
                    return setTechIcons((state) => [
                        ...state,
                        {
                            icon: <SiMysql size={30} />,
                            name: "mySQL",
                            url: "https://www.mysql.com/",
                        },
                    ]);
                case "sequelize":
                    return setTechIcons((state) => [
                        ...state,
                        {
                            icon: <Icon icon={sequelizeIcon} height="25px" />,
                            name: "Sequelize",
                            url: "https://sequelize.org/",
                        },
                    ]);
                case "mongodb":
                    return setTechIcons((state) => [
                        ...state,
                        {
                            icon: <DiMongodb size={30} />,
                            name: "mongoDB",
                            url: "https://www.mongodb.com/",
                        },
                    ]);
                case "handlebars":
                    return setTechIcons((state) => [
                        ...state,
                        {
                            icon: <Icon icon={handlebarsIcon} height="10px" />,
                            name: "Handlebars",
                            url: "https://handlebarsjs.com/",
                        },
                    ]);
                case "lodash":
                    return setTechIcons((state) => [
                        ...state,
                        {
                            icon: <Icon icon={lodashIcon} height="25px" />,
                            name: "Lodash",
                            url: "https://lodash.com/",
                        },
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
            <a href={deploy} target="_blank">
                <CardMedia
                    className={classes.media}
                    image={imageAssets(image).default}
                    title={name}
                />
            </a>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Tooltip placement="bottom" title="Github Repo">
                    <a href={repo} target="_blank">
                        <IconButton aria-label="add to favorites">
                            <FaGithub />
                        </IconButton>
                    </a>
                </Tooltip>
                <Tooltip placement="right" title="Deployed Link">
                    <a href={deploy} target="_blank">
                        <IconButton aria-label="share">
                            <FaExternalLinkSquareAlt />
                        </IconButton>
                    </a>
                </Tooltip>

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
                <CardContent className="iconContainer">
                    <Typography
                        align="center"
                        style={{
                            textDecoration: "underline",
                            marginBottom: "4px",
                        }}
                    >
                        Technologies
                    </Typography>
                    <Typography align="center" style={{ marginBottom: "1rem" }}>
                        Click any icon to find out more!
                    </Typography>
                    {techIcons &&
                        techIcons.map((icon) => (
                            <Box className={classes.iconBox}>
                                <Tooltip
                                    placement="top"
                                    arrow
                                    title={icon.name}
                                    style={{ marginBottom: "1rem" }}
                                >
                                    <Button href={icon.url} target="_blank">
                                        {icon.icon}
                                    </Button>
                                </Tooltip>
                            </Box>
                        ))}
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default ProjectItem;
