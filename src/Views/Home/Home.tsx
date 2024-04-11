import React from "react";
import useHome from "./useHome";
import { HomeHeader } from "../../components/HomeHeader";
import { Container, Content } from "./HomeStyles";
import jsonData from '../StartRoute/frontend_data_gps.json'

export default function HomeView() {
  const { handleRoutes } = useHome();

  return (
    <Container >
      <HomeHeader vehicle={jsonData.vehicle}/>
      <Content>
        
      </Content>
    </Container>
  );
}