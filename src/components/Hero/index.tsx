import { Flex, Text, Box, Link, Image, Button } from "@chakra-ui/react";
import giftest from "../../assets/giftest.gif";
import { NavLink } from "react-router-dom";
import { SocialLinks } from "../Social-links";

export const Hero = () => {
  return (
    <Flex
      flexDirection={["column", "column", "row", "row"]}
      justifyContent={["center", "center", "center", "space-around"]}
      alignItems={["center"]}
      w="100%"
      h="80vh"
      gap={["1rem"]}
    >
      <Flex
        flexDirection={["column", "column", "column", "column"]}
        gap={["1rem"]}
        alignItems={["center"]}
        color="white"
        paddingInline={["2rem"]}
      >
        <Text
          color="#ffff"
          fontSize={["3rem"]}
          fontWeight="700"
          lineHeight={["34px"]}
        >
          Hello world!
        </Text>
        <Text
          textAlign="center"
          color="#ffff"
          fontSize={[".6rem", ".9rem", ".9rem", ".9rem"]}
          fontWeight="400"
          paddingInline={["2rem"]}
          w="20rem"
        >
          Hi, I'm Nestor. My interests are in front end engineering, and i love
          to create beautiful and performant products with delightful user
          experiences.
        </Text>

        <NavLink to="/projects">
          <Button color="black">Projects</Button>
        </NavLink>
        <SocialLinks />
      </Flex>

      <Image src={giftest} maxWidth={["15rem", "15rem", "25rem", "35rem"]} />
    </Flex>
  );
};
