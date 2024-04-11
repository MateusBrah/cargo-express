import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const useSignIn = () => {
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('home');
      setIsLoading(false);
    }, 4000);
  }

  return { isLoading, handleSignIn };
};

export default useSignIn;