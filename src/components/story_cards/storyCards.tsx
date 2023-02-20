import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

// data
import { Stories } from "@/data/stories";

const StoryCards = (props: any) => {
  const story: Stories = props.story;
  return (
    <>
      {console.log(story)}
      <Card maxW="sm">
        <CardBody>
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
          <Stack mt="6" spacing="3">
            <Heading size="md">{story.name}</Heading>
            <Text>{story.summary}</Text>
            <Text color="blue.600" fontSize="2xl">
              {"By"} {story.author}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Read more
            </Button>
            <Button variant="ghost" colorScheme="blue" cursor={"pointer"}>
              Add to Favorites
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default StoryCards;
