import Feature from "../../elements/Feature";
import Section from "../../elements/Section";
import Slick from "../../elements/Slick";

const windowSize: number = 1000;

const Vantagens = () => (
    <Section
    title="
      Por que oferecer VR na sua empresa"
    subtitle="Soluções sob medida para quem quer mais tempo e uma vida melhor."
    variant="secondary"
    id="vantagens"
  >
    <div className="section__content section__content--flex-row">
      <Slick windowSize={windowSize}>
        <div className="section__column">
          <Feature
            icon="fal fa-credit-card-blank"
            variant="medium"
            responsive={false}
          >
            <>
              <h3>Crédito Rápido</h3>
              <p>
                Benefício disponível no cartão em até 24 horas, após o pedido.
              </p>
            </>
          </Feature>
          <Feature icon="fal fa-mobile" variant="medium" responsive={false}>
            <>
              <h3>Aplicativo exclusivo</h3>
              <p>
                Consulta de saldo, rede credenciada, bloqueio do cartão, gestão
                de gastos e muito mais.
              </p>
            </>
          </Feature>
        </div>
        <div className="section__column">
          <Feature icon="fab fa-whatsapp" variant="medium" responsive={false}>
            <>
              <h3>Atendimento via WhatsApp</h3>
              <p>Consulta de saldo e extrato de maneira fácil e rápida.</p>
            </>
          </Feature>
          <Feature
            icon="fal fa-map-marker-alt"
            variant="medium"
            responsive={false}
          >
            <>
              <h3>Aceito em todo o país</h3>
              <p>
                Mais de 400 mil estabelecimentos credenciados em todos os
                estados brasileiros.
              </p>
            </>
          </Feature>
        </div>
        <div className="section__column">
          <Feature
            icon="fal fa-street-view"
            variant="medium"
            responsive={false}
          >
            <>
              <h3>Serviços adicionais VR</h3>
              <p>Benefícios a mais para a sua empresa e seus funcionários.</p>
            </>
          </Feature>
          <Feature icon="fal fa-desktop" variant="medium" responsive={false}>
            <>
              <h3>Portal do RH</h3>
              <p>
                Gestão 100% online de usuários e pagamentos com possibilidade de
                pedidos por arquivo.
              </p>
            </>
          </Feature>
        </div>
      </Slick>
    </div>
  </Section>
);

export default Vantagens;