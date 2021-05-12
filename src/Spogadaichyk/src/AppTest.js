import React from 'react';
import { Text, Router, Route } from '@urban-bot/core';

export function App(){
    return(
        <Router>
            <Route path="/start">
                <Text>Hello! Use command /create_birthday to create user or /delete_birthday to delete user</Text>
            </Route>
        </Router>
    )
}
