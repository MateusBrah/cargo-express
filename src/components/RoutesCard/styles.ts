import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_100};
  width: 100%;
  padding: 20px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 12px;
`;

export const Info = styled.View`
  flex: 1;
`;

export const Text = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.GRAY_800};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
  margin-top: 4px;
`;

