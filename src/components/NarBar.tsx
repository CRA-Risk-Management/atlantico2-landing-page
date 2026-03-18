import { Burger, Button, Flex, Image, Menu, useMantineTheme } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

const navLinks = [
  { label: "Objetivo", href: "#mision" },
  { label: "Misión y Visión", href: "#vision" },
  { label: "Resultados", href: "#resultados" },
];

export const NavBar = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <Flex
      p={10}
      mah={50}
      align={"center"}
      justify={"space-between"}
      w={"100%"}
      bg={"var(--mantine-color-body)"}
      style={{
        borderBottom: "1px solid var(--mantine-color-default-border)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <Flex gap={10} align={"center"}>
        <a href="https://www.crautonoma.gov.co/">
          <Image h={30} w={"auto"} src={"/logo.svg"} />
        </a>
        <a href="https://www.inubac.com/">
          <Image h={30} w={"auto"} src={"/inubac.png"} />
        </a>
      </Flex>
      <Flex gap={10} align={"center"} justify={"flex-end"}>
        {isMobile ? (
          <Menu opened={opened} onClose={close} position="bottom-end" withArrow>
            <Menu.Target>
              <Burger opened={opened} onClick={toggle} size="sm" aria-label="Navegación" />
            </Menu.Target>
            <Menu.Dropdown>
              {navLinks.map((link) => (
                <Menu.Item key={link.href} component="a" href={link.href} onClick={close}>
                  {link.label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        ) : (
          <Flex gap={4} align={"center"}>
            {navLinks.map((link) => (
              <Button key={link.href} component="a" href={link.href} variant="subtle" size="sm">
                {link.label}
              </Button>
            ))}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
