import { Flex, Title, Typography, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Slide } from "./Slide";

export const Vission = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Slide
      id="vision"
      imageSrc="/backgrounds/vission.jpg"
      red={246}
      green={190}
      blue={0}
      direction="215deg"
      limit="80%"
      mobileMinHeight="30dvh"
      desktopMinHeight="clamp(22rem, 30vw, 30rem)"
    >
      <Flex
        w={"100%"}
        h={"100%"}
        align={isMobile ? "center" : "flex-end"}
        justify={"center"}
        p={isMobile ? 10 : 0}
        pl={isMobile ? 0 : 0}
        pr={isMobile ? 0 : 80}
        direction={"column"}
      >
        <Title order={1} c={"#FFFFFF"}>
          Misión y Visión
        </Title>
        <Typography
          maw={isMobile ? "100%" : "60%"}
          c={"#FFFFFF"}
          fz={isMobile ? "sm" : "md"}
          style={{ textAlign: isMobile ? "center" : "right" }}
        >
          El Atlántico transforma su relación con el territorio: medimos nuestra huella, restauramos ecosistemas y construimos un modelo
          donde la naturaleza y el desarrollo se potencian. Si crees que otro futuro es posible, este proyecto es tuyo.
        </Typography>
      </Flex>
    </Slide>
  );
};
