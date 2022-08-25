import { Flex, Text, Box, Link, Image } from "@chakra-ui/react";
import coolcat from "../../assets/coolcat.jpeg";

export const NavBar = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      paddingInline="2rem"
      paddingBlock="1rem"
    >
      <Image
        src={coolcat}
        maxWidth={["40px"]}
        borderRadius={["20px"]}
        border={["1px solid #fff"]}
      />
      <Flex gap="1rem">
        <Link color="white">Tentang</Link>
        <Link color="white">Projetos</Link>
      </Flex>
    </Flex>
  );
};
