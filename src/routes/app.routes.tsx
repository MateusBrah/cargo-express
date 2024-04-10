import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from '../Views/Home/Home';
import SignInView from '../Views/SignIn/SignIn';
const { Navigator, Screen } = createNativeStackNavigator();


export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signin" component={SignInView} />
      <Screen name="home" component={HomeView} />
    </Navigator>
  );
}