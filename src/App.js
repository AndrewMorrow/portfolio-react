import "./App.css";
import Homepage from "./components/pages/homepage/Homepage";
import Contact from "./components/pages/contactPage/ContactPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";
import Navigation from "./components/layout/nav/Navigation";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function App() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? "dark" : "light",
                },
            }),
        [prefersDarkMode]
    );
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Router>
                        <Navigation />
                        <Switch>
                            <Route exact path="/">
                                <Homepage />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                        </Switch>
                    </Router>
                    <Footer />
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}

export default App;
