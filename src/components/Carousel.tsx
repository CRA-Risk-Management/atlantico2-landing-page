import { Box, Flex, Image, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

interface CarouselProps {
  logos?: string[];
}

const base = import.meta.env.BASE_URL;
const defaultLogos = [
  `${base}logos/01_icontec.png`,
  `${base}logos/02_gobernacion-atlantico.png`,
  `${base}logos/03_ultracem.png`,
  `${base}logos/04_unibol.png`,
  `${base}logos/05_pimsa.png`,
  `${base}logos/06_puropollo.png`,
  `${base}logos/07_colegio-britanico.png`,
  `${base}logos/08_colegio-idphu.png`,
  `${base}logos/09_colegio-parrish.png`,
  `${base}logos/10_quintal.png`,
  `${base}logos/11_exal.png`,
  `${base}logos/12_adama-andina.png`,
  `${base}logos/13_inducol.png`,
  `${base}logos/14_impuche.png`,
  `${base}logos/15_acesco.png`,
  `${base}logos/16_monomeros.png`,
  `${base}logos/17_mordiscol.png`,
  `${base}logos/18_zona-franca.png`,
  `${base}logos/19_granabastos.png`,
  `${base}logos/20_ecosembrar.png`,
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
