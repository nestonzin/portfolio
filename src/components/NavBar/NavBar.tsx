import { Flex, Text, Box, Link, Image } from "@chakra-ui/react";
import coolcat from "../../assets/coolcat.jpeg";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      paddingInline="2rem"
      paddingBlock="1rem"
    >
      <NavLink to="/">
        <Image
          src={coolcat}
          maxWidth={["40px"]}
          borderRadius={["20px"]}
          border={["1px solid #fff"]}
        />
      </NavLink>
      <Flex gap="1rem">
        <NavLink to="/AboutMe">
          <Link color="white">Tentang</Link>
        </NavLink>
      </Flex>
    </Flex>
  );
};
