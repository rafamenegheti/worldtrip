import { Flex, Button, Icon } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useColorMode } from "@chakra-ui/react";

export function LightDarkToogleButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex gap="8">
      <Button onClick={toggleColorMode}>
        {colorMode === "dark" ? (
          <Icon as={FiSun} color="gray.500" fontSize="20" />
        ) : (
          <Icon as={FiMoon} fontSize="20" />
        )}
      </Button>
    </Flex>
  );
}