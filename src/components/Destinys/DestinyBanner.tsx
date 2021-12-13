import { Flex, Text } from "@chakra-ui/react";


export function DestinyBanner() {
    return(
        <Flex
          w="100%"
          h={["200px", "300", "400px"]}
          px={["0", "0", "36"]}
          pt={["0", "0", "72"]}
          bgImage="url(/images/destinys/background.png)"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          align="center"
          justify={["center","center", "flex-start"]}
        >
            <Text fontSize={["30", "40", "50"]} mb={["0", "20"]} color="white">Europa</Text>
        </Flex>
    )
}