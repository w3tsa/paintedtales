import {
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";

export const DesktopNav = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems="center">
      <Box>
        <Link href={"/"}>
          <Heading as={"h1"} cursor="pointer">
            Painted Tales
          </Heading>
        </Link>
      </Box>
      <Box>
        <UnorderedList style={{ listStyle: "none" }}>
          <Flex gap={4}>
            <ListItem cursor="pointer">All stories</ListItem>
            <ListItem cursor="pointer">Trending</ListItem>
            <ListItem cursor="pointer">Favorites</ListItem>
          </Flex>
        </UnorderedList>
      </Box>
      <Box>
        <Button colorScheme="blue">Create</Button>
      </Box>
    </Flex>
  );
};
