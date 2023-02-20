import {
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

export const DesktopNav = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems="center">
      <Box>
        <Heading as={"h1"}>Painted Tales</Heading>
      </Box>
      <Box>
        <UnorderedList style={{ listStyle: "none" }}>
          <Flex gap={4}>
            <ListItem cursor="pointer">All stories</ListItem>
            <ListItem cursor="pointer">Trending</ListItem>
          </Flex>
        </UnorderedList>
      </Box>
      <Box>
        <Button colorScheme="blue">Create</Button>
      </Box>
    </Flex>
  );
};
