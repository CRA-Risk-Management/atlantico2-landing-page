import { Flex, Title, Typography, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Slide } from "./Slide";

export const Mission = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Slide
      id="mision"
      imageSrc="/backgrounds/mission.jpg"
      red={151}
      green={215}
      blue={0}
      direction="135deg"
      limit="90%"
      mobileMinHeight="30dvh"
      desktopMinHeight="clamp(22rem, 30vw, 30rem)"
    >
      <Flex
        w={"100%"}
        h={"100%"}
        align={isMobile ? "center" : "flex-start"}
        justify={"center"}
        p={isMobile ? 10 : 0}
        pl={isMobile ? 10 : 80}
        pr={isMobile ? 10 : 0}
        direction={"column"}
      >
        <Title order={1} c={"#FFFFFF"}>
          Objetivo
        </Title>
        <Typography
          maw={isMobile ? "100%" : "60%"}
          c={"#FFFFFF"}
          fz={isMobile ? "sm" : "md"}
          style={{ textAlign: isMobile ? "center" : "left" }}
        >
          Unir esfuerzos para implementar estrategias que fortalezcan una cultura ambiental hacia la descarbonización y la bioeconomía,
          reduciendo emisiones GEI e impulsando la innovación, la biodiversidad y el bienestar de las comunidades del Departamento del
          Atlántico
        </Typography>
      </Flex>
    </Slide>
  );
};
