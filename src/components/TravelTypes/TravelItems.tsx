import { Text, Flex, Image, Grid, GridItem } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

interface TravelItemsProps {
  description: string;
  image?: string;
  span?: number;
}

export function TravelItems({
  description,
  image,
  span = 1,
}: TravelItemsProps) {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
        md: true
      });

  if (!isWideVersion) {
    return (
      <>
        <GridItem colSpan={span} py="2" textAlign="center">
          <Image src="images/elipse.svg" w="8px" display="inline" />
          <Text pl="2" display="inline">
            {description}
          </Text>
        </GridItem>
      </>
    );
  }

  return (
    <Flex direction="column" justify="center" align="center">
      <Image
        src={`images/${image}`}
        alt={description}
        w="85px"
        h={["", "35", "50px"]}
      />
      <Text textAlign="center">{description}</Text>
    </Flex>
  );
}
