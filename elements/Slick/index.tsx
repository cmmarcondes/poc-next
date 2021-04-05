import { ReactChild } from 'react';

import Container from './styles';

interface SlickData {
  children: ReactChild[] | ReactChild;
  windowSize: number;
}

const Slick: React.FC<SlickData> = ({ children, windowSize }: SlickData) => {
  if (windowSize < 800) {
    return (
      <Container>
          {children}
      </Container>
    );
  }
  return <>{children}</>;
};
export default Slick;
