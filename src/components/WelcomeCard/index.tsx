import { Container, Text, TextRegister } from './styles';
import { useTranslation } from "react-i18next";

export function WelcomeCard() {
  const { t } = useTranslation();
  return (
    <Container>
      <Text>
        {t("Seja bem vindo!")}
      </Text>
      <TextRegister>
        {t("Selecione um histórico de viagem.")}
      </TextRegister>
    </Container>
  );
}