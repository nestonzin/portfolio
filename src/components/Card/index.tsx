import { Flex, Text, Box, Button } from "@chakra-ui/react";

export const Card = () => {
  const cards = [
    { image: {}, title: "Title", description: "description", cta: "Veja mais" },
    { image: {}, title: "Title", description: "description", cta: "Veja mais" },
    { image: {}, title: "Title", description: "description", cta: "Veja mais" },
    { image: {}, title: "Title", description: "description", cta: "Veja mais" },
  ];

  return (
    <Flex
      padding={["2rem"]}
      gap="1rem"
      flexDirection={["column", "column", "column", "column"]}
      alignItems={"center"}
    >
      {" "}
      {cards.map((card) => (
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
          <Box
            w={["10rem"]}
            h={["8rem"]}
            bg="yellow"
            borderRadius={[".5rem"]}
          ></Box>
          <Text color={["black"]}>{card.title}</Text>
          <Text color={["black"]} textAlign={["center"]}>
            {card.description}
          </Text>
          <Button w="5rem" h="2.5rem">
            {card.cta}
          </Button>
        </Flex>
      ))}
    </Flex>
  );
};
