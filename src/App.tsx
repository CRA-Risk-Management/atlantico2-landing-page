import "@mantine/core/styles.css";
import "./index.css";
import { Box, Flex, MantineProvider, Stack, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { NavBar } from "./components/NarBar";
import { theme } from "./theme";
import { Hero } from "./components/Hero";
import { Mission } from "./components/Mission";
import { Vission } from "./components/Vission";
import { Results } from "./components/Results";
import { Carousel } from "./components/Carousel";
import { Footer } from "./components/Footer";

function AppContent() {
  const mantineTheme = useMantineTheme();
  const isWideScreen = useMediaQuery(`(min-width: ${mantineTheme.breakpoints.lg})`);

  return (
    <Stack mih="100dvh" bg="var(--mantine-color-body)" align="stretch" justify="flex-start" gap={0}>
      <NavBar />
      <Hero />
      {isWideScreen ? (
        <Flex w="100%" align="stretch" gap={0}>
          <Box flex={1}>
            <Mission />
          </Box>
          <Box flex={1}>
            <Vission />
          </Box>
        </Flex>
      ) : (
        <>
          <Mission />
          <Vission />
        </>
      )}
      <Results />
      <Carousel />
      <Footer />
    </Stack>
  );
}

function App() {
  return (
    <>
      <MantineProvider theme={theme} forceColorScheme="light">
        <AppContent />
      </MantineProvider>
    </>
  );
}

export default App;
