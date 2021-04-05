import { Container } from './styles';

interface TitleData {
  className?: string;
  title?: string;
  subtitle?: string;
  mainTitle?: boolean;
}

const Title: React.FC<TitleData> = ({
  className,
  title,
  subtitle,
  mainTitle = false,
}: TitleData) => (
  <Container mainTitle={mainTitle} className={className} hasSubtitle={subtitle}>
    <h2>{title}</h2>
    {subtitle ? <p>{subtitle}</p> : <></>}
  </Container>
);

export default Title;
