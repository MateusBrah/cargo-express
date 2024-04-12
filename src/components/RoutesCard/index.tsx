import { Container, Text, Info } from './styles';
import { Truck } from 'phosphor-react-native';
import { useTranslation } from "react-i18next";
import { format, parseISO } from 'date-fns';

type RoutesCardProps = {
  data: Course;
  onPress: () => void;
}

export function RoutesCard({ data, ...rest }: Readonly<RoutesCardProps>) {
  const { t } = useTranslation();

  const formatDate = (dateString: string) => {
    return format(parseISO(dateString), 'dd/MM/yyyy HH:mm');
  };

  return (
    <Container {...rest}>
      <Info>
        <Text>{t("Início")}: {formatDate(data.start_at)}</Text>
        <Text>{t("Fim")}: {formatDate(data.end_at)}</Text>
        <Text>{t("Distância")}: {data.distance} {t("metros")}</Text>
      </Info>
      <Truck
        size={32}
        weight='bold'
        color="#55a7eb"
      />
    </Container>
  );
}