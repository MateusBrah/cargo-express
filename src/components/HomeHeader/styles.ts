import styled from 'styled-components/native';
import { Image } from 'expo-image'

export const Container = styled.View`
background-color: ${({ theme }: any) => theme.COLORS.BRAND_LIGHT};
width: 100%;
padding: 32px;
flex-direction: row;
align-items: center;
border-bottom-left-radius: 6px;
border-bottom-right-radius: 6px;
`;

export const Welcome = styled.View`
flex: 1;
margin-left: 14px;
`;

export const VehicleIdentification = styled.Text`
color: ${({ theme }: any) => theme.COLORS.WHITE};
font-size:  ${({ theme }: any) => theme.FONT_SIZE.MD}px;
font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
`;

export const Plate = styled.Text`
color: ${({ theme }: any) => theme.COLORS.WHITE};
font-size:  ${({ theme }: any) => theme.FONT_SIZE.LG}px;
font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
`;

export const VehicleImage = styled(Image)`
width: 74px;
height: 64px;
border-radius: 7px;
`;