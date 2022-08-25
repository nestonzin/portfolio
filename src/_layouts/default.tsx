import { Flex } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar/NavBar";


interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children } : DefaultLayoutProps) => {
  return (
    <Flex
      bg="linear-gradient(104.3deg, #121212 33.84%, #1E3A8A 162.79%);"
      justifyContent="space-between"
      flexDirection="column"
      minH="100vh"
      w="100%"

      overflow={["hidden"]}
    >
      <NavBar />
      { children }
    </Flex>
  );
};
