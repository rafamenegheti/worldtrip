import { Flex, Box, Grid, GridItem } from "@chakra-ui/react";
import { TravelItems } from "./TravelItems";
import { useBreakpointValue } from "@chakra-ui/react";

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
    md: true,
  });

  if (!isWideVersion) {
    return (
      <Grid px="5" py="5" templateColumns="repeat(2, 1fr)" >
        <TravelItems description="vida noturna" />
        <TravelItems description="vida noturna" />
        <TravelItems description="vida noturna" />
        <TravelItems description="vida noturna" />
        <TravelItems description="vidaurna" span={2} />
      </Grid>
    );
  }

  return (
    <Box mx={["", "50px", "100px", "200px"]} transform="translateX(-6px)">
      <Flex justify="space-evenly" mt="50" align="center">
        <TravelItems description="vida noturna" image="cocktail.svg" />
        <TravelItems description="praia" image="surf.svg" />
        <TravelItems description="moderno" image="building.svg" />
        <TravelItems description="clásico" image="museum.svg" />
        <TravelItems description="e mais..." image="earth.svg" />
      </Flex>
    </Box>
  );
}
