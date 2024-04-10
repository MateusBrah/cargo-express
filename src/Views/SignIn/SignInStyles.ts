import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: any) => theme.COLORS.WHITE};
`;