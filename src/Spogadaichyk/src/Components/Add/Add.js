import { Text, useText, useBotContext } from '@urban-bot/core';
import React from 'react';
import { useState } from 'react';
import { createUser } from '../mongodb/botController';

function Add() {
    const [answer, setAnswer] = useState('Input your birthday data in format dd-mm-yyyy');
    const { chat } = useBotContext();

    const chatId = chat.id;
    const userId = chat.username;
    const name = chat.firstName

    const isValidDate = (dateString) => {
        try {
            const date = dateString.split('-');
            const day = parseInt(date[0]);
            const month = parseInt(date[1]);
            let isValid = false;
            if (day > 0 && day < 32 && month > 0 && month < 13) {
                isValid = true;
                return isValid;
            }else {
                return isValid;
            }

        } catch (error) {
            return false;
        }
    };

    const getCurrentDate = () => {
        const date = new Date()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let year = date.getFullYear()
        if (month.toString().length === 1) {
            month = '0' + month
        }
        if (day.toString().length === 1) {
            day = '0' + day
        }
        return `${day}-${month}`
    }

    useText(async ({ text }) => {
        // setAnswer(text);
        const textIsValid = isValidDate(text);
        if (textIsValid) {
            const data = await createUser({
                userId,
                name: name,
                birthdayDate: text,
                chatId
            })
            setAnswer(data.message)
            const currentDate = await getCurrentDate()
            if (text.slice(0,5) ===currentDate){
                try {
                    setAnswer(`Сегодня др у ${name}, @${userId}, поздравляем`)
                } catch (error) {
                    console.log(error)
                }
            }
        } else {
            setAnswer('There is an error in your data. \n Please check your data format (dd-mm-yyyy)')
        }
    });

    return (
        <Text>
            {answer}
        </Text>
    );
}

export default Add;
