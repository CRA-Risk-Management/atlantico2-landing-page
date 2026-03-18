import { Avatar, Box, Divider, Flex, Image, Title, Typography, useMantineTheme } from "@mantine/core";
import { Slide } from "./Slide";
import { useMediaQuery } from "@mantine/hooks";
import { CommitRounded, FactoryRounded } from "@mui/icons-material";

export const Results = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const statCircleSize = isMobile ? "clamp(7rem, 22vw, 9rem)" : "clamp(9rem, 11vw, 11rem)";
  const statBoxSize = isMobile ? "clamp(8rem, 26vw, 10rem)" : "clamp(11rem, 14vw, 13rem)";

  return (
    <Slide id="resultados" mobileMinHeight="auto" desktopMinHeight="clamp(22rem, 30vw, 30rem)">
      <Flex direction={"column"} align={"center"} justify={"space-evenly"} h={"100%"} p={10} py={isMobile ? "lg" : "xl"}>
        <Title order={3} mb={14} c={"#00B5D9"}>
          Resultados
        </Title>
        <Flex direction={isMobile ? "column" : "row"} justify={"space-evenly"} align={"center"} w={"100%"} maw={"56rem"} flex={1}>
          <Flex
            miw={statBoxSize}
            mih={statBoxSize}
            maw={statBoxSize}
            mah={statBoxSize}
            direction={"column"}
            align={"center"}
            justify={"center"}
            pos={"relative"}
          >
            <Avatar radius={"100%"} size={statCircleSize} style={{ zIndex: 1 }}>
              <FactoryRounded style={{ fontSize: "clamp(6.5rem, 9vw, 8.5rem)", color: "rgba(0, 175, 215, 0.2)" }} />
            </Avatar>
            <Box pos={"absolute"} inset={0} style={{ zIndex: 2 }}>
              <Flex h={"100%"} w={"100%"} direction={"column"} align={"center"} justify={"center"} style={{ textAlign: "center" }}>
                <Typography style={{ fontSize: "clamp(2.5rem, 5vw, 3.4rem)", fontWeight: "bold", color: "#00B5D9", lineHeight: 0.9 }}>
                  +20
                </Typography>
                <Typography style={{ fontSize: "clamp(0.6rem, 1.6vw, 0.72rem)", maxWidth: "90%" }}>
                  Aliados en para la descarbonización del Atlántico
                </Typography>
              </Flex>
            </Box>
          </Flex>
          <Divider
            size="sm"
            orientation={isMobile ? "horizontal" : "vertical"}
            w={isMobile ? "100%" : undefined}
            h={isMobile ? undefined : "10rem"}
            style={{ alignSelf: "center", margin: isMobile ? "0.5rem 0" : "0 0.75rem" }}
          />
          <Flex
            miw={statBoxSize}
            mih={statBoxSize}
            maw={statBoxSize}
            mah={statBoxSize}
            direction={"column"}
            align={"center"}
            justify={"center"}
            pos={"relative"}
          >
            <Avatar radius={"100%"} size={statCircleSize} style={{ zIndex: 1 }}>
              <CommitRounded style={{ fontSize: "clamp(6.5rem, 9vw, 8.5rem)", color: "rgba(0, 175, 215, 0.2)" }} />
            </Avatar>
            <Box pos={"absolute"} inset={0} style={{ zIndex: 2 }}>
              <Flex h={"100%"} w={"100%"} direction={"column"} align={"center"} justify={"center"} style={{ textAlign: "center" }}>
                <Typography style={{ fontSize: "clamp(0.6rem, 1.6vw, 0.72rem)", maxWidth: "90%" }}>
                  Diseño de planes para la reducción de
                </Typography>
                <Typography style={{ fontSize: "clamp(2.2rem, 4.4vw, 3rem)", fontWeight: "bold", color: "#00B5D9", lineHeight: 0.9 }}>
                  +400 kT CO<sub>2</sub>
                </Typography>
              </Flex>
            </Box>
          </Flex>
          <Divider
            size="sm"
            orientation={isMobile ? "horizontal" : "vertical"}
            w={isMobile ? "100%" : undefined}
            h={isMobile ? undefined : "10rem"}
            style={{ alignSelf: "center", margin: isMobile ? "0.5rem 0" : "0 0.75rem" }}
          />
          <Flex
            miw={statBoxSize}
            mih={statBoxSize}
            maw={statBoxSize}
            mah={statBoxSize}
            direction={"column"}
            align={"center"}
            justify={"center"}
            pos={"relative"}
          >
            <Box pos={"absolute"} inset={0} style={{ zIndex: 2 }}>
              <Flex h={"100%"} w={"100%"} direction={"column"} align={"center"} justify={"center"} style={{ textAlign: "center" }}>
                <Image src={"pie.png"} mah={"clamp(8.2rem, 11vw, 10.8rem)"} maw={"clamp(8.2rem, 11vw, 10.8rem)"} />
                <Typography style={{ fontSize: "clamp(0.6rem, 1.6vw, 0.72rem)", maxWidth: "90%" }}>
                  Participantes del sector público y privado
                </Typography>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Slide>
  );
};
