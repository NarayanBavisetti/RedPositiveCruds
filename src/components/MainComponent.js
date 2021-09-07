import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Add from './Add'
import Display from './Display'
import Edit from './Edit'
export default function MainComponent() {
    return (
<Router>
    <Route exact path="/" component={Display} />
    <Route exact path="/add" component={Add} />
    <Route exact path="/edit/:id" component={Edit} />
</Router>
    )
}
