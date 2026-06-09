import { Text } from 'react-native'
import { useMMKVBoolean } from 'react-native-mmkv';

const StyledText = ({ children, className = '' }) => {
    const [darkmode, setDarkMode] = useMMKVBoolean('darkmode');
  return (
    <Text className={`${darkmode ? 'text-white' : 'text-black'} ${className}`}>
        {children}
    </Text>
  )
}

export default StyledText
