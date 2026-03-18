import { Bedtime, Sunny } from "@mui/icons-material";
import { Button, useMantineColorScheme } from "@mantine/core";

export const ColorSchemeToggler = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <>
      {colorScheme == "light" ? (
        <Button fullWidth variant="transparent" onClick={() => setColorScheme("dark")} rightSection={<Bedtime />}>
          Modo oscuro
        </Button>
      ) : (
        <Button fullWidth variant="transparent" onClick={() => setColorScheme("light")} rightSection={<Sunny />}>
          Modo claro
        </Button>
      )}
    </>
  );
};
