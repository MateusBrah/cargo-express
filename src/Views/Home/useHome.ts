import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

const useHome = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  const handleRoutes = (index: number) => {
    navigate('startroute', { courseIndex: index });
  }

  return { t, handleRoutes };
};

export default useHome;