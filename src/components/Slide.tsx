import React from "react";
import { Box, Flex, Image, Overlay, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

interface SlideProps {
  id?: string;
  imageSrc?: string;
  red?: number;
  green?: number;
  blue?: number;
  direction?: string;
  limit?: string;
  mobileMinHeight?: string;
  desktopMinHeight?: string;
  children?: React.ReactNode;
}

export const Slide = ({
  id,
  imageSrc = undefined,
  red = 255,
  blue = 255,
  green = 255,
  direction = "180deg",
  limit = "80%",
  mobileMinHeight = "12rem",
  desktopMinHeight = "30rem",
  children,
}: SlideProps) => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const colorA = `rgba(${red}, ${green}, ${blue}, 0.0)`;
  const colorB = `rgba(${red}, ${green}, ${blue}, 1.0)`;
  const gradient = `linear-gradient(${direction}, ${colorA} 0%, ${colorB} ${limit})`;

  if (!imageSrc) {
    return (
      <Flex id={id} maw={"100%"} h={isMobile ? mobileMinHeight : desktopMinHeight} mih={isMobile ? mobileMinHeight : desktopMinHeight}>
        <Box w={"100%"}>{children}</Box>
      </Flex>
    );
  }

  return (
    <Box
      id={id}
      maw={"100%"}
      h={isMobile ? mobileMinHeight : desktopMinHeight}
      mih={isMobile ? mobileMinHeight : desktopMinHeight}
      pos={"relative"}
      style={{ overflow: "hidden" }}
    >
      <Image src={imageSrc} pos={"absolute"} top={0} left={0} w={"100%"} h={"100%"} style={{ objectFit: "cover", display: "block" }} />
      <Overlay gradient={gradient} opacity={1} zIndex={1} />
      <Box pos={"absolute"} inset={0} style={{ zIndex: 2 }}>
        {children}
      </Box>
    </Box>
  );
};
