import { createMMKV } from 'react-native-mmkv'

export const storage = createMMKV()

export const KEYS = {
    ACCESS_TOKEN: 'accessToken',
    REFRESH_TOKEN: 'refreshToken'
}