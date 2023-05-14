import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import  NavBar  from "./components/Navbar";
import Dic from "./components/Dic";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ChakraProvider >
      <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Dic isDarkMode={isDarkMode} />
    </ChakraProvider>
  );
}

export default App;
