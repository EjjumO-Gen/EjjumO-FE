import { Server } from "./axios.setting"

export const getUserData = async ({
    userId, setData
}) => {
    const response = await Server.get('user', {
        params: {
            id: userId
        }
    })
    setData(response.data);
}

export const getUserList = async ({
    setData
}) => {
    const response = await Server.get('user/list');
    setData(response.data);
}