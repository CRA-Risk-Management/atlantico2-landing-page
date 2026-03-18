import { Box, Flex, Image, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

interface CarouselProps {
  logos?: string[];
}

const defaultLogos = [
  "/logos/01_icontec.png",
  "/logos/02_gobernacion-atlantico.png",
  "/logos/03_ultracem.png",
  "/logos/04_unibol.png",
  "/logos/05_pimsa.png",
  "/logos/06_puropollo.png",
  "/logos/07_colegio-britanico.png",
  "/logos/08_colegio-idphu.png",
  "/logos/09_colegio-parrish.png",
  "/logos/10_quintal.png",
  "/logos/11_exal.png",
  "/logos/12_adama-andina.png",
  "/logos/13_inducol.png",
  "/logos/14_impuche.png",
  "/logos/15_acesco.png",
  "/logos/16_monomeros.png",
  "/logos/17_mordiscol.png",
  "/logos/18_zona-franca.png",
  "/logos/19_granabastos.png",
  "/logos/20_ecosembrar.png",
];

export const Carousel = ({ logos = defaultLogos }: CarouselProps) => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const duplicatedLogos = [...logos, ...logos];

  return (
    <Flex direction="column" align="center" gap="md" py={isMobile ? "md" : "xl"} bg={"#969491"}>
      <Text c="white" ta="center" maw="44rem" px="md" style={{ fontSize: "10pt" }}>
        Participantes asociados
      </Text>
      <Box className="logos-carousel" w="100%">
        <Flex className="logos-track">
          {duplicatedLogos.map((logoSrc, index) => (
            <Box key={`${logoSrc}-${index}`} className="logo-item">
              <Image src={logoSrc} alt="Logo aliado" className="logo-image" fit="contain" />
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};
