import React from 'react';
import { Text, Router, Route } from '@urban-bot/core';
// import fs from 'fs';
// import { Route, Router, Text, ButtonGroup, Button, useText, Image } from '@urban-bot/core';
// import logo from './assets/logo.png';
import Add from './Components/Add/Add';
import Delete from './Components/Delete/Delete';

export function App(){

    return(
        <Router>
            <Route path="/start">
                <Text>Hello! Use command /create_birthday to create user or /delete_birthday to delete user</Text>
            </Route>
            <Route path="/create_birthday">
                <Add />
            </Route>
            <Route path="/delete_birthday">
                <Delete />
            </Route>
        </Router>
    )
}
