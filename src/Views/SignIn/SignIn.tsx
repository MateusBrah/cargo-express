import React from "react";
import useSignIn from "./useSignIn";
import backgroundImg from '../../assets/logo-removebg-preview.png';
import { Container, Logo, Content } from "./SignInStyles";
import { SubmitButton } from "../../components/SubmitButton";

export default function SignInView() {
  const { isLoading, handleSignIn } = useSignIn();

  return (
    <Container>
      <Content>
        <Logo
          source={backgroundImg}
          alt="Logo Cargo Express"
        />
        <SubmitButton
          title="Entrar"
          isLoading={isLoading}
          onPress={handleSignIn}
        />
      </Content>
    </Container>
  );
}