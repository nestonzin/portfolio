import { Flex, Text, Box, Button } from "@chakra-ui/react";
import { Card } from "../../components/Card"
import { DefaultLayout } from "../../_layouts/default";

export const Projects = () => {
  return (
    <DefaultLayout>
      <Flex flexDirection={["column", "column", "column", "row"]} m="auto">
        <Card />
        <Card />
        <Card />
        <Card />
      </Flex>
    </DefaultLayout>
  );
};
