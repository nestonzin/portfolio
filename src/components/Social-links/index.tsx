import { Flex, Text, Link, Image } from "@chakra-ui/react";
import githubz from "../../assets/githubz.png";
import linkedinz from "../../assets/linkedinz.png";
import twitterz from "../../assets/twitterz.png";

export const SocialLinks = () => {
  return (
    <Flex flexDirection={["column"]} gap={["1rem"]} alignItems={["center"]}>
      <Text color={["white"]} fontWeight={"900"} fontSize={["1.5rem"]}>
        Contact-me
      </Text>
      <Flex gap={["1rem"]}>
        <Link href="https://github.com/nestonzin" isExternal>
          <Image src={githubz} maxW={["1rem"]} />
        </Link>
        <Link href="https://www.linkedin.com/in/nestormacedo28/" isExternal>
          <Image src={linkedinz} maxW={["1rem"]} />
        </Link>
        <Link href="https://twitter.com/thesameguy12" isExternal>
          <Image src={twitterz} maxW={["1rem"]} />
        </Link>
      </Flex>
    </Flex>
  );
};
