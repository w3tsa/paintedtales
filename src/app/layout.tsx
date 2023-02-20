// app/layout.tsx
"use client";

import { DesktopNav } from "@/components/nav/desktopNav";
import { CacheProvider } from "@chakra-ui/next-js";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider>
            <Container maxW="90vw" mt={"20px"}>
              <Box>
                <DesktopNav />
              </Box>
            </Container>
            {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
