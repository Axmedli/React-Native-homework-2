import StyledText from '../../components/StyledText'
import StyledView from '../../components/StyledView'
import { useMMKVBoolean } from 'react-native-mmkv';

const About = () => {
  const [darkmode, setDarkMode] = useMMKVBoolean('darkmode');
  return (
    <StyledView>
      <StyledText>About page</StyledText>
    </StyledView>
  )
}

export default About
