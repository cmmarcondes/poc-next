import { HelpContainer } from './styles';

interface HelpData {
  helpState: boolean;
  helpCloseFunction(): void;
}

const Help: React.FC<HelpData> = ({
  helpState,
  helpCloseFunction,
  ...props
}: HelpData) => (
  <HelpContainer helpState={helpState} {...props}>
    <div className="help__holder">
      <div className="help__header">
        <button id="helpClose" type="button" onClick={helpCloseFunction}>
          <i className="far fa-times" />
        </button>
        <h2>atendimento</h2>
        <h3>Ainda com dúvidas?</h3>
        <h3>Fale com um de nossos atendentes.</h3>
      </div>
      <div className="help__content">
        <div className="content__info">
          <i className="fal fa-phone-alt" />
          <div className="info__content">
            <div className="info__title">
              Capital e Regi&otilde;es Metropolitanas
            </div>
            <div className="info__subtitle">(11) 40044938</div>
          </div>
        </div>
        <div className="content__info">
          <i className="fal fa-phone-alt" />
          <div className="info__content">
            <div className="info__title">Demais Localidades</div>
            <div className="info__subtitle">0800 5963838</div>
          </div>
        </div>
        <div className="content__info">
          <i className="fal fa-envelope" />
          <div className="info__content">
            <div className="info__title">E-mail</div>
            <div className="info__subtitle info__subtitle--small">
              relacionamento@vr.com.br
            </div>
          </div>
        </div>
      </div>
    </div>
  </HelpContainer>
);
export default Help;
