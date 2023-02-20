"use client";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

// components
import StoryCards from "@/components/story_cards/storyCards";

// Data
import { stories } from "@/data/stories";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container maxW="90vw" pt={"20px"}>
      <Flex
        justifyContent={"space-around"}
        pt="10"
        maxW={"70vw"}
        alignItems={"center"}
        m={"0 auto"}
      >
        {stories.length &&
          stories.map((story) => {
            return (
              <div key={uuidv4()}>
                <StoryCards story={story} />
              </div>
            );
          })}
      </Flex>
    </Container>
  );
}
