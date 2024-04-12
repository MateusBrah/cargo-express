import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const useSignIn = () => {
  const { t, i18n } = useTranslation();
  const { navigate } = useNavigation();
  const [currentLanguage, setCurrentLanguage] = useState('pt');
  const [isLoading, setIsLoading] = useState(false);

  const changeLanguage = (value: any) => {
    setCurrentLanguage(value);
    i18n.changeLanguage(value)
      .then(() => console.log('Language changed to: ', value))
      .catch((error) => console.error('Error changing language: ', error));
  }

  // Simula um login
  const handleSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('home');
      setIsLoading(false);
    }, 1000);
  }

  return { t, currentLanguage, isLoading, handleSignIn, changeLanguage };
};

export default useSignIn;