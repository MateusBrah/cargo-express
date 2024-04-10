import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider style={{ backgroundColor: '#fff' }}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <Routes />
        <StatusBar />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
