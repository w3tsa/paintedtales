"use client";

import { stories } from "@/data/stories";
import { Box, Container, Divider, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Page({ params }: { params: { name: string } }) {
  return stories.map((story) => {
    if (story.name === decodeURIComponent(params.name)) {
      return (
        <div key={story.name}>
          <Container
            maxW="90vw"
            pt={"20px"}
            textAlign="center"
            key={story.name}
          >
            <Heading mt={20}>{story.name}</Heading>
            <Container p={10}>
              <Image
                src={story.imageSrc}
                alt="Green double couch with wooden legs"
                width={500}
                height={500}
                placeholder={"blur"}
                blurDataURL={
                  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fblurred&psig=AOvVaw3H767VGyMmZ6kylnZ39Abv&ust=1677009685643000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCID70obypP0CFQAAAAAdAAAAABAE"
                }
              />
            </Container>
            <Box>{story.story}</Box>
            <Box mt={20}>
              <Divider />
              <Text>Written by Sanaya Sayem</Text>
            </Box>
          </Container>
        </div>
      );
    }
  });
}
