import { Container, Text, TextRegister } from './styles';


export function WelcomeCard() {

  return (
    <Container>
      <Text>
        Seja bem vindo, motorista!
      </Text>
      <TextRegister>
        Selecione uma rota e boa viagem.
      </TextRegister>
    </Container>
  );
}