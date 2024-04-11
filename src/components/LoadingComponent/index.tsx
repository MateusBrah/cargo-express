import { ActivityIndicator } from "react-native";
import { Container } from "./styles";

export function LoadingComponent() {
  return (
    <Container>
      <ActivityIndicator size="large" color="#55a7eb" />
    </Container>
  );
}