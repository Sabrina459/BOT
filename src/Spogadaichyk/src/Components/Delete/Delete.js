import { Text, useText, useBotContext } from '@urban-bot/core';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { deleteUser } from '../mongodb/botController';

function Delete() {
    const [answer, setAnswer] = useState('Deleting user...');
    const { chat } = useBotContext();

    console.log(chat);
    const chatId = chat.id;
    const userId = chat.username;
    const name = chat.firstName

    useEffect(()=>{
        deleteUser(userId).then(()=>setAnswer("Delete successfully"))
    },[])

    return (
        <Text>
            {answer}
        </Text>
    );
}


export default Delete;