import MainContent from "./components/Content/MainContent/MainContent";
import NavBar from "./components/NavBar/NavBar";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import SubContent from "./components/Content/SubContent/SubContent";

const theme = {
  softOrange: "hsl(35, 77% , 62%)",
  softRed: "hsl(5, 85%, 63%)",
  offWhite: "hsl(36, 100%, 99%)",
  darkGrayishblue: "hsl(236, 13%, 42%)",
  grayishBlue: "#999aa5",
  veryDarkBlue: "hsl(240, 100%, 5%)",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main className="p-lg-5 mx-lg-5">
        <NavBar />
        <MainContent />
        <SubContent />
      </main>
    </ThemeProvider>
  );
}

export default App;
