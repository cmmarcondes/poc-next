import Card from "../../elements/Card";
import Section from "../../elements/Section";
/* import AlimentIcon from '../../assets/img/logo-alimentacao.svg';
import AutoIcon from '../../assets/img/logo-auto.svg';
import NatalIcon from '../../assets/img/logo-natal.svg';
import RefeicaoIcon from '../../assets/img/logo-refeicao.svg';
import TranspIcon from '../../assets/img/logo-transporte.svg'; */

const Produtos = () => (
    <Section
    title="Adquira produtos VR para sua empresa"
    subtitle="Mais que benefícios. VR é liberdade de escolha."
    id="produtos"
    variant="primary"
  >
    <>
      <div className="section__content">
        <Card
          titleColor="orange"
          title="Refeição"
        >
          Utilizado para pagamento de refeições em restaurantes, padarias,
          lanchonetes e aplicativos de entrega de refeições.
        </Card>
        <Card
          titleColor="pink"
          title="Alimentação"
        >
          Utilizado para compras em supermercados, padarias, mercearias,
          açougues e similares.
        </Card>
        <Card titleColor="black" title="Auto">
          Utilize para pagamento de combustível e serviços automotivos no geral.
        </Card>
        <Card
          titleColor="pink"
          title="Transporte"
        >
          Solução que promove uma gestão mais eficiente do Vale-Transporte dos
          seus colaboradores.
        </Card>
        <Card
          titleColor="pink"
          title="Natal"
        >
          Utilizado para compras em supermercados, padarias, mercearias,
          açougues e similares.
        </Card>
      </div>
    </>
  </Section>
);

export default Produtos;