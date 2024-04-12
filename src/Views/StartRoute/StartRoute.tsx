import React from "react";
import { Container } from "./StartRouteStyles";
import { Header } from "../../components/Header";
import { MapComponent } from '../../components/Map';
import useStartRoute from "./useStartRoute";

export default function StartRoute() {
  const { t, carPosition, routeCoordinates } = useStartRoute();
  return (
    <Container>
      <Header title={t('Saída')} />
      {carPosition &&
        <MapComponent
          carPosition={carPosition}
          routeCoordinates={routeCoordinates}
        />
      }
    </Container>
  );
};