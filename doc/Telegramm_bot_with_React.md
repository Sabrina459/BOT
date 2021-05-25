# «Спогадайчик»
## **Мета проекту:** 
розробити бот-додаток для сповіщень на основі бібліотеки React.js. 
## **Проблематика проекту:**
  Для життя у сучасному суспільстві треба завжди підкорятися його ритму. Треба вміти планувати свій час, тримати у голові велику кількість задач та цілей на день, на тиждень, на рік тощо. Тому не дивно, що кожен з нас все частіше забуває про маленькі, але такі важливі дрібниці, без яких можна втратити багато важливих контактів, або які потім  можуть призвести до великих проблем.
  
  Основна проблема сучасної людини – ми забуваємо привітати наших друзів та колег з їх персональним святом – Днем народження. Але ж це так важливо, відчувати, що про тебе пам’ятають і хочуть розділити твою радість, нагадати, що ще один рік пройшов не даремно і приніс багато щастя.
  
  Саме це і є першою та основною задачею цього Боту. Бот буде додаватися до корпоративного чату (якщо такий є) або до персональних повідомлень, та завдяки інтеграції з календарем та зручному інтерфейсу, буде швидко налаштовуватися, щоб потім нагадувати вам про радісні події у вашому житті та житті ваших друзів, а також першим їх вітати.
  
  Також в боті можна буде налаштувати сповіщення про поточні задачі, розклад тощо. Це зробить його ще зручнішим для корпоративних чатів. А функція «замітки», які будуть створюватися та викликатися коротким реченням-заголовком зробить цього Бота дуже зручним та просто чарівним.
  
Отже, підіб'ємо список **початкових завдань** для створення Боту:
1.	Прописати початковий функціонал боту(може змінитися в процесі розробки)
2.	Продумати та розобити зручний інтерфейс для користувача
3.	Провести інтеграцію з календарем (реалізація на етапі обмірковування) 
4.	Розробити можливість додавання боту до корпоративих чатів з великою кількістю людей
5.	Перевірити Бот на наявнісь багів

![Lets go](https://media4.giphy.com/media/l0HlxJMw7rkPTN8sg/giphy.gif)
------------------------------------------------------------------------------------
## **Аналіз предметної області:**
  Зараз існують декілька видів програмного забезпечення, які допомагають уникнути вищеназваних проблем. В більшості це календарі з нагадуваннями, нотатки та інше. В своїй більшості ці програмні забезпечення існують у вигляді додатків на платформах Android та IOS. 
  
|Вимоги|Критерії                     |Birthdays|hip                                          |Напоминалка|
|------|-----------------------------|---------|---------------------------------------------|-----------|
|Functionality (функциональність)|Кількість можливих подій     |необмежено|необмежено                                   |необмежено |
|      |Нагадування (алерти) про сьогоднішні події|✓        |✓                                            |✓          |
|      |Можливість прив’язки подій до контактів|✓        |✓                                            |✕          |
|      |Повідомлення про події за розкладом|✓        |✓                                            |✓          |
|      |Наявність додаткової інформації про події|✓        |✓                                            |✕          |
|      |Додавання нових користувачів |✕        |✕                                            |✕          |
|Usability (зручність роботи)|Доступ до функціоналу без утиліт|✕        |✕                                            |✕          |
|      |Підтримка Android            |✓        |✕                                            |✕          |
|      |Підтримка IOS                |✕        |✓                                            |✕          |
|      |Підтримка комп’ютерного ПО   |✕        |✕                                            |✓          |
|      |Зручний інтерфейс            |✓        |✓                                            |✓          |
|      |Наявність реклами            |✓        |✓                                            |✕          |
|      |Наявність платного контенту  |✕        |✓                                            |✕          |
|      |Багатомовність               |✓        |✓                                            |✓          |
|Reliability (надійність)|Захист персональних даних    |✓        |✓                                            |✓          |
|      |Резервне копіювання          |✓        |✓                                            |✕          |
|Performance (продуктивність)|Регулярне оновлення додатку  |✕        |✓                                            |✕          |
|      |Підтримка нових версій ПО    |✕        |✓                                            |✓          |
|Supportability        (підтримка)|Можливість зв’язку у соцмережах|✕        |✓                                            |✕          |
|      |Зворотній зв’язок            |✕        |✓                                            |✓          |

У висновку можна сказати, що кожен з додатків має свої суттєві недоліки, основні з яких: застаріла версії ПО, наявність платного контенту, необхідність в завантаженні додаткових утиліт, обмеженість однією операційною системою та використання ресурсів пам'яті пристрою.

# Обґрунтування вибору програмного забезпечення

Насамперед потрібно зазначити, що нещодавно з'явилася нова бібліотека Urban Bot. Вона адаптує React для написання чат-ботів різної складності, тож і наш проект ми будемо розробляти за допомогою її функціоналу.

> Чат-бот - це частіше за все окремий чат у месенджері, в якому ви спілкуєтеся з програмою. Він може надсилати повідомлення у вигляді тексту, зображень, кнопок й багатьох інших UI елементів і реагувати на повідомлення користувача. Сучасні чат-боти - це повноцінні UI додатки у месенджерах.

Urban Bot пропонує зовсім інший підхід до розробки чат-ботів - через декларативне програмування та компонентний підхід. Живий приклад, написаний на Urban Bot, можна спробувати у Telegram, [посилання](https://t.me/BaseExampleUrbanBot), і переглянути код на [GitHub](https://github.com/urban-bot/base-example).

Далі розглянемо декілька простих прикладів, які допоможуть познайомитися з основним функціоналом бібліотеки.

## Відправка повідомлень 
Цей код відправляє стандартне повідомлення користувачу з текстом `'Hello, world!'`
```js
import React from 'react';
import { Text } from '@urban-bot/core';

function App() {
    return (
        <Text>
           Hello, world!
        </Text>
    );
}
```

Зображення можна відправити так:

```js
import React from 'react';
import { Image } from '@urban-bot/core';

function App() {
    const imageByURL =  'https://some-link.com/image.jpg';

    return <Image file={imageByURL} />;
}
```
Urban Bot має готовий набір компонентів для кожного виду повідомлень: для файлів File, для кнопок ButtonGroup і багато інших. До кожного з них можна передати певний набір пропсів(об'єктів), наприклад, імітувати, що бот набирає повідомлення 1 секунду `<Text simulateTyping={1000}>`.

# Етапи розробки бота
## 0. Встановелння бібліотеки Urban Bot

Для початку розробки бота треба  встановити Urban Bot стартер-проект. В ньому знаходяться всі потрібні файли документації та бот з двома найпростішими функціями `/echo` та `/logo`. Існують **TypeScript** і **JavaScript** версії. 

Щоб встановити достатньо ввести в терміналі:

**TypeScript**
```npx create-urban-bot my-app```

**JavaScript**
```npx create-urban-bot my-app --template js```

Після встановлення готовий шаблон буде в директорії **my-app**, там де ви запускали `create-urban-bot`.

## 1. Етап налаштування та запуску
Відкрийте `my-app` в редакторі, в якому будете розробляти бота, знайдіть та відкрийте файл .env та введіть Telegram токен.
![image](https://user-images.githubusercontent.com/62243357/113441901-b8b4e480-93f7-11eb-9e6b-cc37a008cfb8.png)

Також треба активувати Telegram render. Для цього розкоментуйте // import ‘./render/telegram’; всередині src/index.ts чи src/index.js.
![image](https://user-images.githubusercontent.com/62243357/113442093-10535000-93f8-11eb-8127-ba0432361146.png)

Все готово для першого запуску бота. Напишіть команду `npm run dev` в терміналі та запустіть.
![image](https://user-images.githubusercontent.com/62243357/113442274-6aecac00-93f8-11eb-99a8-2512bcf91edb.png)

Перейдіть до вашого бота в Телеграмі. Так буде виглядати ваше діалогове вікно з ботом:
![image](https://user-images.githubusercontent.com/62243357/113442350-8e175b80-93f8-11eb-912e-4bbe981eb6d7.png)

Далі запустіть бота кнопкою внизу вікна. На те, щоб бот остаточно завершив запуск та виконав привітальний скрипт вперше знадобиться трохи часу, надалі такої затримки не буде. 
Далі бот має відповідати на дві команди  `/echo` та `/logo`.

## 2. Етап розробки
### 2.1 Серверна частина. Робота з базою даних
В першу чергу треба вирішити, яку з баз даних обрати для обробки вхідних запитів. Найчастіше для проектів на Java Script використовують базу даних MongoDB.
```MongoDB — документо-орієнтована система керування базами даних (СКБД) з відкритим вихідним кодом, яка не потребує опису схеми таблиць. 
MongoDB займає нішу між швидкими і масштабованими системами, що оперують даними у форматі ключ/значення, 
і реляційними СКБД, функціональними і зручними у формуванні запитів
```
MongoDB підтримує зберігання документів в JSON-подібному форматі, має досить гнучку мову для формування запитів, може створювати індекси для різних збережених атрибутів, ефективно забезпечує зберігання великих бінарних об'єктів, підтримує журналювання операцій зі зміни і додавання даних в БД, може працювати відповідно до парадигми Map/Reduce, підтримує реплікацію і побудову відмовостійких конфігурацій.

Наступним кроком, буде продумати кількість виконуваних ботом команд. В нашому випадку бот буде мати дві команди для виклику та виконання: `/create_birthday` та `/delete_birthday` для додавання та видалення інформації про день народження відповідно. Для того, щоб змінити інформацію про себе, потрібно буде видалити вже створену інформацію та створити нову. Потрібно також передбачити можливі помилки, та попередити їх на етапі розробки. Основна помилка може бути в тому, що створюються два і більше однакових користувачів в базі даних. Для того, щоб попередити цю помилку потрібно відслідковувати всі наміри додати нового користувача до бази даних. Якщо користувач вже існує - то запит повинен відхилитися. 

Коли всі аналітичні кроки завершилися можна переходити до програмування.

В першу чергу створюємо дві моделі (класи) для нашої бази даних `Chat` та `User`. Кожен новий користувач та чат буде новим об'єктом цих класів. При чому, якщо це персональний чат з ботом, то ID чату співпдає з ID користувача.

```js
import {Schema, model, ObjectId} from 'mongoose'

const Chat = new Schema({
    chatId: {type: String},
    users: [{type: ObjectId, ref: 'user'}]
})

export default model('Chat', Chat)

```

Перший рядок - імпортуємо всі потрібні об'єкти бібліотеки mongoose. Ця бібліотека використовується для створення об'єктів бази даних mongoDB. 
Третій рядок змінна Chat типу `const` - створення єкземпляру класу Schema, що є новим класом з властивостями `chatId` типу `String` та `users`, яка є масивом елементів `type: ObjectId, ref: 'user'` остання властивість встановлює залежності між об'єктами класу User та Chat.

Останній рядок коду - експортуємо модель Chat, щоб імпортувати її у подальший наш код.

Аналогічно створюється модель User. В ній доадється декілька властивостей класу User в тому числі й батьківський Id чату.

```js
import {Schema, model, ObjectId} from 'mongoose'


const User = new Schema({
    userId: {type: String},
    birthdayDate: {type: String},
    parent: {type: ObjectId, ref: 'Chat'},
    name: {type: String},
    chatId: {type: String}
})

export default model('User', User)

```

Далі реалізуємо основний функціонал боту додавання та видалення користувачів. 

Для цього імпортуємо обидві створені вище моделі:

```js
import Chat from './models/Chat';
import User from './models/User';
```

Далі свторюємо асинхронну функцію `createUser`, яка приймає параметр userData ```js 
async function createUser(userData) { }
```

В середині створюємо дві  `let` змінні та чотири `const` змінні - данні користувача

```js
async function createUser(userData) {
    const { userId, name, birthdayDate, chatId } = userData;
    let chat = await Chat.findOne({ chatId: chatId });
    let user = await User.findOne({ userId });
}
```

Дані користувача передаються при використанні створеної функції, дві інші змінні потрібні для відслідковування можливих помилок, про які вказано вище. Ключове слово `await` змусить інтерпретатор JavaScript чекати до тих пір, поки проміс зправа від await НЕ виконається. Після чого воно поверне його результат, і виконання коду продовжиться.

Після змінної chat додамо перевірку на існування його у базі даних, якщо чату не існує створюється новий об'єкт.

```js
async function createUser(userData) {
    const { userId, name, birthdayDate, chatId } = userData;
    let chat = await Chat.findOne({ chatId: chatId });
    if (!chat) {
        chat = new Chat({ chatId: chatId, users: [] });
    }
    let user = await User.findOne({ userId });
}

```

Аналогічна перевірка для користувача у даному чаті. Якщо користувача не існує - створюємо новий об'єкт, використовуючи створену раніше модель User. Додаємо до об'єкту chat індекс користувача (номер у списку) та його id (при видаленні та повторному створенні користувача індекси не видаляються) зберігаємо користувача у базу даних. Якщо користувач існує - повертається сповіщення про це. Далі зберігаємо чат у базу даних та повертаємо проміс з елементами user, chat та message. Останній відправляється користувачу у будь-якому разі при виклику даної функції. 

```js
export async function createUser(userData) {
    const { userId, name, birthdayDate, chatId } = userData;
    let chat = await Chat.findOne({ chatId: chatId });

    if (!chat) {
        chat = new Chat({ chatId: chatId, users: [] });
    }

    let user = await User.findOne({ userId });

    if (!user) {
        const user = new User({ userId, name, birthdayDate, parent: chat._id, chatId: chatId });
        chat.users.push(user._id);
        await user.save();
    } else {
        return { message: 'Can not create user, user is already exist' };
    }
    await chat.save();
    return {
        user: user,
        chat: chat,
        message: 'Пользователь успешно добавлен',
    };
}
```

Створюємо другу асинхронну функцію `deleteUser`. При її виклику виконується пошук по данним користувача, який її викликав. Якщо користувач існує в базі даних, він видаляється інакше надсилається сповіщення про помилку сервера.

```js
export async function deleteUser(userId){
    try{
        let user = await User.findOne({userId: userId})
        await user.remove()
        return {message: 'User was deleted successfully'}
    } catch (error) {
        console.log(error)
        return {message: 'Can not delete user, server error'}
    }
}
```

На цьому проектування серверної частини (роботи з базою даних) завершені. Далі ми будемо проектувати front-end (зовнішній вигляд бота).

### 2.2 Зовнішня частина. Робота користувача з ботом
Для початку напишемо привітання бота, яке надсилається при підключенні користувача по команді `/start`.  У новий файл `App.js` імпротуємо модуль `React` та об'єкт `Text` з бібліотеки `UrbanBot`. 

```js
import React from 'react'; 
import { Text, Router, Route } from '@urban-bot/core';
import { useState } from 'react';

```

Створюємо функцію `App`, яка нічого не виконує, але повертає об'єкт `Text`, в якому пишемо привітання для нового користувача, в якому можна додати список команд, які виконуються ботом. 

```js
function App(){

    return(
            <Text>
              Hello! Use command /create_birthday to create user or /delete_birthday to delete user
            </Text>
    )
}
```

В такому вигляді бот при кожному повідомлені від користувача буде надсилати привітний текст. Для того, щоб уникнути цього використаємо об'єкт `Router`. Він дозволяє роділити компоненти у середині нього на окремі, незалежні один від одного шляхи. В нашому випадку ми будемо використовувати `Route`, щоб привітнє повідомлення надсилалося тільки по команді `/start`. Таким чином код набуде такого вигляду: 

```js
function App(){

    return(
        <Router>
            <Route path="/start">
                <Text>Hello! Use command /create_birthday to create user or /delete_birthday to delete user</Text>
            </Route>
        </Router>
    )
}
```


Для подальшого використання цієї функції додамо ключове слово `export` перед функцією. ```export function App(){...}```

Наступним кроком буде написання функцій `Add` та `Delete`, які виконуються у чат-боті після виклику команд  `/create_birthday` чи `/delete_birthday` відповідно, але до взаємодії з базою даних. Створюємо функцію `Add` у новому файлі та додаємо 5 змінних типу `const`. 

```js
function Add() {
    const [answer, setAnswer] = useState('Input your birthday data in format dd-mm-yyyy');
    const { chat } = useBotContext();

    const chatId = chat.id;
    const userId = chat.username;
    const name = chat.firstName
    
 ```
Перша змінна масив - результат виконання функції `useState`. Ця функція використовується для створення константи, яка є першим елементом поверненого масиву, з можливостю її зміни функцією, яка повертається другим елементом. Текст у дужках `useState` буде дефолтним для створеної змінної.

Також, в будь-якому місці програми ми можемо отримати дані по конкретному чату, який користувач написав, з яким ніком і т.д. Для цього вводимо інші три змінні, в які записуємо: ID чата, username користувача, який викликав функцію, та його ім'я.

Наступним кроком пишемо функцію, яка буде приймати введену дату та перевіряти її на валідність. Перевірку на валідність винесемо в окрему функцію.

```js
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
```

Дана функція приймає дату типу `String` у форматі dd-mm-yyyy. Розділяє її на масив елементів за розділювачем "-" функцією `split`. Далі ковертує перший та другий елементи масиву (день та місяць) у тип Integer та зписує у константи. Вводимо let змінну isValid зі значенням `false` для перевірки та пишемо умову валідності дати (день - ціле число від 1 до 31, місяць - від 1 до 12). Якщо умова справджується, значення змінної змінюємо на true. Функція повертає змінну isValid або `false`

Для наступної частини, а саме для отримання тексту від користувача, використаємо вбудований хук useText, який реагує на повідомлення від користувачів. Він записує у введений в фігурних дужках параметр `text` повідомлення у форматі `String`. 

```js
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
        } else {
            setAnswer('There is an error in your data. \n Please check your data format (dd-mm-yyyy)')
        }
    });
```

Отриманий текст перевіряємо написаною вище функцією на валідність. Якщо повертається значення `true`, створюється змінна `data`, в яку записується результат функції `createUser`, створеної у попередньому пункті. Для її викорисатння робимо імпорт: ```import { createUser } from '../mongodb/botController';``` У середину передаються всі необхіді параметри. Після виконання функції змінюється відповідь бота на ту, що повернулася у константу `data`. Якщо попередня умова не була виконана, то повертається повідомлення про помилку. Останнім рядком експортуємо функцію для можливості доступу до неї.
```js
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
```

Аналогічно попередній будується функція `Delete`.

```js
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
```

Єдиною відмінністю є використання хуку `useEffect`. Ми оголошуємо змінну користувача `userId` та говоримо React, що ми хочемо використовувати ефект. Далі, ми передаємо функцію в хук useEffect. Ця функція якраз і буде нашим ефектом. Усередині цього ефекту ми видаляємо користувача за отриманим Id, використовуючи написану в попередньому пункті функцію. Ми можемо отримувати доступ до актуальної змінної `userId` зсередини ефекту, так як він знаходиться в області видимості нашої функції. Коли React рендерить наш компонент, він запам'ятовує ефект, який ми використовували, і запускає його після того, як оновить DOM. Це буде відбуватися при кожному рендері, в тому числі і при першому.

На цьому етап розробки функціоналу боту завершений.

### 2.3 Розробка парсеру бази даних

В цьому пункті ми розробимо останній код, який буде виконувати щоденну перевірку серед наявних в базі даних користувачів. При виявлені дати, яка співпадає з сьогоднішньою ботом надсилається повідомлення до батьківського чату цього користувача з привітанням з днем народження.

В першу чергу пишемо функцію, яка повертає сьогоднішню дату. Через особливість JS вбудована функція повертає дату в форматі Date та з великою кількістю додаткових, непотрібних нашому боту параметрів. Тому наша функція отримує поточну дату вбудованним стеком, записує у змінні `month`, `day`, `year` місяць, день та рік відповідно. Для місяців до 10-го додає першою цифрою "0" та повертає дату у форматі `day-month`. 

```js
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
```

Наступним кроком пишемо парсер по масиву чатів у базі даних, в якому знаходимо користувачів з поточною датою. 

```js
const sendMessagesEveryDay = async () => {
    const chats = await Chat.find().populate({path: 'users'})
    for (let chatIndex = 0; chatIndex < chats.length; chatIndex++) {
        const chat = chats[chatIndex]
        // console.log(chat.users)
        const currentDate = getCurrentDate()
        chat.users.forEach((user) => {
            if (user.birthdayDate.slice(0,5) === currentDate) {
                try {
                    bot.telegram.sendMessage(user.chatId, `Сегодня др у ${user.name}, ${user.userId}, поздравляем`)
                } catch (error) {
                    console.log(error)
                }
            }
        })

    }
}
```

У змінну `chats` записуємо масив чатів,я кі знаходяться у базі даних. Відкриваємо цикл по масиву, в якому для кожного елементу (чату) знаходимо поточну дату. Далі хуком `forEach`  для кожного користувача цього чату перевіряємо, чи є поточна дата чиїмось днем народження. При виявленні іменинника повертиється повідомлення- привітання з `username` та ім'ям користувача. Для того, щоб функція виконувалася кожен день напишемо функцію `timer`, яка встановлює таймер хуком `setInterval` на 8640000000 мілі секунд (добу), та кожний інтервал викликає створену вище функцію. 

Фінальний код парсеру виглядає так:

```js
const {Telegraf} = require('telegraf')
const Chat = require('./models/Chat')
const mongoose = require("mongoose");


const bot = new Telegraf(process.env.BOT_TOKEN)

//'dd-mm-yyyy'
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
const sendMessagesEveryDay = async () => {
    const chats = await Chat.find().populate({path: 'users'})
    for (let chatIndex = 0; chatIndex < chats.length; chatIndex++) {
        const chat = chats[chatIndex]
        // console.log(chat.users)
        const currentDate = getCurrentDate()
        chat.users.forEach((user) => {
            if (user.birthdayDate.slice(0,5) === currentDate) {
                try {
                    bot.telegram.sendMessage(user.chatId, `Сегодня др у ${user.name}, ${user.userId}, поздравляем`)
                } catch (error) {
                    console.log(error)
                }
            }
        })

    }
}

const timerBotFunc = () => {
    const timer = setInterval(sendMessagesEveryDay, 8640000000)
    console.log('timer was set')
}
module.exports = timerBotFunc

```

![image](https://user-images.githubusercontent.com/62243357/117887921-17ecfb00-b2ba-11eb-8017-b78bd1a189e8.png)
![image](https://user-images.githubusercontent.com/62243357/117887976-2e935200-b2ba-11eb-93db-925177a8a570.png)

## 3. Етап тестування
На етапі тестування потрібно виявити усі неточності та баги роботи програми. Командою `npm run dev` у терміналі запускаємо бота та парсер. Переходимо у телеграм.

![image](https://user-images.githubusercontent.com/62243357/117889752-bc703c80-b2bc-11eb-8b85-bf384a578a64.png)

![image](https://user-images.githubusercontent.com/62243357/117889961-09eca980-b2bd-11eb-92a7-eb2127523fdb.png)

Подивимося як виглядає база даних після створення нового користувача:

![image](https://user-images.githubusercontent.com/62243357/117890071-2dafef80-b2bd-11eb-9716-1a72e19991fb.png)

![image](https://user-images.githubusercontent.com/62243357/117890142-48826400-b2bd-11eb-9e50-f17594fa94dd.png)

З'явився новий чат з одним користувачем.

Переконаємося, що користувачі не будуть дублюватися:

![image](https://user-images.githubusercontent.com/62243357/117890930-b67b5b00-b2be-11eb-81af-77754e2785a8.png)

![image](https://user-images.githubusercontent.com/62243357/117890862-98155f80-b2be-11eb-9a83-93f1b919b0c0.png)

![image](https://user-images.githubusercontent.com/62243357/117890983-ce52df00-b2be-11eb-9684-7a801e3350a6.png)

Робимо висновок з отриманих результатів, що бот працює коректно. На цьому завершуємо етап розробки.

![Congrats](https://www.reef2reef.com/proxy.php?image=https%3A%2F%2Fmedia1.giphy.com%2Fmedia%2FslOhiKAVFgwr6%2F200.gif&hash=6bec20eedd16467ce1fa932ae7ec6e31)
