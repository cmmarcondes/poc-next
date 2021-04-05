import { Container } from "./styles";

interface HeroData {
    background?: string;
    id?: string;
    children?: React.ReactChild;
  }
  
  const Hero: React.FC<HeroData> = ({
    background = "green",
    id,
    children,
  }: HeroData) => (
    <Container id={id} background={background}>
      <div className="hero__holder">{children}</div>
    </Container>
  );

  export default Hero;