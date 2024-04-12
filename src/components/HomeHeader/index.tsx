import { Container, VehicleIdentification, Plate, VehicleImage, Welcome } from './styles';
import { useHomeHeader } from './useHomeHeader';

export function HomeHeader({ vehicle }: Readonly<{ vehicle: Vehicle }>) {
  const { t, paddingTop } = useHomeHeader();

  return (
    <Container style={{ paddingTop }}>
      <VehicleImage
        source={{ uri: vehicle.picture.address }}
        placeholder="L184i9offQof00ayfQay~qj[fQj["
      />
      <Welcome>
        <VehicleIdentification>
          {t("N.º Identificação do Veículo")}: {vehicle.vin}
        </VehicleIdentification>
        <Plate>
          {t("Placa")}: {vehicle.plate}
        </Plate>
      </Welcome>
    </Container>
  );
}