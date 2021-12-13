import { Flex, Text, SimpleGrid } from "@chakra-ui/react";
import { DestinyBanner } from "../../components/Destinys/DestinyBanner";
import Header from "../../components/Header";
import { DestinyTips } from "../../components/Destinys/DestinyTips";
import { DestinyCard } from "../../components/Destinys/DestinyCard";

export default function Destinys() {
  return (
    <Flex direction="column">
      <Header />
      <DestinyBanner />
      <Flex w="80%" mx="auto" mt={["25", "35", "50"]} direction="column">
        <DestinyTips
          mainMessage="A pinto Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais,
          o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste"
          number1="50"
          number2="60"
          number3="27"
          title1="países"
          title2="línguas"
          title3="cidades + 100"
          infoMessage="sla"
        />

        <Text pt="60px" pb="30" fontSize="36px">
          Cidades + 100
        </Text>

        <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing="20px" m="auto" mx="0">
          <DestinyCard
            country="Reino Unido"
            city="Londes"
            image="londres"
            flag="reinoUnidoFlag"
            url="lomdom"
          />

          <DestinyCard
            country="Paris"
            city="França"
            image="paris"
            flag="francaFlag"
            url="france"
          />

          <DestinyCard
            country="Roma"
            city="Itália"
            image="roma"
            flag="italiaFlag"
            url="italy"
          />

          <DestinyCard
            country="Praga"
            city="República Tcheca"
            image="praga"
            flag="republicaTchecaFlag"
            url="czech"
          />


          <DestinyCard
            country="Amsterdã"
            city="Holanda"
            image="amsterda"
            flag="holandaFlag"
            url="nerdeland"
          />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
