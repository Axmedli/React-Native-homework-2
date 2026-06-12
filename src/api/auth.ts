import { api } from "./axios";
import { storage, KEYS } from "@/store/store";

type Props = {
    username:string,
    password:string
}

export async function login({username,password} : Props) {
    const response = await api.post(
        '/auth/login',
        {
            username: username,
            password: password,
            expiresInMins: 30
        }
    )

    const { accessToken, refreshToken } = response.data

    console.log(accessToken,refreshToken)
    storage.set(
        KEYS.ACCESS_TOKEN,
        accessToken
    )

    storage.set(
        KEYS.REFRESH_TOKEN,
        refreshToken
    )

    return response.data
}