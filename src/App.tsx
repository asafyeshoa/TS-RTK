import React from 'react';
import {GlobalStyle} from './style/Home.styles'
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AnswerPage from "./pages/AnswerPage";
import {Routes} from "./constants/Routes";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <GlobalStyle/>
            <Router>
                <Switch>
                    <Route path={Routes.home} exact component={HomePage} />
                    <Route path={Routes.answersPage} exact component={AnswerPage} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default App;
