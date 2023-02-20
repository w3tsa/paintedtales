"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { Box, Container, Heading } from "@chakra-ui/react";

// components
import { DesktopNav } from "@/components/nav/desktopNav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container maxW="90vw" pt={"20px"}>
      <Box>
        <DesktopNav />
      </Box>
      <Box>Cards</Box>
    </Container>
  );
}
