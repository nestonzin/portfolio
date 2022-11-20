import { Flex, Text, Box, Button } from "@chakra-ui/react";
import { CardProject } from "../../components/CardProject";
import { DefaultLayout } from "../../_layouts/default";

export const Projects = () => {
  return (
    <DefaultLayout>
      <Flex flexDirection={["column", "column", "row", "row"]} m="auto">
        <CardProject />
      </Flex>
    </DefaultLayout>
  );
};
