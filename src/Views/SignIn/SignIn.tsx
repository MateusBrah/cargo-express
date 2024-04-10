import { View, Text } from "react-native";
import React from "react";
import useSignIn from "./useSignIn";
import backgroundImg from '../../assets/logo-removebg-preview.png';
import { Container } from "./SignInStyles";
import { Image } from 'react-native';

export default function SignInView() {
  const { } = useSignIn();

  return (
    <Container>
      <Image source={backgroundImg} />
    </Container>
  );
}