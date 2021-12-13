import {
  Box,
  Flex,
  Text,
  Image,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Title() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
    xl: true,
    md: true,
  });

  return (
    <Box
      h={["160px", "240px", "250", "335px"]}
      bgImg="url('/images/background.png')"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      mb={["2", "5", "5"]}
    >
      <SimpleGrid columns={[1, 1, 2, 2]} spacing={10}>
        <Flex
          direction="column"
          pt={["20px", "35px", "35px", "80px"]}
          pb={["10px", "70px"]}
          pl={["10px", "70px"]}
        >
          <Text
            fontWeight="500"
            color="white"
            fontSize={["20px", "25px", "25px", "36px"]}
          >
            5 Continentes, <br /> infinitas possibilidades.
          </Text>
          <Text fontWeight="400" fontSize={["15px", "20px"]} textColor="gray.200">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        <Box pr="30" ml={["", "", "20px", "150px"]}>
          <Image
            display={["none", "none", "block"]}
            src="/images/Airplane.svg"
            alt="aviao voando com nuvens em volta"
            transform="translateY(68px)"
            w={["300px", "300px", "300px", "430px"]}
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
