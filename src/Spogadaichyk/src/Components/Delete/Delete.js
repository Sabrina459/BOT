import { Text, useText, useBotContext } from '@urban-bot/core';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { deleteUser } from '../mongodb/botController';
import { useRouter } from '@urban-bot/core';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
function Delete() {
    const { navigate } = useRouter();
    const [answer, setAnswer] = useState('Deleting user...');
    const { chat } = useBotContext();

    console.log(chat);
    const chatId = chat.id;
    const userId = chat.username;
    const name = chat.firstName

    useEffect(()=>{
        deleteUser(userId).then(({message})=>{
            setAnswer(message)
            navigate('/start')
        })

    },[])

    return (
        <Text>
            {answer}
        </Text>

    );
}

export default Delete;
