import { Box, Text, Flex } from "@chakra-ui/react";

interface SlideContentProps {
  place: string;
  subtitle: string;
  image: string;
}

export function SlideContent({ place, subtitle, image }: SlideContentProps) {
  return (
    <Box h="300px" bgImg={`url('/images/${image}')`} bgSize="cover"  className="oi">
      <Flex
      h="100%"
      justifyContent="center"
      alignItems="center"
        color="white"
        fontWeight={700}
      >
        <Box as="a" href="/destinys/europe" my="auto" justifyContent="center" _hover={{filter: 'blur(1px)'}}>
          <Text fontSize={["30px", "35px", "48px"]} textAlign="center">{place}</Text>
          <Text fontSize={["20", "20px", "24"]} fontWeight={400}>
            {subtitle}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
