import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Time from "./Time";
import Summary from "./Summary";
import Success from "./Success";

function RoutesPages() {
    return(
        <Router>
            <Routes>
                <Route  path="/" element={ <Home /> }/>
                <Route  path="/time" element={ <Time /> }/>
                <Route  path="/summary" element={ <Summary /> }/>
                <Route  path="/success" element={ <Success /> }/>
            </Routes>

        </Router>
    )
}


export default RoutesPages;