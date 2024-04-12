import React from "react";
import useSignIn from "./useSignIn";
import backgroundImg from '../../assets/logo-removebg-preview.png';
import { Container, Logo, Content, LanguageContent, SelectLanguage } from "./SignInStyles";
import { SubmitButton } from "../../components/SubmitButton";
import { Text } from "react-native";

export default function SignInView() {
  const { t, currentLanguage, isLoading, handleSignIn, changeLanguage } = useSignIn();
  return (
    <Container>
      <Content>
        <LanguageContent>
          <SelectLanguage
            onPress={() => changeLanguage('pt')}
            style={{ backgroundColor: currentLanguage === 'pt' ? '#55a7eb' : '#fff' }}
          >
            <Text style={{ color: currentLanguage === 'pt' ? '#fff' : '#000' }}>
              PT-BR
            </Text>
          </SelectLanguage>
          <SelectLanguage
            onPress={() => changeLanguage('en')}
            style={{ backgroundColor: currentLanguage === 'en' ? '#55a7eb' : '#fff' }}
          >
            <Text style={{ color: currentLanguage === 'en' ? '#fff' : '#000' }}>
              English
            </Text>
          </SelectLanguage>
        </LanguageContent>
        <Logo
          source={backgroundImg}
          alt={"Logo Cargo Express"}
        />
        <SubmitButton
          title={t("Entrar")}
          isLoading={isLoading}
          onPress={handleSignIn}
        />
      </Content>
    </Container>
  );
}