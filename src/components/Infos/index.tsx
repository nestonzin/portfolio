import { Flex, Text, Image, Button, Box } from "@chakra-ui/react";
import giftest from "../../assets/giftest.gif";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import obj from "../../assets/obj.png";
import array from "../../assets/array.png";
import figma from "../../assets/figma.png";
import psd from "../../assets/psd.png";
import ai from "../../assets/ai.png";
import react from "../../assets/react.png";
import github from "../../assets/github.png";

export const Infos = () => {
  const skills = [
    {
      title: "HTML",
      level: "middle",
      img: html,
    },
    {
      title: "CSS",
      level: "middle",
      img: css,
    },
    {
      title: "JS",
      level: "novice",
      img: js,
    },
    {
      title: "React",
      level: "novice",
      img: react,
    },
  ];

  const sideSkills = [
    {
      title: "PSD",
      level: "novice",
      img: psd,
    },
    {
      title: "Ilustrator",
      level: "novice",
      img: ai,
    },
    {
      title: "Figma",
      level: "middle",
      img: figma,
    },
    {
      title: "Github",
      level: "novice",
      img: github,
    },
  ];

  return (
    <Flex
      alignItems={["center"]}
      flexDirection={["column"]}
      gap="3rem"
      p="1rem"
    >
      <Text fontWeight={["700"]} fontSize={["5rem"]} color={["white"]}>
        Skills
      </Text>

      <Flex
        alignItems={["center"]}
        gap="2rem"
        justifyContent={["space-around"]}
        flexDirection={["column", "column", "column", "row"]}
      >
        {skills.map((skill) => (
          <Flex
            flexDirection={["column"]}
            alignItems={["center"]}
            justifyContent={["center"]}
            bg="#ffffff69"
            borderRadius="1rem"
            w="10rem"
            h="10rem"
          >
            <Image src={skill.img} maxW={["3rem"]} w="100% " />
            <Text color={["white"]} fontSize={["2rem"]}>
              {skill.title}
            </Text>
            <Text color={["white"]} fontSize={["1rem"]}>
              {skill.level}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Text fontWeight={["700"]} fontSize={["5rem"]} color={["white"]}>
        Side Skills
      </Text>
      <Flex
        alignItems={["center"]}
        gap="2rem"
        flexDirection={["column", "column", "column", "row"]}
      >
        {sideSkills.map((sideSkill) => (
          <Flex
            flexDirection={["column"]}
            alignItems={["center"]}
            justifyContent={["center"]}
            bg="#ffffff69"
            borderRadius="1rem"
            w="10rem"
            h="10rem"
          >
            <Image src={sideSkill.img} maxWidth={["3rem"]} w="100%" />
            <Text color={["white"]} fontSize={["2rem"]}>
              {sideSkill.title}
            </Text>
            <Text color={["white"]} fontSize={["1rem"]}>
              {sideSkill.level}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
