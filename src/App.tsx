import { ThemeProvider } from "styled-components"
import { Home } from "./pages/Home"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>    
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
      <GlobalStyle/>
    </ThemeProvider>
  )
}
