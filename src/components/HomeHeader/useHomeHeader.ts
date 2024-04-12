import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from "react-i18next";

export const useHomeHeader = () => {
  const { t } = useTranslation();
  const safeArea = useSafeAreaInsets();

  const paddingTop = safeArea.top + 32;

  return { t, paddingTop };
};