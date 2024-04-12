import { Container, Title } from './styles';
import { TouchableOpacity } from 'react-native';
import { useHeader } from './useHeader';
import { ArrowLeft } from 'phosphor-react-native';

export function Header({ title }: Readonly<any>) {
  const { paddingTop, goBack } = useHeader();
  return (
    <Container style={{ paddingTop }}>
      <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
        <ArrowLeft 
          size={24} 
          weight='bold' 
          color='#fff'
        />
      </TouchableOpacity>
      <Title>
        {title}
      </Title>
    </Container>
  );
}