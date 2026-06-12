import { useMMKVString } from "react-native-mmkv";
import { KEYS } from "@/store/store";

export function useAuth() {
    const [accessToken, setAccessToken] = useMMKVString(KEYS.ACCESS_TOKEN)
    const [refreshToken, setRefreshToken] = useMMKVString(KEYS.REFRESH_TOKEN)

    const logout = () =>{
        setAccessToken('')
        setRefreshToken('')
    }

    return{
        accessToken,
        refreshToken,
        setAccessToken,
        setRefreshToken,
        logout,
        isAuthenticated: !!accessToken
    }
}