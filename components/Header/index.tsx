import { useState, useEffect } from 'react';

//import Logotipo from '../../assets/img/logo-vr.svg';

import { Container, Menu } from './styles';

interface HeaderData {
  simplified?: boolean;
  background?: string;
}

const Header: React.FC<HeaderData> = ({
  simplified = false,
  background,
}: HeaderData) => {
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuState ? 'hidden' : 'visible';
  }, [menuState]);

  return (
    <Container background={background} simplified={simplified}>
      <div className="header-vr__holder">
        <a href="https://vr.com.br/">
          <img alt="Logotipo VR" />
        </a>
        <div className="title">
          <h1>Simule e Compre</h1>
          <span>Você simula e pode realizar a compra totalmente on-line</span>
        </div>
        <Menu simplified={simplified} menuState={menuState}>
          <nav>
            <a href="https://vr.com.br/empresas.htm">Pra sua Empresa</a>
            <a href="https://vr.com.br/estabelecimento.htm">Estabelecimento</a>
            <a href="https://vr.com.br/onde-aceita.htm">Pra você</a>
            <a href="https://vr.com.br/venda-parceiro-vr.htm">Venda VR</a>
          </nav>
          <button
            className="header-button"
            type="button"
            onClick={() => setMenuState(!menuState)}
          >
            <i className={menuState ? 'far fa-times' : 'fas fa-bars'} />
          </button>
        </Menu>
      </div>
    </Container>
  );
};

export default Header;
