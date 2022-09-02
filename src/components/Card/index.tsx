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
import glaucopage from "../../assets/glaucopage.png";
import waterwork from "../../assets/waterwork.png";
import NLW from "../../assets/NLW.png";
import { useState } from "react";

interface ICard {
  image: string;
  title: string;
  description: string;
  cta: string;
}

export const Card = () => {
  const cards = [
    {
      image: links,
      title: "MyLinks",
      description:
        "Projeto feito em Html, CSS e JS onde eu crio uma tela responsiva com links das minhas redes sociais",
      cta: "Veja mais",
    },
    {
      image: NLW,
      title: "Next Leve Week",
      description:
        "Projeto feito na Rocketseat onde eu crio uma landing page responsiva em HTML/CSS/JS",
      cta: "Veja mais",
    },
    {
      image: waterwork,
      title: "WaterWorks",
      description:
        "Primeira tela feita em HTML/CSS desenvolvida completamente sozinho",
      cta: "Veja mais",
    },
    {
      image: glaucopage,
      title: "glauco.psi",
      description: "Pagina criada em HTML/CSS/JS feita para um amigo psicologo",
      cta: "Veja mais",
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentCard, setCurrentCard] = useState<ICard>();

  function handleClick(cardSelected: ICard) {
    const cardOpen = cards.find((card) => card.title === cardSelected.title);
    setCurrentCard(cardOpen);

    onOpen();
  }

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
          <Button onClick={() => handleClick(card)}>See more</Button>

          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader alignSelf={["center"]}>
                {currentCard?.title}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Image src={currentCard?.image} />
                <Text textAlign={["center"]}>{currentCard?.description}</Text>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Fechar</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      ))}
    </Flex>
  );
};
