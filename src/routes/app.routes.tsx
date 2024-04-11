import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from '../Views/Home/Home';
import SignInView from '../Views/SignIn/SignIn';
import StartRoute from '../Views/StartRoute/StartRoute';
const { Navigator, Screen } = createNativeStackNavigator();


export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signin" component={SignInView} />
      <Screen name="home" component={HomeView} />
      <Screen name="startroute" component={StartRoute} />
    </Navigator>
  );
}