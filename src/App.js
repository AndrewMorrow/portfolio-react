import "./App.css";
import Homepage from "./components/pages/homepage/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
