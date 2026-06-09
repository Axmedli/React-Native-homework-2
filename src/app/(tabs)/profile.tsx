import { Button } from 'react-native'
import StyledView from '../../components/StyledView'
import StyledText from '../../components/StyledText'
import { useMMKVString } from 'react-native-mmkv';

const Profile = () => {
  const [accessToken, setAccessToken] = useMMKVString("accessToken");

  return (
    <StyledView >
      <StyledText>Profile page</StyledText>
      <Button onPress={() => {
        setAccessToken("");
      }} title="Logout" />
    </StyledView>
  )
}

export default Profile
