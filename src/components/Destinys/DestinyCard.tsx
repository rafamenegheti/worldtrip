import { Box, Image, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

interface DestinyCardProps{
    city: string,
    country: string,
    image:string,
    flag: string,
    url: string
}

export function DestinyCard( { city, country, image, flag, url}: DestinyCardProps ) {
  return (
      <Link href={`city/${url}`}>
    <Box m="0" w="256px" pb="10" _hover={{cursor:"pointer", filter: "brightness(0.7)", transition: "filter 0.2s"}}>
      <Image src={`/images/destinys/${image}.png`} w="256px" />
      <Flex
        w="256px"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid"
        borderLeft="1px solid"
        borderRight="1px solid"
        borderBottomRadius="10px"
        borderColor="yellow.400"
      >
        <Box p="20px" w="256px">
          <Text pb="2" fontWeight="700">{country}</Text>
          <Text textColor="black.600">{city}</Text>
        </Box>
        <Image src={`/images/destinys/${flag}.png`} pr="15px" h="30px" />
      </Flex>
    </Box>
    </Link>
  );
}
