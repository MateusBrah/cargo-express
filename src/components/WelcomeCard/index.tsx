import { Container, Text, TextRegister } from './styles';


export function WelcomeCard() {
  return (
    <Container>
      <Text>
        Seja bem vindo!
      </Text>
      <TextRegister>
        Selecione um histórico de viagem.
      </TextRegister>
    </Container>
  );
}