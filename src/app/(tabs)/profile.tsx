import { Button } from 'react-native'
import StyledView from '../../components/StyledView'
import StyledText from '../../components/StyledText'
import { useAuth } from '@/hooks/useAuth';

const Profile = () => {
  const { logout } = useAuth();

  return (
    <StyledView >
      <StyledText>Profile page</StyledText>
      <Button onPress={logout} title="Logout" />
    </StyledView>
  )
}

export default Profile
