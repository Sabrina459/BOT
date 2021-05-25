import Chat from './models/Chat';
import User from './models/User';

/**
 *
 * @param userData
 * @returns {Promise<{message: string}|{chat: *, message: string, user: *}>}
 */
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

/**
 *
 * @param userId
 * @returns {Promise<{message: string}>}
 */
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
