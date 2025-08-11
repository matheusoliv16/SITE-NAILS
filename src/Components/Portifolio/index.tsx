import React from "react";
import { Section, Title, Subtitle, Grid, Item, Img } from "./styles";
// import img1 from "../../assets/images/portfolio1.png";
// import img2 from "../../assets/images/portfolio2.png";
// import img3 from "../../assets/images/portfolio3.png";
// import img4 from "../../assets/images/portfolio4.png";

export const Portfolio: React.FC = () => (
  <Section >
    <Title>Portfólio</Title>
    <Subtitle>Confira alguns dos nossos trabalhos recentes</Subtitle>
    <Grid>
      {/* <Item><Img src={img1} alt="Unhas decoradas 1" /></Item>
      <Item><Img src={img2} alt="Unhas decoradas 2" /></Item>
      <Item><Img src={img3} alt="Unhas decoradas 3" /></Item>
      <Item><Img src={img4} alt="Unhas decoradas 4" /></Item> */}
    </Grid>
  </Section>
);