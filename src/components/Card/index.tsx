import {
  Flex,
  Text,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import links from "../../assets/links.png";

export const Card = () => {
  const cards = [
    {
      image: links,
      title: "MyLinks",
      description:
        "Projeto feito em Html, CSS e JS onde eu crio uma tela responsiva com links das minhas redes sociais",
      cta: "Veja mais",
    },
    { image: "", title: "Title", description: "description", cta: "Veja mais" },
    { image: "", title: "Title", description: "description", cta: "Veja mais" },
    { image: "", title: "Title", description: "description", cta: "Veja mais" },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      padding={["2rem"]}
      gap="3rem"
      flexDirection={["column", "column", "column", "row"]}
      alignItems={"center"}
    >
      {cards.map((card) => (
        <Flex
          w={["12rem"]}
          h={["18rem"]}
          bg="#fff"
          justifyContent={["center"]}
          p={["1rem"]}
          flexDirection={["column"]}
          alignItems={["center"]}
          gap={[".5rem"]}
          borderRadius={["1rem"]}
        >
          <Image src={card.image} maxWidth={["10rem"]}></Image>
          <Text color={["black"]}>{card.title}</Text>
          <Text color={["black"]} textAlign={["center"]} fontSize=".6rem">
            {card.description}
          </Text>
          <Button onClick={onOpen}>Veja mais</Button>

          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{card.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody> teste</ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      ))}
    </Flex>
  );
};
