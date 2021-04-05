import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Help from "../elements/Help";
import Hero from "../elements/Hero";
import Contato from "../sections/Contato";
import Produtos from "../sections/Produtos";
import { Container } from "../sections/styles";
import Vantagens from "../sections/Vantagens";

const Index = () => {
    const [helpState, setHelpState] = useState(false);

    function handleSetHelpState() {
      setHelpState(!helpState);
    }
  
    return (
      <Container>
        <Header />
        <main className="sc-lp__main">
          <Hero />
          <Produtos />
          <Vantagens />
          <Contato contatoFunction={handleSetHelpState} />
        </main>
        <Footer buttonFunction={handleSetHelpState} />
        <Help helpState={helpState} helpCloseFunction={handleSetHelpState} />
      </Container>
    );
}


export default Index;