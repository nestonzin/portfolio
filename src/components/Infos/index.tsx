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
      img: obj,
    },
  ];

  const sideSkills = [
    {
      title: "PSD",
      level: "novice",
      img: "!",
    },
    {
      title: "Ilustrator",
      level: "novice",
      img: "!",
    },
    {
      title: "Figma",
      level: "middle",
      img: "!",
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
            <Image src={skill.img} />
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
            <Image src={sideSkill.img} />
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
