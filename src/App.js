import "./App.css";
import Homepage from "./components/pages/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Route exact path="/">
                    <Homepage />
                </Route>
            </Router>
        </div>
    );
}

export default App;
