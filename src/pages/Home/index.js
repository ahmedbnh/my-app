import { lazy } from "react";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/ServiceContent.json";
import ProductContent from "../../content/PartenariatContent.json";
import FormationContent from "../../content/FormationContent.json";
import ContactContent from "../../content/ContactContent.json";
import EvenementContent from "../../content/EvenementContent.json";
const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="intr.jpg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="medd.jpg"
        id="about"
      />
       <ContentBlock
        type="left"
        title={FormationContent.title}
        content={FormationContent.text}
        section={FormationContent.section}
        icon="formation.png"
        id="training"
      />
      <ContentBlock
        type="left"
        title={EvenementContent.title}
        content={EvenementContent.text}
        section={EvenementContent.section}
        icon="event.jpg"
        id="Evenement"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="service.png"
        id="Service"
      />

      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="partenariat.jpg"
        id="Partenariats"
      />
       <ContactFrom
       title={ContactContent.title}
        content={ContactContent.text}
       id="contact"
      />



    </Container>
  );
};

export default Home;
