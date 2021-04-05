import Button from "../../elements/Button";
import Section from "../../elements/Section";

interface IContatoSection {
    contatoFunction(): void;
  }

const Contato:React.FC<IContatoSection> = ({ contatoFunction }) => (
    <Section id="contato" variant="dark">
    <div className="section__content--contato section__content section__content--flex-column">
      <h3>Gostaria de falar com um de nossos atendentes?</h3>
      <span>
        Clique no botão abaixo para ver o número de contato telefônico
      </span>
      <Button
        variant="negativo"
        data-testid="contato-button"
        type="button"
        height="3.25rem"
        width="11.988rem"
        onClick={contatoFunction}
      >
        <i className="far fa-headset" />
        Fale conosco!
      </Button>
    </div>
  </Section>
);

export default Contato;