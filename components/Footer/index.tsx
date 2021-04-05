//import Logotipo from '../../assets/img/logo-vr.svg';

import { Container, ContactButton } from './styles';

interface FooterData {
  simplified?: boolean;
  buttonFunction?(): void;
}

const Footer: React.FC<FooterData> = ({
  simplified = false,
  buttonFunction,
}: FooterData) => (
  <Container simplified={simplified}>
    <div className="footer-vr__holder">
      <div className="footer-vr__copyright">
        <img alt="Logotipo VR Benefícios" />
        <span>
          © 2019 VR Benefícios - CNPJ: 02.535.864/0001-33 - Todos os direitos
          reservados
        </span>
      </div>
      <ContactButton
        className="contact-button--custom-width"
        variant="outline-light"
        type="button"
        onClick={buttonFunction}
      >
        <i className="far fa-headset button__icon" />
        Precisa de ajuda ou atendimento?
      </ContactButton>
    </div>
  </Container>
);

export default Footer;
