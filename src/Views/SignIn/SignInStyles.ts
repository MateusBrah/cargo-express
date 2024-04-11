import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }: any) => theme.COLORS.WHITE};;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;