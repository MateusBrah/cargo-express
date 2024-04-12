import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useHomeHeader = () => {
  const safeArea = useSafeAreaInsets();

  const paddingTop = safeArea.top + 32;

  return { paddingTop };
};