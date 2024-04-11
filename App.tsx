import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from './src/theme';
import { LoadingComponent } from './src/components/LoadingComponent';

export default function App() {
  const [fontIsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontIsLoaded) {
    return <LoadingComponent />;
  }
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider style={{ backgroundColor: '#FFF' }}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <Routes />
        <StatusBar />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
