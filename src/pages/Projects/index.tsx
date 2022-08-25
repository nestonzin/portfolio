import { Flex, Text, Box } from "@chakra-ui/react";
import { DefaultLayout } from "../../_layouts/default";

export const Projects = () => {
  return (
    <DefaultLayout>
      <Flex
        padding={["2rem"]}
        gap="1rem"
        flexDirection={["column", "column", "column", "row"]}
        alignItems="center"
      >
        <Box w="500px" h="500px" bg="blue"></Box>
        <Box w="500px" h="500px" bg="red"></Box>
        <Box w="500px" h="500px" bg="black"></Box>
        <Box w="500px" h="500px" bg="green"></Box>
      </Flex>
    </DefaultLayout>
  );
};
