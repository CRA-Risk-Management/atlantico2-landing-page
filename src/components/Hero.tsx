import { Flex, Image, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Slide } from "./Slide";

export const Hero = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Slide imageSrc="/backgrounds/hero.jpg" mobileMinHeight="35dvh" desktopMinHeight="50dvh">
      <Flex w={"100%"} h={"100%"} align={"center"} justify={"center"} pb={isMobile ? 0 : 40}>
        <Image maw={isMobile ? "70%" : "60%"} src={"/atlantico2.png"} />
      </Flex>
    </Slide>
  );
};
