import { Container, Text, Info } from './styles';
import { Truck } from 'phosphor-react-native';

type RoutesCardProps = {
  data: Course;
  onPress: () => void;
}

export function RoutesCard({ data, ...rest }: Readonly<RoutesCardProps>) {
  return (
    <Container {...rest}>
      <Info>
        <Text>Início: {data.start_at}</Text>
        <Text>Fim: {data.end_at}</Text>
        <Text>Distância: {data.distance} metros</Text>
      </Info>
      <Truck
        size={32}
        weight='bold'
        color="#55a7eb"
      />
    </Container>
  );
}