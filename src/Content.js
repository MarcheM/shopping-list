import React from 'react';
import { Switch, Route } from 'react-router-dom'
import ShoppingList from './components/organism/ShoppingList';


const Content = () => {
    return <Switch>
        <Route exact path='/' component={ShoppingList} />
    </Switch>
}

export default Content
