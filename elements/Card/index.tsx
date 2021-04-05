import { Container } from './styles';

interface CardData {
  picture?: string;
  titleColor: string;
  title: string;
  children?: React.ReactChild;
}

const Card: React.FC<CardData> = ({
  picture,
  titleColor,
  title,
  children,
  ...props
}: CardData) => (
  <Container titleColor={titleColor} {...props}>
    <img className="picture" src={picture} alt={`${title} Icone`} />
    <div className="content">
      <h4 className="content__title">{title}</h4>
      <span className="content__text">{children}</span>
    </div>
  </Container>
);

export default Card;
