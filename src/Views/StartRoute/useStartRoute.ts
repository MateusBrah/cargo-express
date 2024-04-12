import { useEffect, useRef, useState } from "react";
import { useRoute } from "@react-navigation/native";
import jsonData from '../../dataBase/frontend_data_gps.json';
import { useTranslation } from "react-i18next";

interface GpsPointProps {
  longitude: number;
  latitude: number;
  acquisition_time_unix: number;
  speed: number;
  direction: number;
  acquisition_time: string;
  address?: string;
}

interface Course {
  gps: GpsPointProps[];
}

interface JsonData {
  courses: Course[];
}

const data: JsonData = jsonData;

const getIntermediatePoints = (startPoint: GpsPointProps, endPoint: GpsPointProps, steps: number): GpsPointProps[] => {
  const deltaLat = (endPoint.latitude - startPoint.latitude) / steps;
  const deltaLong = (endPoint.longitude - startPoint.longitude) / steps;

  return Array.from({ length: steps }, (_, index) => ({
    latitude: startPoint.latitude + deltaLat * index, // Calcula a latiytude intermediaria
    longitude: startPoint.longitude + deltaLong * index, // Calcula a longitude intermediaria
    acquisition_time_unix: startPoint.acquisition_time_unix + (endPoint.acquisition_time_unix - startPoint.acquisition_time_unix) * (index / steps), // Interpola o tempo de aquisicao para o ponto intermediário
    speed: startPoint.speed,
    direction: startPoint.direction,
    acquisition_time: startPoint.acquisition_time,
    address: startPoint.address,
  }));
};

const useStartRoute = () => {
  const { t } = useTranslation();
  const route = useRoute();
  const params = route.params as { courseIndex: number };
  const { courseIndex } = params;
  const gpsPoints = data.courses[courseIndex].gps;
  const [carPosition, setCarPosition] = useState<GpsPointProps>(gpsPoints[0]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const moveMarker = (gpsPoints: GpsPointProps[]) => {
    let currentPointIndex = 0; // indice para o ponto atual na lista de pontos GPS
    let currentIntermediateIndex = 0; // indice para o ponto intermediário atual na sequência de interpolacao
    let intermediatePoints: GpsPointProps[] = []; // Armazena os pontos intermediários gerados pela interpolacao

    // Funcao que atualiza a posicao do marcador no mapa
    const updatePosition = () => {
      // Verifica se ainda há pontos intermediarios para processar
      if (currentIntermediateIndex < intermediatePoints.length) {
        // Atualiza a posicao do carro para o proximo ponto intermediario
        setCarPosition(intermediatePoints[currentIntermediateIndex]);
        // Incrementa o indice para o próximo ponto intermediário
        currentIntermediateIndex++;
      } else {
        // Incrementa o indice para o proximo ponto principal
        currentPointIndex++;
        // Verifica se ainda existem pontos principais para processar
        if (currentPointIndex < gpsPoints.length - 1) {
          // Gera novos pontos intermediarios entre o ponto atual e o próximo
          intermediatePoints = getIntermediatePoints(gpsPoints[currentPointIndex], gpsPoints[currentPointIndex + 1], 10);
          // Reinicia o indice de pontos intermediarios
          currentIntermediateIndex = 0;
        } else {
          // Se não houver mais pontos principais, para o intervalo de atualizacao
          clearInterval(intervalRef.current!);
        }
      }
    };

    // Inicia os pontos intermediarios se houver pelo menos dois pontos principais
    if (gpsPoints.length > 1) {
      intermediatePoints = getIntermediatePoints(gpsPoints[0], gpsPoints[1], 10);
    }

    // Configura um intervalo para atualizar a posicao do marcador regularmente
    intervalRef.current = setInterval(updatePosition, 5000 / 10);
  };

  useEffect(() => {
    // Checa se a lista de pontos GPS possui algum ponto. Se sim, inicia a animacao do marcador
    if (gpsPoints.length) {
      moveMarker(gpsPoints);
    }
    // Limpeza quando o componente for desmontado ou quando os valores de dependencia mudarem
    return () => {
      if (intervalRef.current) {
        // Limpa o intervalo para evitar que a funcao updatePosition continue sendo chamada, evitando vazamento de memoria
        clearInterval(intervalRef.current);
      }
    };
  }, [courseIndex]);

  return { t, carPosition, routeCoordinates: gpsPoints };
};

export default useStartRoute;