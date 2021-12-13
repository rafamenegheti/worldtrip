import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "../components/Header";
import { Title } from "../components/Title";
import { TravelTypes } from "../components/TravelTypes";
import MySeparator from "../components/MySeparator";
import { Slides } from "../components/Slides";
const Home: NextPage = () => {
  return (
    <Flex className="teste"direction="column" >
      <Header />
      <Title />
      <TravelTypes />
      <MySeparator />
      <Text textAlign="center">Vamos nessa? <br /> Então escolha seu continente</Text>
      <Slides />
      </Flex>
  );
};

export default Home;
