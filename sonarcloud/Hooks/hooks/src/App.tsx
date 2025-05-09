
import DataTableSection from "./components/organisms/DataTableSelection/index.tsx";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../src/theme/theme.ts";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
   <DataTableSection />

   </ThemeProvider>
  );
}

export default App;   
