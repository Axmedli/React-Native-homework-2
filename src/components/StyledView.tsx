import { View } from 'react-native'
import { useMMKVBoolean } from 'react-native-mmkv';

const StyledView = ({ children, className = '' }) => {
    const [darkmode, setDarkMode] = useMMKVBoolean('darkmode');
  return (
    <View className={`flex-1 ${darkmode ? 'bg-black' : 'bg-white'} ${className}`}>
        {children}
    </View>
  )
}

export default StyledView
