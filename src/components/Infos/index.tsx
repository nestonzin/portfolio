import { Flex, Text, Image, Button, Box } from "@chakra-ui/react";
import giftest from "../../assets/giftest.gif";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import obj from "../../assets/obj.png";
import array from "../../assets/array.png";

export const Infos = () => {
  const skills = [
    {
      title: "HTML",
      level: "middle",
      img: { html },
    },
    {
      title: "CSS",
      level: "middle",
      img: { css },
    },
    {
      title: "JS",
      level: "middle",
      img: { js },
    },
    {
      title: "React",
      level: "middle",
      img: { obj },
    },
  ];

  return (
    <Flex
      h="80vh"
      alignItems={["center"]}
      gap="2rem"
      justifyContent={["space-around"]}
    >
      {skills.map((skill) => (
        <Flex flexDirection={["column"]} alignItems={["center"]}>
          <Image>{}</Image>
          <Text color={["white"]} fontSize={["2rem"]}>{skill.title}</Text>
          <Text color={["white"]} fontSize={["1rem"]}>{skill.level}</Text>
        </Flex>
      ))}
    </Flex>
  );
};
