import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useHomeHeader = () => {
  const safeArea = useSafeAreaInsets();

  const paddingTop = safeArea.top + 32;

  const handleLogout = () => {

  }

  return { paddingTop, handleLogout };
};