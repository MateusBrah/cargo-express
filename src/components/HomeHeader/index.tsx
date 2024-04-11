import { Container, VehicleIdentification, Plate, VehicleImage, Welcome } from './styles';
import { useHomeHeader } from './useHomeHeader';

export function HomeHeader({ vehicle }: Readonly<{ vehicle: Vehicle }>) {
  const { paddingTop } = useHomeHeader();

  return (
    <Container style={{ paddingTop }}>
      <VehicleImage
        source={{ uri: vehicle.picture.address }}
        placeholder="L184i9offQof00ayfQay~qj[fQj["
      />
      <Welcome>
        <VehicleIdentification>
          N.º Identificação do Veículo: {vehicle.vin}
        </VehicleIdentification>
        <Plate>
          Placa: {vehicle.plate}
        </Plate>
      </Welcome>
    </Container>
  );
}