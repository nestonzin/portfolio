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
  Icon,
} from "@chakra-ui/react";
import links from "../../assets/links.png";
import glaucopage from "../../assets/glaucopage.png";
import waterwork from "../../assets/waterwork.png";
import NLW from "../../assets/NLW.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";

import { useState } from "react";

interface ICard {
  image: string;
  title: string;
  description: string;
  cta: string;
  techIcons: string[];
}

export const CardProject = () => {
  const cards = [
    {
      image: links,
      title: "MyLinks",
      techIcons: [html, css, js],
      description: "developed to fix flexbox css concepts",
      cta: "Veja mais",
    },
    {
      image: NLW,
      title: "Next Leve Week",
      techIcons: [html, css, js],
      description:
        "project developed at the Rocketseat online event using JavaScript and flexbox concepts",
      cta: "Veja mais",
    },
    {
      image: waterwork,
      title: "WaterWorks",
      techIcons: [html, css, js],
      description: "first project developed in html/css",
      cta: "Veja mais",
    },
    {
      image: glaucopage,
      title: "glauco.psi",
      techIcons: [html, css, js],
      description: "undefined",
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
      justifyContent={["center"]}
    >
      {cards.map((card) => (
        <Flex
          w={["12rem"]}
          h={["20rem"]}
          bg="#fff"
          justifyContent={["center"]}
          p={["1rem"]}
          flexDirection={["column"]}
          alignItems={["center"]}
          gap={[".5rem"]}
          borderRadius={["1rem"]}
        >
          <Image src={card.image} maxWidth={["10rem"]} />
          <Text color={["black"]}>{card.title}</Text>
          <Flex gap={["1rem"]}>
            {card.techIcons?.map((techIcon) => (
              <Image src={techIcon} maxWidth={["1rem"]} />
            ))}
          </Flex>
          <Text color={["black"]} textAlign={["center"]} fontSize=".6rem">
            {card.description}
          </Text>
          <Button onClick={() => handleClick(card)} boxShadow="xl">
            See more
          </Button>

          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader alignSelf={["center"]}>
                {currentCard?.title}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Image src={currentCard?.image} />
                <Text textAlign={["center"]} p={["1rem"]}>
                  {currentCard?.description}
                </Text>
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
