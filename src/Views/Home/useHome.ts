import { useNavigation } from "@react-navigation/native";

const useHome = () => {
  const { navigate } = useNavigation();

  const handleRoutes = (index: number) => {
    navigate('startroute', { courseIndex: index });
  }

  return { handleRoutes };
};

export default useHome;