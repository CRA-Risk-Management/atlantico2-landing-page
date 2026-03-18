import { Flex, Image, Text } from "@mantine/core";
import { Slide } from "./Slide";

export const Footer = () => {
  return (
    <>
      <Slide
        imageSrc={import.meta.env.BASE_URL + "backgrounds/footer.jpg"}
        red={0}
        green={95}
        blue={150}
        direction="180deg"
        limit="100%"
        mobileMinHeight="20dvh"
        desktopMinHeight="14rem"
      />

      <Flex component="footer" direction="column" align="center" justify="center" gap="xs" py="md" px="xl" bg="#005F96">
        <Flex align="center" justify="center" gap="xl" wrap="wrap">
          <Image src={import.meta.env.BASE_URL + "CRA-negative.png"} h={30} w="auto" />
          <Image src={import.meta.env.BASE_URL + "INUBAC-negative.png"} h={30} w="auto" />
          <Image src={import.meta.env.BASE_URL + "ANDI-negative.png"} h={30} w="auto" />
        </Flex>
        <Text c="white" size="xs" ta="center">
          Corporación Autónoma Regional del Atlántico &copy; 2026
        </Text>
      </Flex>
    </>
  );
};
