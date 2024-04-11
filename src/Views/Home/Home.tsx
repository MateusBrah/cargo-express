import { Text, FlatList } from "react-native";
import React from "react";
import useHome from "./useHome";
import { HomeHeader } from "../../components/HomeHeader";
import { RoutesCard } from "../../components/RoutesCard";
import { Container, Content } from "./HomeStyles";
import jsonData from '../../dataBase/frontend_data_gps.json';
import { WelcomeCard } from "../../components/WelcomeCard";

export default function HomeView() {
  const { handleRoutes } = useHome();
  return (
    <Container>
      <HomeHeader vehicle={jsonData.vehicle} />
      <Content>
        <WelcomeCard />
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          data={jsonData.courses}
          keyExtractor={(item, index) => item.start_at + index}
          renderItem={({ item, index }) => (
            <RoutesCard
              data={item}
              onPress={() => handleRoutes(index)}
            />
          )}
          ListEmptyComponent={
            <Text>Nenhuma rota encontrada.</Text>
          }
        />
      </Content>
    </Container>
  );
}