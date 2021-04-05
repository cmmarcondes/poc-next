import { Container, TitleSection } from './styles';

interface SectionData {
  title?: string;
  subtitle?: string;
  id?: string;
  variant: 'primary' | 'secondary' | 'dark';
  children?: React.ReactChild;
  className?: string;
}

const Section: React.FC<SectionData> = ({
  title,
  subtitle,
  id,
  variant,
  children,
  className,
}: SectionData) => (
  <Container id={id} variant={variant} className={className}>
    <div className="section__holder">
      {title && <TitleSection title={title} subtitle={subtitle} />}
      {children}
    </div>
  </Container>
);

export default Section;
