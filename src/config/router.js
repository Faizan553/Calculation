
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../container/index'
import Table from '../container/table'



class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Home}/>
                <Route exact path="/table" component={Table}/>
            </Router>
        )
    }
}
export default AppRouter

