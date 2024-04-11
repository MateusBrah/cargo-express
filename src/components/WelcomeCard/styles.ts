import styled from 'styled-components/native';

export const Container = styled.View`
background-color: ${({ theme }: any) => theme.COLORS.GRAY_100};
width: 100%;
margin: 32px 0;
padding: 22px;
border-radius: 6px;
flex-direction: column;
align-items: center;
box-shadow: 4px 4px 4px rgba(0.5, 0.5, 0.5, 0.1);
`;

export const Text = styled.Text`
color: ${({ theme }: any) => theme.COLORS.GRAY_600};
font-size: ${({ theme }: any) => theme.FONT_SIZE.SM}px;
font-family: ${({ theme }: any) => theme.FONT_FAMILY.REGULAR};
`

export const TextRegister = styled.Text`
color: ${({ theme }: any) => theme.COLORS.BRAND_LIGHT};
font-size: ${({ theme }: any) => theme.FONT_SIZE.SM}px;
font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
`