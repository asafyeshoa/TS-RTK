import React from 'react';
import {GlobalStyle} from './compnents/Home.styles'
import HomePage from "./compnents/HomePage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AnswerPage from "./compnents/AnswerPage";

const App: React.FC = () => {


    return (
        <>
            <GlobalStyle/>
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/answersPage" exact component={AnswerPage} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
