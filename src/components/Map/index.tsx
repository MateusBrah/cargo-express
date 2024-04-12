import MapView, { Marker, Polyline } from "react-native-maps";
import { Image, View } from 'react-native';
import { MapComponentProps, useMap } from "./useMap";

export function MapComponent({ carPosition, routeCoordinates }: Readonly<MapComponentProps>) {
  const { spriteOffset, SPRITE_SHEET_WIDTH, CAR_SPRITE_WIDTH } = useMap({ carPosition, routeCoordinates });

  return (
    <MapView
      style={{
        width: '100%',
        height: '85%'
      }}
      region={{
        latitude: carPosition.latitude,
        longitude: carPosition.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      }}
    >
      <Polyline
        coordinates={routeCoordinates.map(point => ({
          latitude: point.latitude,
          longitude: point.longitude,
        }))}
        strokeColor="#bed300"
        strokeWidth={6}
      />
      {carPosition && (
        <Marker
          coordinate={{ latitude: carPosition.latitude, longitude: carPosition.longitude }}
          anchor={{ x: 0.5, y: 0.5 }}
        >
          <View style={{ width: CAR_SPRITE_WIDTH, height: CAR_SPRITE_WIDTH, overflow: 'hidden' }}>
            <Image
              source={require('../../assets/vehicles-removebg-preview.png')}
              style={{
                width: SPRITE_SHEET_WIDTH,
                height: CAR_SPRITE_WIDTH,
                transform: [{ translateX: spriteOffset }]
              }}
            />
          </View>
        </Marker>
      )}
    </MapView>
  );
}