import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem bg="tomato" gridArea="nav">
          <NavBar />
        </GridItem>
        <GridItem gridArea="main">
          <GameGrid />
        </GridItem>
        <GridItem bg="lightblue" gridArea="aside">
          Sidebar
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
