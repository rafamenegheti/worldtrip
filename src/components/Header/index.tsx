import { Box, Center, Grid, Icon, Image, Text, Flex } from "@chakra-ui/react";
import { LightDarkToogleButton } from "../LighDarkToogle";
import { useRouter } from "next/router";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";

export default function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";

  return (
    <Box w="100%">
      <Grid w={["95%", "80%"]} templateColumns='repeat(3, 1fr)' m="auto" my="10px">
        <Link href="/">
        <Icon as={RiArrowLeftSLine} my="auto" fontSize="30px"_hover={{cursor: "pointer", opacity: "0.5", transition: "opacity 0.2s"}}/>
        </Link>
        <Image src="/images/logo.svg" m="auto"/>
        <Text></Text>
      </Grid>
    </Box>
  );
}
