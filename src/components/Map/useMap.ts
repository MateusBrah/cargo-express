export interface MapComponentProps {
  carPosition: {
    longitude: number;
    latitude: number;
    direction: number;
  };
  routeCoordinates: {
    longitude: number;
    latitude: number;
  }[];
}

const SPRITE_SHEET_WIDTH = 256;
const NUMBER_OF_SPRITES = 8;
const CAR_SPRITE_WIDTH = SPRITE_SHEET_WIDTH / NUMBER_OF_SPRITES;

const getSpriteOffset = (direction: number) => {
  const directionMapping = [225, 270, 315, 0, 45, 90, 135, 180];
  const closestDirectionIndex = directionMapping.reduce((prev, curr) =>
    (Math.abs(curr - direction) < Math.abs(directionMapping[prev] - direction) ? directionMapping.indexOf(curr) : prev), 0);

  const spriteIndex = closestDirectionIndex;
  const offset = -(spriteIndex * CAR_SPRITE_WIDTH);
  return offset;
};

export const useMap = ({ carPosition, routeCoordinates }: MapComponentProps) => {

  const spriteOffset = getSpriteOffset(carPosition.direction);
  return { spriteOffset, carPosition, routeCoordinates, SPRITE_SHEET_WIDTH, CAR_SPRITE_WIDTH };
};