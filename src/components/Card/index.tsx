import { Flex, Text, Box, Button } from "@chakra-ui/react";

export const Card = () => {
  return (
    <Flex
      padding={["2rem"]}
      gap="1rem"
      flexDirection={["column", "column", "column", "row"]}
      alignItems={"center"}
    >
      <Flex
        w={["15rem"]}
        h={["20rem"]}
        bg="blue"
        justifyContent={["center"]}
        p={["1rem"]}
        flexDirection={["column"]}
        alignItems={["center"]}
        gap={[".5rem"]}
        borderRadius={["1rem"]}
      >
        <Box w={["10rem"]} h={["5rem"]} bg="yellow" borderRadius={[".5rem"]}></Box>
        <Text color={["black"]}>Title</Text>
        <Text color={["black"]} textAlign={["center"]}>
          description... bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla la
        </Text>
        <Button w="5rem" h="2.5rem">
          Veja mais
        </Button>
      </Flex>
    </Flex>
  );
};
