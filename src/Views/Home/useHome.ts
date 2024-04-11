import { useNavigation } from "@react-navigation/native";

const useHome = () => {
  const { navigate } = useNavigation();

  const handleRoutes = (index: number) => {

  }

  return { handleRoutes };
};

export default useHome;