import { Container } from './styles';

interface FeatureData {
  icon: string;
  flex?: number | string;
  variant?: 'small' | 'medium';
  responsive?: boolean;
  children?: React.ReactChild;
}

const Feature: React.FC<FeatureData> = ({
  icon,
  flex = 'auto',
  variant = 'small',
  responsive = true,
  children,
}: FeatureData) => (
  <Container flex={flex} variant={variant} responsive={responsive}>
    <i className={icon} />
    <div className="feature__content">{children}</div>
  </Container>
);

export default Feature;
