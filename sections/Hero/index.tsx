import Button from "../../elements/Button";
import Feature from "../../elements/Feature";
import Hero from "../../elements/Hero";
import Title from "../../elements/Title";

interface MainData {
    title: string;
    body: string;
}

const Main: React.FC<MainData> = () => (
   <Hero id="hero" background="green">
      <>
        <div className="hero__content">
          <div className="content__title">
            <Title
              title="Simule e Compre"
              subtitle="Você simula e pode realizar a compra totalmente on-line"
              mainTitle
            />
          </div>
          <div className="content__vantagens">
            <Feature flex={1} icon="fal fa-hand-holding-usd">
              <>
                <h3>Crédito Rápido</h3>
                <p>
                  Benefício disponível no cartão em até 24hrs, após o pedido
                </p>
              </>
            </Feature>
            <Feature flex={1} icon="fal fa-map-marker-alt">
              <>
                <h3>Aceito em todo país</h3>
                <p>Aceito em mais de 360 mil estabelecimentos</p>
              </>
            </Feature>
            <Feature flex={0.8} icon="fal fa-desktop">
              <>
                <h3>Acesso fácil</h3>
                <p>Portal Empresas / RH 100% online</p>
              </>
            </Feature>
          </div>
          <div className="content__footer">
            <Button>
              Simule agora
            </Button>
          </div>
        </div>
      </>
    </Hero>
  );
    
export default Main;